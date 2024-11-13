from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Registration
from .serializers import RegistrationSerializer
from django.core.mail import send_mail

# Create your views here.


# Registration Process
@api_view(['GET','POST'])
def registration_create(request):
    if request.method == 'GET':
        users = Registration.objects.all()
        serializer1 = RegistrationSerializer(users,many=True)
        return Response(serializer1.data)
    elif request.method == 'POST':
        serializer2 = RegistrationSerializer(data=request.data)
        if serializer2.is_valid():
            serializer2.save()
            return Response(serializer2.data ,status=status.HTTP_201_CREATED)
        return Response(serializer2.errors,status=status.HTTP_400_BAD_REQUEST)

#Login Process
@api_view(['POST'])
def login_user(request):
    if request.method == 'POST':
        emergency_contact_no = request.data.get('emergency_contact_no')
        emergency_email = request.data.get('emergency_email')

        try:
            user = Registration.objects.get(emergency_contact_no=emergency_contact_no, emergency_email=emergency_email)
            serializer = RegistrationSerializer(user)
            return Response({'message': 'Login successful', 'user': serializer.data}, status=status.HTTP_200_OK)
        except Registration.DoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)  # Method not allowed


# send Mail Alert
@api_view(['POST'])
def mail_alert(request):
    try:
        # Fetch all registered users
        users = Registration.objects.all()
        
        for user in users:
            # Send alert email to each user's emergency email
            send_mail(
                'Emergency Alert',
                f'Emergency alert triggered. Please take immediate action.',
                '625001inskumar@gmail.com',  # Sender's email
                [user.emergency_email],  # Recipient's email
                fail_silently=False,
            )
            
            # If extra_email is provided, send alert to that as well
            if user.extra_email:
                send_mail(
                    'Emergency Alert',
                    f'Emergency alert triggered. Please take immediate action.',
                    '625001inskumar@gmail.com',  # Sender's email
                    [user.extra_email],  # Extra recipient's email
                    fail_silently=False,
                )
        
        return Response({'message': 'Alert sent successfully to all registered users'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

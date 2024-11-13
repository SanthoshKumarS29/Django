from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registration_create, name='registration_create'),
    path('login/',views.login_user, name='login_user'),
    path('send-alert/',views.mail_alert, name='mail')
    # path('register/<int:pk>/', views.registration_detail, name='registration_detail'),
    # path('register/list/', views.registration_list, name='registration_list'),
]

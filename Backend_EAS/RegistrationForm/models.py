from django.db import models

class Registration(models.Model):
    name = models.CharField(max_length=100)
    dob = models.DateField()
    email = models.EmailField()
    address = models.TextField()
    qualification = models.CharField(max_length=100)
    contact_no = models.CharField(max_length=15)
    age = models.CharField(max_length=15)
    major_problem = models.CharField(max_length=100)
    emergency_contact_no = models.CharField(max_length=15)
    emergency_email = models.EmailField()
    extra_email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return self.name

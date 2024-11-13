# Generated by Django 5.1 on 2024-08-18 03:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('dob', models.DateField()),
                ('email', models.EmailField(max_length=254)),
                ('address', models.TextField()),
                ('qualification', models.CharField(max_length=100)),
                ('contact_no', models.CharField(max_length=15)),
                ('age', models.CharField(max_length=15)),
                ('major_problem', models.CharField(max_length=100)),
                ('emergency_contact_no', models.CharField(max_length=15)),
                ('emergency_email', models.EmailField(max_length=254)),
                ('extra_email', models.EmailField(blank=True, max_length=254, null=True)),
            ],
        ),
    ]
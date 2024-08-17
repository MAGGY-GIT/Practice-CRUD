from django.db import models

# Create your models here.
class Student(models.Model):
    studentID = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    registrationNo = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    course = models.CharField(max_length=100)

    def __str__ (self):
        return self.first_name + "   " + self.last_name
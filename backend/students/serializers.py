# this serializer will convert JSON data to django models data and vice versa

from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('studentID', 'first_name', 'last_name', 'registration_no', 'email', 'course',)
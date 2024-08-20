from rest_framework.views import APIView
from .models import Student
from .serializers import StudentSerializer
from django.http import JsonResponse
from django.http.response import Http404
from rest_framework.response import Response

# Create your views here.
#logic fro CRUD operations

class StudentView(APIView):

    #this function will allow user to create objects in the database
    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)
        #context dictionary data has been called

        #will check if the JSON data in correct in the datafields thn save it
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Account Created", safe=False)
        return JsonResponse("Failed Account Registration", safe=False)
    

    #creting a utility function
    #a simple api for GET function
    def get_student(self, pk):
        try:
            student = Student.objects.get(studentID=pk)
            return student 
        #this conditional is incase a student does not exist or if there is an error wih calling a student
        except Student.DoesNotExist:
            raise Http404


    def get(self, request, pk=None):
        #By setting pk=None, you're making pk optional. 
        #This means that if the put method is called without a pk being provided, pk will default to None.
        if pk:
            data = self.get_student(pk)
            #this means that the data that is being retrieved will use 
            #the format set above via the api function and will use the PRIMARY KEY

            #the data will then be presented via the serializer in JSON format after the 
            #the above line calls on the specific data
            serializer = StudentSerializer(data)
        else:
            #this is in the instance the pk of the student is not specified
            #all the student will be called from the model
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)
            #to allow multiple rows to appear
        return Response(serializer.data)
        #will return data in JSON format

    #this is the edit function
    def put(self, request, pk=None):
        student_to_update = Student.objects.get(studentID=pk)
        serializer = StudentSerializer(instance=student_to_update, data=request.data, partial=True)
        #the instance tells the serializer which object need to be called and updated
        #data=request.data: This passes the new data from the request to the serializer so it knows what changes to make.
        #partial=True: This allows you to update only part of the student data (not all fields need to be provided).

        #if the above is valid the changes will be saved but if not an error message will be shown
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Account Updated Successfully", safe=False)

        return JsonResponse("Failed To Update Student Account")
    
    #this is delete function
    def delete(self, request, pk=None):
        student_to_delete = Student.objects.get(studentID=pk)
        student_to_delete.delete()
        
        return JsonResponse("Student Account Deleted Successfully", safe=False)

        





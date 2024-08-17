from rest_framework.views import APIView
from .models import Student
from .serializers import StudentSerializer
from django.http import JsonResponse

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




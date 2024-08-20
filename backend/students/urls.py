from django.urls import path
from .views import StudentView

urlpatterns = [
    path('students/', StudentView.as_view(), name="student"),

    #this url if for displaying students will pk=id
    path('students/<int:pk>', StudentView.as_view(), name="studentdetail"),

]

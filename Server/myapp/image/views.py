from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ImageSerializers
from .models import Image
# Create your views here.



@api_view(['GET','POST','PUT', 'DELETE'])
def getRoutes(request):
     routes = [
        {
            'Endpoint': '/images/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/images/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/images/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/images/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/images/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
     return Response(routes)

@api_view(['GET'])
def getImage(request, pk):
    images = Image.objects.get(id=pk)
    serializer = ImageSerializers(images, many=True)
    return Response(serializer.data)

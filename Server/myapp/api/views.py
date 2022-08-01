from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Note
from .serializers import NoteSerializer
from api import serializers
from django.shortcuts import render, redirect, get_object_or_404


from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE

@method_decorator(csrf_exempt, name='dispatch')
@api_view(['GET', 'POST'])
def getNotes(request):

    if request.method == 'GET':
        return getNotesList(request)

    if request.method == 'POST':
       if request.method == 'POST':
        category = request.POST['category']
        title = request.POST['title']
        sub_title = request.POST['sub_title']
        body = request.POST['body']
        image = request.FILES['image']
        fileupload = Note(
            title=title,
            sub_title=sub_title,
            category=category,
            body=body,
            image=image
        )
        fileupload.save()
        return redirect('create-note')


@method_decorator(csrf_exempt, name='dispatch')
@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):

    if request.method == 'GET':
        return getNoteDetail(request, pk)

    if request.method == 'PUT':
        return updateNote(request, pk)

    if request.method == 'DELETE':
        return deleteNote(request, pk)

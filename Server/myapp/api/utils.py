from turtle import title
from unicodedata import category
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
from django.shortcuts import render, redirect, get_object_or_404
from .form import *


def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)


def createNote(request):
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
    else:
        fileuploadForm = NoteForm
     
        # form = NoteForm(request.POST)
        # if form.is_valid():
        #     post = form.save(commit=False)
            
        #     post.save()
        #     return redirect('create-note')
        # else:
        #     return redirect('create-note')
            


def updateNote(request, pk):
    note = get_object_or_404(Note,id=pk)
    
    if request.method == 'PUT':
        image = request.FILES['image']

        form = NoteForm(request.POST, request.FILES ,instance=note)
        if form.is_valid():
            put = form.save(commit=False)
            put.save()
            return redirect('update-note', note.pk)
        else:
            return redirect('update-note')

def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')

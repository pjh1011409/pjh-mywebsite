from django import forms
from .models import *
  
class NoteForm(forms.ModelForm):
  
    class Meta:
        model = Note
        fields = ['category', 'title', 'sub_title','body','image']
from tkinter.font import names
from unicodedata import name
from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    
    path('notes/', views.getNotes, name = "notes"), #게시판 메인페이지 - 전체 데이터 보여주는 notes
    path('notes/<str:pk>/', views.getNote, name='note'), #게시판 상세페에지 - 각각의 id값에 맞는 note

    path('notes/create/', views.createNote, name="create-note"), #게시판 글작성
    path('notes/<str:pk>/update/', views.updateNote, name='update-note'), #게시판 글수정
    path('notes/<str:pk>/delete/', views.deleteNote, name='delete-note'), #게시판 글삭제

    path('token/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]   
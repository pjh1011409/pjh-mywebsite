from tkinter.font import names
from unicodedata import name
from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name="routes"),

    path('images/<str:pk>/', views.getImage, name="images")
]


from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pybo/', include('pybo.urls')),
    path('', include('mainApp.urls')),
    path('common/', include('common.urls')),

]

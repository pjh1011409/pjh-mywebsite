from django.db import models

# Create your models here.
class Image(models.Model):
    image = models.ImageField(null = True, blank=True)
    id = models.AutoField(primary_key=True)


# Generated by Django 4.0.3 on 2022-06-14 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='category',
            field=models.CharField(default='', max_length=50),
        ),
    ]
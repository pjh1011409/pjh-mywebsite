# Generated by Django 4.0.3 on 2022-08-04 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_delete_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='sub_title',
            new_name='subTitle',
        ),
    ]

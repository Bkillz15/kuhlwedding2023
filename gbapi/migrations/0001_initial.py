# Generated by Django 4.1.5 on 2023-02-01 02:23

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='guestdata',
            fields=[
                ('guestID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('guestName', models.CharField(max_length=50, unique=True)),
                ('associatedGuests', models.CharField(blank=True, default=None, max_length=500, null=True)),
                ('skillTestingQ', models.CharField(default='(2+6)/4+17', max_length=500)),
                ('skillTestingA', models.CharField(default='19', max_length=500)),
                ('rsvpSubmitted', models.BooleanField(default=False)),
                ('coming', models.BooleanField(default=False)),
                ('dinnerChoice', models.CharField(blank=True, default='', max_length=16)),
                ('dietaryRes', models.CharField(blank=True, default='', max_length=200)),
                ('sleepOver', models.BooleanField(default=False)),
                ('busRide', models.BooleanField(default=False)),
                ('songReqTitle', models.CharField(blank=True, default='', max_length=200)),
                ('songReqArtist', models.CharField(blank=True, default='', max_length=200)),
                ('comments', models.CharField(blank=True, default='', max_length=5000)),
                ('createdAt', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('lastModified', models.DateTimeField(editable=False)),
            ],
        ),
    ]

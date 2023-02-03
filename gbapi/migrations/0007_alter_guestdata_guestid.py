# Generated by Django 4.1.5 on 2023-02-02 01:28

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('gbapi', '0006_alter_guestdata_associatedguests_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guestdata',
            name='guestID',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]

# Generated by Django 4.1.5 on 2023-02-02 01:22

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('gbapi', '0004_alter_guestdata_associatedguests_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guestdata',
            name='guestID',
            field=models.UUIDField(default=uuid.UUID('4b15ce71-bfef-4ff2-8c1a-7a389beeeca2'), editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]

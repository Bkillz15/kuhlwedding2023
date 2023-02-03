from django.db import models
from django.utils import timezone
import uuid

# Create your models here.
class guestdata(models.Model):
    guestID             = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, editable=False ) # ?
    guestName           = models.CharField(max_length=50, unique=True)
    associatedGuests    = models.CharField(max_length=500, blank=True, null=True, default=None)
    skillTestingQ       = models.CharField(max_length=500, default="(2+6)/4+17")
    skillTestingA       = models.CharField(max_length=500, default="19" )
    rsvpSubmitted       = models.BooleanField(null=False, default=False)
    coming              = models.BooleanField(null=False, default=False)
    dinnerChoice        = models.CharField(max_length=16, blank=True, default="")
    dietaryRes          = models.CharField(max_length=200, blank=True, default="")
    sleepOver           = models.BooleanField(null=False, default=False)
    busRide             = models.BooleanField(null=False, default=False)
    songReqTitle        = models.CharField(max_length=200, blank=True, default="")
    songReqArtist       = models.CharField(max_length=200, blank=True, default="")
    comments            = models.CharField(max_length=5000, blank=True, default="")
    createdAt           = models.DateTimeField(default= timezone.now, editable=False)
    lastModified        = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        self.lastModified = timezone.now()
        return super(guestdata, self).save(*args, **kwargs)
# Create your models here.

from django.contrib import admin
from .models import guestdata
# Register your models here.

class GuestDataAdmin(admin.ModelAdmin):
    list_display = ('guestID',
                    'guestName',
                    'associatedGuests',
                    'skillTestingQ',
                    'skillTestingA',
                    'rsvpSubmitted',
                    'coming',
                    'dinnerChoice',
                    'dietaryRes',
                    'sleepOver',
                    'busRide',
                    'songReqTitle',
                    'songReqArtist',
                    'comments',
                    'createdAt',
                    'lastModified')

admin.site.register(guestdata, GuestDataAdmin)
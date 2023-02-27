from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from import_export import resources
from .models import guestdata
# Register your models here.

class GuestDataResource (resources.ModelResource):

    class Meta:
        model = guestdata
        skip_unchanged = True
        import_id_fields = ('guestID',)
        fields =    ('guestID',
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
        
# class GuestDataAdmin(admin.ModelAdmin):
#     list_display = ('guestID',
#                     'guestName',
#                     'associatedGuests',
#                     'skillTestingQ',
#                     'skillTestingA',
#                     'rsvpSubmitted',
#                     'coming',
#                     'dinnerChoice',
#                     'dietaryRes',
#                     'sleepOver',
#                     'busRide',
#                     'songReqTitle',
#                     'songReqArtist',
#                     'comments',
#                     'createdAt',
#                     'lastModified')

class GuestDataAdmin(ImportExportModelAdmin):
    resource_classes = [GuestDataResource]
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
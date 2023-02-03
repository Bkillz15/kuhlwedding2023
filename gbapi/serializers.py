from rest_framework import serializers
from .models import guestdata

class GuestDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = guestdata
        fields = '__all__'

class GuestNameIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = guestdata
        fields = [
            'guestID',
            'guestName'
        ]

class NameLookupSerializer(serializers.ModelSerializer):
    class Meta:
        model = guestdata
        fields = (  'guestID',
                    'guestName',
                    'skillTestingQ')

class SecretAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = guestdata
        fields = ['skillTestingA',]

class AssociatedGuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = guestdata
        fields = ['associatedGuests',]

class ReactGuestDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = guestdata
        fields = (  'guestID',
                    'guestName',
                    'rsvpSubmitted',
                    'coming',
                    'dinnerChoice',
                    'dietaryRes',
                    'sleepOver',
                    'busRide',
                    'songReqTitle',
                    'songReqArtist',
                    'comments',
                    'lastModified')

class UpdateGuestSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = guestdata
        fields = (  'rsvpSubmitted',
                    'coming',
                    'dinnerChoice',
                    'dietaryRes',
                    'sleepOver',
                    'busRide',
                    'songReqTitle',
                    'songReqArtist',
                    'comments',
                    'lastModified')
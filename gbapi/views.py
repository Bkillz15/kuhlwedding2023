from django.shortcuts import render
from django.db.models import Q
from django.utils import timezone
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import   (GuestDataSerializer, ReactGuestDataSerializer, NameLookupSerializer, UpdateGuestSerializer,
                            SecretAnswerSerializer, GuestNameIDSerializer, AssociatedGuestSerializer)
from .models import guestdata

# Create your views here.

# class GuestView(ListAPIView):
#     #permission_classes = (IsAuthenticated,) #permission classes
#     queryset = guestdata.objects.all()
#     serializer_class = GuestDataSerializer

class GuestNameID(ListAPIView):
    queryset = guestdata.objects.all()
    serializer_class = GuestNameIDSerializer

class GetName(APIView):
    serializer_class = NameLookupSerializer
    lookup_url_kwarg = 'name'

    def get(self, request, format=None):
        name = request.GET.get(self.lookup_url_kwarg)
        if (name == None) or len(name) == 0:
            return Response({'Bad Request': 'No Name Provided'}, status=status.HTTP_400_BAD_REQUEST)
        guestInfo = guestdata.objects.filter(   Q(guestName__istartswith=(name + " ")) |
                                                Q(guestName__iendswith=(" " + name)) |
                                                Q(guestName__iexact=name))
        if not guestInfo.exists():
            return Response({'Not Found': 'Invalid Guest Name'}, status=status.HTTP_404_NOT_FOUND)
        if len(guestInfo) > 1:   
            return Response({'Bad Request': 'Multiple Entries, Be More Specific'}, status=status.HTTP_400_BAD_REQUEST)
        guestData = NameLookupSerializer(guestInfo[0]).data
        return Response(guestData,status=status.HTTP_200_OK)

class GetGuest(APIView):
    #permission_classes = (IsAuthenticated,) #permission classes
    serializer_class = ReactGuestDataSerializer
    lookup_serializer = SecretAnswerSerializer
    id_kwarg = 'id'
    ans_kwarg = 'answer'
   
    def get(self, request, format=None):
        # if not self.request.session.exists(self.request.session.session_key):
        #     self.request.session.create()
        reqID = request.GET.get(self.id_kwarg)
        reqAnswer = request.GET.get(self.ans_kwarg)
        #Check for empty request kwarg
        if (reqID == None) or len(reqID) == 0:
            return Response({'Bad Request': 'Guest ID is Empty'}, status=status.HTTP_400_BAD_REQUEST)
        if (reqAnswer == None) or len(reqAnswer) == 0:
            return Response({'Bad Request': 'Answer is Empty'}, status=status.HTTP_400_BAD_REQUEST)
        #If not empty - pull data from model
        guestInfo = guestdata.objects.filter( guestID=reqID )
        #find associated guests, request all 3
        if not guestInfo.exists():
            return Response({'Guest Not Found': 'Guest ID is Invalid'}, status=status.HTTP_404_NOT_FOUND)
        if len(guestInfo) > 1:   
            return Response({'Bad Request': 'Multiple Results - Database ERROR'}, status=status.HTTP_400_BAD_REQUEST)
        answers = SecretAnswerSerializer(guestInfo[0]).data['skillTestingA'].lower().split(",")
        guestAnswers = reqAnswer.lower().split(",")
        for i in range(len(guestAnswers)):
            if guestAnswers[i] in answers:
                associatedGuests = AssociatedGuestSerializer(guestInfo[0]).data
                lookupGuests = associatedGuests.get('associatedGuests').split(",")
                guestInfo = guestdata.objects.filter(guestID__in=lookupGuests)
                guestData = {}
                for guest in range(len(guestInfo)):
                    data = ReactGuestDataSerializer(guestInfo[guest]).data
                    guestData[data['guestID']] = data
                # self.request.session['skillTestingA'] = reqAnswer
                return Response(guestData,status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Answer is Incorrect'}, status=status.HTTP_400_BAD_REQUEST)




class UpdateGuest(APIView):
    
    serializer_class = UpdateGuestSerializer
    lookup_url_kwarg = 'id'

    def patch(self, request, format=None):

        # if not self.request.session.exists(self.request.session.session_key):
        #     self.request.session.create()
        # Grab PATCH data from request
        postData = request.data
        # Grab UUID for the current user fro url
        reqID = request.GET.get(self.lookup_url_kwarg)
        # Grab the UUID of the guest being updated from data
        updateID = postData.get("guestID")
        # Grab the secret answer from the request
        reqAnswer = postData.get("validation")

        # Check that the ID field and answer fields are not empty before proceeding
        if (reqID == None) or len(reqID) == 0:
            return Response({'Bad Request': 'Missing ID'}, status=status.HTTP_400_BAD_REQUEST)
        if (reqAnswer == None) or len(reqAnswer) == 0:
            return Response({'Bad Request': 'Missing Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        # If not empty - pull data from model
        guestInfo = guestdata.objects.filter( guestID=reqID )
        # Check that the guest being updated exists
        if not guestInfo.exists():
            return Response({'Guest Not Found': 'Guest ID is Invalid'}, status=status.HTTP_404_NOT_FOUND)
        if len(guestInfo) > 1:   
            return Response({'Bad Request': 'Multiple Results - Database ERROR'}, status=status.HTTP_400_BAD_REQUEST)
        answers = SecretAnswerSerializer(guestInfo[0]).data['skillTestingA'].lower().split(",")
        guestAnswers = reqAnswer.lower().split(",")
        for i in range(len(guestAnswers)):
            if guestAnswers[i] in answers:
                break
            else:
                return Response({'Bad Request': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        #Get all data IDs of associated guests from database and store in list
        associatedGuests = AssociatedGuestSerializer(guestInfo[0]).data
        lookupGuests = associatedGuests.get('associatedGuests').split(",")
        #Check that the guest is associated with the request user
        if updateID in lookupGuests:
            serializer = self.serializer_class(data = postData)
            if not serializer.is_valid():
                return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)

            #Update data
            queryData = guestdata.objects.filter( guestID=updateID )
            updateData = queryData[0]

            updateData.rsvpSubmitted   = True
            updateData.coming          = serializer.data.get('coming')
            updateData.dinnerChoice    = serializer.data.get('dinnerChoice')
            updateData.dietaryRes      = serializer.data.get('dietaryRes')
            updateData.sleepOver       = serializer.data.get('sleepOver')
            updateData.busRide         = serializer.data.get('busRide')
            updateData.songReqTitle    = serializer.data.get('songReqTitle')
            updateData.songReqArtist   = serializer.data.get('songReqArtist')
            updateData.comments        = serializer.data.get('comments')
            updateData.lastModified    = timezone.now
            updateData.save(update_fields=[
                'rsvpSubmitted',
                'coming',
                'dinnerChoice',
                'dietaryRes',
                'sleepOver',
                'busRide',
                'songReqTitle',
                'songReqArtist',
                'comments',
                'lastModified',
            ])
            #return data with updated user info
            return Response(ReactGuestDataSerializer(updateData).data, status=status.HTTP_200_OK)
        else:
            return Response({'Bad Request': 'Guest Update Not Associated with Validated Guest'}, status=status.HTTP_400_BAD_REQUEST)
          
        

from django.urls import path
from .views import  GetGuest, GetName, GuestNameID, UpdateGuest
# GuestView,

urlpatterns = [
   
    path('getIDs',GuestNameID.as_view()),
    path('get-guest',GetGuest.as_view()),
    path('get-name',GetName.as_view()),
    path('update-guest',UpdateGuest.as_view())
]

 # path('', GuestView.as_view()),
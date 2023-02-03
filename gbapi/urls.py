from django.urls import path
from .views import GuestView, GetGuest, GetName, GuestNameID, UpdateGuest

urlpatterns = [
    path('', GuestView.as_view()),
    path('getIDs',GuestNameID.as_view()),
    path('get-guest',GetGuest.as_view()),
    path('get-name',GetName.as_view()),
    path('update-guest',UpdateGuest.as_view())
]
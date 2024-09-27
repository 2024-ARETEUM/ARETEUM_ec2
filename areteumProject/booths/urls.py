from django.urls import path, include
from .views import *
from rest_framework.routers import SimpleRouter 

somtalk_router = SimpleRouter(trailing_slash=False) 
somtalk_router.register('somtalk', SomTalkViewSet, basename='somtalk')

urlpatterns = [
    path('booth-day1/', BoothDay1ListView.as_view()),
    path('booth-day2/', BoothDay2ListView.as_view()),
    path('booth-detail/<int:booth_id>/', BoothDetailView.as_view()),
    path('booth-search/', SearchBoothView.as_view()),
    path('', include(somtalk_router.urls)),
]
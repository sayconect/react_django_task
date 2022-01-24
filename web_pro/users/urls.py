from django.db import router
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserModelViewSet, GroupModelViewSet

router = DefaultRouter()
router.register(r'users', UserModelViewSet)
router.register(r'groups', GroupModelViewSet)

urlpatterns = [
    path('', include(router.urls)),

]

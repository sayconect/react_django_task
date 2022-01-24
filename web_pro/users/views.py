from rest_framework import viewsets
from .serializers import UsersSerializer, GroupSerializer

from .models import NewUser, Group
# Create your views here.

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = NewUser.objects.all()
    serializer_class = UsersSerializer


class GroupModelViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


# FROM python:3.9.6
# ENV PYTHONUNBUFFERED 1
# WORKDIR /app/api
# COPY requirements.txt ./
# RUN pip install -r requirements.txt
# COPY . ./
# EXPOSE 8000


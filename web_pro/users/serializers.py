from rest_framework import serializers
from .models import Group, NewUser


class UsersSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%d.%m.%Y', read_only=True)
    group = serializers.SlugRelatedField(
        queryset=Group.objects.all(),
        slug_field='name'
    )
    # group = serializers.StringRelatedField()
    class Meta:
        model = NewUser
        fields = ['id', 'username', 'created_at', 'group']



class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name', 'description']
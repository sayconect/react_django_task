from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomAccountManager(BaseUserManager):

    def create_user(self, username, group=None, password=None):
        if not username:
            raise ValueError('Users must have a username')
        
        user = self.model(username=username, group=group)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, username, group=None, password=None):
        user = self.create_user(username, group, password)
        user.is_admin = True
        user.save()
        return user




class NewUser(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey('Group', on_delete=models.PROTECT, related_name='groups', null=True)
    is_admin = models.BooleanField(default=False)

    
    USERNAME_FIELD = 'username'

    objects = CustomAccountManager()

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        
        return True

    def has_module_perms(self, users):
    
        return True
    
    @property
    def is_staff(self):
        return self.is_admin



class Group(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=250)

    def __str__(self):
        return self.name




from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.is_active = True
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if not extra_fields.get('is_staff'):
            raise ValueError("Superuser must have is_staff = True")
        
        if not extra_fields.get('is_superuser'):
            raise ValueError("Superuser must have is_superuser = True")
        
        return self.create_user(email, password, **extra_fields)
    
    class CustomUser(AbstractBaseUser):
        email = models.EmailField(max_length=255, unique=True)
        password = models.CharField(max_length=255, null=False)
        fullname = models.CharField(max_length=255, null=False)
        username = models.CharField(max_length=255, null=False)
        role = models.CharField(max_length=255, null=True, blank=True, default='customer')

        is_staff = models.BooleanField(default=False)
        is_superuser = models.BooleanField(default=False)
        is_active = models.BooleanField(default=False)

        USERNAME_FIELD = 'email'
        REQUIRED_FIELDS = ['password', 'username', 'fullname']

        objects = UserManager()

        def __str__(self):
            return self.email
        
        def has_module_perms(self, app_label):
            return True
        
        def has_perm(self, perm, obj=None):
            return True
        


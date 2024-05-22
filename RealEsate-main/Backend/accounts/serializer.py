from rest_framework import serializers
from .models import CustomUser
from rest_framework.authtoken.views import Token
from django.contrib.auth.models import User
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs={
            'password':{
                'write_only':True
            }
        }

    def create(self, validated_data):
        #token for user account and hashing password
        user = CustomUser.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','password']
        extra_kwargs={
            'password':{
                'write_only':True
            }
        }

    def create(self, validated_data):
        #token for user account and hashing password
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
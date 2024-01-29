from rest_framework import serializers
from .models import CustomUser
from rest_framework.authtoken.views import Token

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'password':{
            'write_only': True,
            'required': True
        }}

        def create(self, validated_data):
        #token for user account and hashing password
        user = CustomUser.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
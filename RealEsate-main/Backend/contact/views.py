from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from . serializers import ContactSerializer
from django.core.mail import send_mail
from rest_framework.response import Response

class ContactCreateView(APIView):
    def post(self, request):

        try:
            serializer = ContactSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message failed send'})

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Property
from .serializers import PropertySerializer

@api_view(['GET'])
def list_properties(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_property(request, property_id):
    try:
        property = Property.objects.get(pk=property_id)
        serializer = PropertySerializer(property)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Property.DoesNotExist:
        return Response({'error': 'Property not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_property(request):
    serializer = PropertySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_property(request, property_id):
    try:
        property = Property.objects.get(pk=property_id)
        serializer = PropertySerializer(property, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Property.DoesNotExist:
        return Response({'error': 'Property not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_property(request, property_id):
    try:
        property = Property.objects.get(pk=property_id)
        property.delete()
        return Response({'message': 'Property deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    except Property.DoesNotExist:
        return Response({'error': 'Property not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def search_properties(request):
    # Example: /api/search/?city=New York&type=Apartment&category=Sale
    city = request.query_params.get('city', '')
    property_type = request.query_params.get('type', '')
    category = request.query_params.get('category', '')

    properties = Property.objects.filter(
        location__icontains=city,
        type__icontains=property_type,
        category__icontains=category
    )

    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
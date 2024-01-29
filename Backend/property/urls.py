from django.urls import path
from .views import list_properties, get_property, create_property, update_property, delete_property, search_properties

urlpatterns = [
    path('properties/', list_properties, name='list_properties'),
    path('properties/<int:property_id>/', get_property, name='get_property'),
    path('properties/create/', create_property, name='create_property'),
    path('properties/<int:property_id>/update/', update_property, name='update_property'),
    path('properties/<int:property_id>/delete/', delete_property, name='delete_property'),
    path('search/', search_properties, name='search_properties'),
]
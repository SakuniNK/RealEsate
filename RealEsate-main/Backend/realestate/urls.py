from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('login/',obtain_auth_token),
    path('contact/', include('contact.urls')),
    path('property/', include('property.urls')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

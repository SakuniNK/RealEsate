from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
    path('contact/', include('contact.urls')),
    path('property/', include('ContactCreateView.urls')),
]

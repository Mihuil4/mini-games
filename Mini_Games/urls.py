from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Mini_Games_App', include('Mini_Games_App.urls'))
]

from django.urls import path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='/static/index.html')),
    path('index/', views.index, name="index"),
    path('auth/', views.auth, name="auth"),
    path('feedback/', views.feedback, name="feedback"),
    path('reg/', views.reg, name="reg")
]
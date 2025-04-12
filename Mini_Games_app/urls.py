from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('index/', views.index, name="index"),
    path('auth/', views.auth, name="auth"),
    path('feedback/', views.feedback, name="feedback"),
    path('reg/', views.reg, name="reg")
]
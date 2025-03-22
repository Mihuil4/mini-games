from django.urls import path

from . import views

urlpatterns = [
    path('register/', views.register, name="register"),
    path('feedback/', views.feedback, name="feedback")
]
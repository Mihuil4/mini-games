from django.urls import path
# from django.urls import include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('index/', views.index, name="index"),
    path('auth/', views.auth, name="auth"),
    path('feedback/', views.feedback, name="feedback")
    # path('login/', include('Mini_Games_app.urls'))
]
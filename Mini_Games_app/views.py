from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
# from .models import User

def index(request):
    return render(request, 'index.html')

def auth(request):
    if request.method == 'POST':
        username = request.POST.get('login')
        password = request.POST.get('password')
        print(f'login: {login},password:{password}')
        user = authenticate(request, username = username, password = password)
        if user is not None:
            login(request, user)
            return render(request, 'auth.html')
        else:
            return render(request, 'auth.html', {'error': 'неверные логин и пароль'})
    return render(request, 'auth.html')

def reg(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        user = User.objects.create_user(username,email,password)
        user.save()
        login(request,user)

def feedback(request):
    if request.method == 'POST':
        email_address = request.POST.get('email')
        if email_address:
            email = User(email=email_address, send_date=timezone.now())
            email.save()
            print(f'Получен email: {email}')
            return JsonResponse({'status': 'success', 'message': 'Email получен' })
        else:
            return JsonResponse({'status': 'error', 'message': 'Email не получен' })
    return render(request, 'feedback.html')
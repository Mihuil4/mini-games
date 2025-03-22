from django.shortcuts import render
from django.http import JsonResponse
from django.utils import timezone
from .models import User

def register(request):
    return render(request, 'register.html')

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
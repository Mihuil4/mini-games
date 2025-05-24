from django.db import models

class User(models.Model):
    login = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    # password = 
    send_date = models.DateTimeField('Email sent')
    def __str__(self):
        return self.email
class Game(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.title
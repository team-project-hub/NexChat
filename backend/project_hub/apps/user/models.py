from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'  # Use email to log in
    REQUIRED_FIELDS = ['username']  # Required when creating superuser

    def __str__(self):
        return self.email

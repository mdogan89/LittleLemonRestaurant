from django.db import models

# Create your models here.


class HighScore(models.Model):
    HighScore = models.JSONField()

from django.shortcuts import render
from .models import HighScore
from .serializers import HighScoreSerializer
from rest_framework.generics import ListCreateAPIView


# Create your views here.


class HighScoresView(ListCreateAPIView):
    queryset = HighScore.objects.all()
    serializer_class = HighScoreSerializer

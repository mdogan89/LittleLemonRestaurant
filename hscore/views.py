from django.shortcuts import render
from .models import HighScore
from .serializers import HighScoreSerializer
from rest_framework.generics import (
    ListCreateAPIView,
    CreateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
)


# Create your views here.


class HighScoresView(ListCreateAPIView):
    queryset = HighScore.objects.all()
    serializer_class = HighScoreSerializer


class SingleScoreView(CreateAPIView, RetrieveUpdateAPIView, DestroyAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = HighScore.objects.all()
    serializer_class = HighScoreSerializer


# class LastScoreView(ListCreateAPIView):
#     queryset = HighScore.objects
#     serializer_class = HighScoreSerializer

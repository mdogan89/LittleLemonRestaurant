from django.urls import path
from . import views


urlpatterns = [
    path("", views.HighScoresView.as_view(), name="Highscores"),
    path("<int:pk>", views.SingleScoreView.as_view(), name="singlescore"),
]

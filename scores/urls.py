from django.urls import path
from . import views


urlpatterns = [path("", views.HighScoresView.as_view(), name="Highscores")]

from django.shortcuts import render
from .models import MenuItem, Table, ReservationTest
from .serializers import MenuItemSerializer, TableSerializer, ReservationTestSerializer
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
    CreateAPIView,
)
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated


# Create your views here.


def index(request):
    return render(request, "index.html", {})


class MenuItemsView(ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class SingleMenuItemView(CreateAPIView, RetrieveUpdateAPIView, DestroyAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


# class BookingViewSet(ModelViewSet):
#     queryset = Booking.objects.all()
#     serializer_class = BookingSerializer
#     # permission_classes = [IsAuthenticated]


class TableViewSet(ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer


class ReservationTestViewSet(ModelViewSet):
    queryset = ReservationTest.objects.all()
    serializer_class = ReservationTestSerializer

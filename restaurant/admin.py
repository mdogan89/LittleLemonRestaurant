from django.contrib import admin
from .models import MenuItem, Table
from contact.models import ContactForm
from hscore.models import HighScore

# Register your models here.
admin.site.register(MenuItem)
admin.site.register(Table)
admin.site.register(ContactForm)
admin.site.register(HighScore)

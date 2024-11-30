from django.urls import path
from .views.post_filter import filter_employees
from .views.get_all_people import get_filter_options

urlpatterns = [
    path('filter/',filter_employees, name='filter_employees'),
    path('filter/options/',get_filter_options, name='filter_options'),
]

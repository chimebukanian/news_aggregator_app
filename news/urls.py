from django.contrib import admin 
from django.urls import path 
from news import views 

app_name='news'
urlpatterns = [ 
   path('headlines', views.index, name ='index'), 
   path('', views.home, name ='home'), 
   path('about', views.about, name ='about'), 


]

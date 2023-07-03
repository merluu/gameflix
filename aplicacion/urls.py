from django.urls import path
from.views import home,contacto,cartelera, juego1, juego2, juego3, juego4, juego5,juego6,juego7,juego8,register,login,nuevo_juego,juego_inicio,indexadmin


urlpatterns = [
    path('', home,name="home" ),
    path('contacto/', contacto,name="contacto" ),
    path('cartelera/', cartelera,name="cartelera" ),
    path('juego1/', juego1,name="juego1" ),
    path('juego2/', juego2,name="juego2" ),
    path('juego3/', juego3,name="juego3" ),
    path('juego4/', juego4,name="juego4" ),
    path('juego5/', juego5,name="juego5" ),
    path('juego6/', juego6,name="juego6" ),
    path('juego7/', juego7,name="juego7" ),
    path('juego8/', juego8,name="juego8" ),
    path('register/', register,name="register"),
    path('login/', login,name="login"),
    path('nuevo-juego/', nuevo_juego,name="nuevo_juego"),
    path('juego_inicio/', juego_inicio,name="juego_inicio" ),
    path('indexadmin/', indexadmin,name="indexadmin" )
]
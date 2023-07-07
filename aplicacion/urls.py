from django.urls import path
from.views import home,contacto,cartelera, juego1, juego2, juego3, juego4, juego5,juego6,juego7,juego8, registro_usuario,login,agregar_juego,juego_inicio,indexadmin,modificar_juego, eliminar_juego, carrito ,  listar_cliente, modificar_cliente, eliminar_cliente


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
    path('login/', login,name="login"),
    path('agregar_juego/', agregar_juego,name="agregar_juego"),
    path('juego_inicio/', juego_inicio,name="juego_inicio" ),
    path('indexadmin/', indexadmin,name="indexadmin" ),
    path('modificar_juego/<id>/',modificar_juego , name="modificar_juego"),
    path('eliminar_juego/<id>/', eliminar_juego , name="eliminar_juego"),
    path('register/', registro_usuario, name="registro_usuario"),
    path('carrito/', carrito,name="carrito" ),
    path('listar_cliente/', listar_cliente, name ="listar_cliente"),
    path('modificar_cliente/<rut>/',modificar_cliente,name="modificar_cliente"),
    path('eliminar_cliente/<rut>/',eliminar_cliente,name="eliminar_cliente"),

]
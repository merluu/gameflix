from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Juego(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField(default=0)
    descripcion = models.TextField()
    fecha_creacion = models.DateField()
    imagen = models.ImageField(upload_to="juegos", null=True) 

    def __str__(self):
        return self.nombre 
    
class Cliente(models.Model):
    rut=models.CharField(max_length=10,primary_key=True)
    pnombre=models.CharField(max_length=50, null=False)
    snombre=models.CharField(max_length=50, null=False)
    papellido=models.CharField(max_length=50, null=False)
    sapellido=models.CharField(max_length=50, null=False)
    fecha_nacimiento = models.DateField()
    email=models.CharField(max_length=50, null=False)
    usrdjango=models.OneToOneField(User,unique=True,on_delete=models.CASCADE)

def __str__(self):
        return self.pnombre 

class Carrito(models.Model):
    id = models.AutoField(primary_key=True)
    id_cliente = models.ForeignKey(Cliente,on_delete=models.PROTECT)
    fecha = models.DateField()
    total = models.IntegerField()
    estado = models.TextField()

    def __str__(self):
        return self.id 
    
class DetalleCarrito(models.Model):
    id_detalle = models.AutoField(primary_key=True)
    id_carrito = models.ForeignKey(Carrito,on_delete=models.PROTECT)
    id_juego = models.ForeignKey(Juego,on_delete=models.PROTECT)

    def __str__(self):
        return self.id_detalle
    
class Venta(models.Model):
    id_venta = models.AutoField(primary_key=True)
    id_carrito = models.ForeignKey(Carrito,on_delete=models.PROTECT)
    cod_activacion = models.IntegerField()
    fecha_compra = models.DateField()

    def __str__(self):
        return self.id_venta 

opciones_consultas = [
    [0 , "consulta"],
    [1 , "reclamo"],
    [2,"sugerencia"],
    [3, "felicitaciones"]
]

class Contacto(models.Model):
    nombre = models.CharField(max_length=50)
    correo = models.EmailField()
    tipo_consulta = models.IntegerField(choices=opciones_consultas)
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre

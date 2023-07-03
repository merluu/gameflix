from django.contrib import admin
from .models import Juego , Cliente , Carrito , DetalleCarrito , Venta ,Contacto
# Register your models here.

class JuegoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'precio', 'descripcion', 'fecha_creacion']
admin.site.register(Juego, JuegoAdmin)
admin.site.register(Cliente)
admin.site.register(Carrito)
admin.site.register(DetalleCarrito)
admin.site.register(Venta)
admin.site.register(Contacto)



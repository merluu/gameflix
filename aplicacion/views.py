from django.shortcuts import render, redirect, get_object_or_404
from .models import Juego
from .forms import JuegoForm,CustomUserForm
from .forms import ContactoForm
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth import authenticate
from django.contrib import messages
from .models import Cliente
from .forms import ClienteForm
# Create your views here.

def home(request):
    return render(request,'aplicacion/home.html')

def contacto(request):
    return render(request,'aplicacion/contacto.html')

def cartelera(request):
    return render(request,'aplicacion/cartelera.html')

def juego1(request):
    return render(request,'aplicacion/juego1.html')

def juego2(request):
    return render(request,'aplicacion/juego2.html')

def juego3(request):
    return render(request,'aplicacion/juego3.html')

def juego4(request):
    return render(request,'aplicacion/juego4.html')

def juego5(request):
    return render(request,'aplicacion/juego5.html')

def juego6(request):
    return render(request,'aplicacion/juego6.html')

def juego7(request):
    return render(request,'aplicacion/juego7.html')

def juego8(request):
    return render(request,'aplicacion/juego8.html')

def registro_usuario(request):
    if request.method == 'POST':
        form = CustomUserForm(request.POST)
        if form.is_valid():
            form.save()
            # Redireccionar a una página de éxito o hacer cualquier otra acción necesaria
    else:
        form = CustomUserForm()
    
    data = {'form': form}
    return render(request, 'registration/register.html', data)

def login(request):
    return render(request, 'registration/login.html')

def agregar_juego(request):
    data = {
        'form' : JuegoForm() 
    }
    if request.method == 'POST':
        formulario = JuegoForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request,"¡Juego registrado exitosamente!")
        else:
            data["form"] = formulario
    return render(request,'aplicacion/agregar_juego.html',data)

def juego_inicio(request):
    juegos = Juego.objects.all()
    data = {
        'juegos': juegos
    }
    return render(request,'aplicacion/juego_inicio.html',data)

def contacto(request):
    data = {
        'form': ContactoForm()
    }
    if request.method == 'POST':
        formulario = ContactoForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "contacto enviado"
        else:
            data["form"] = formulario
    return render(request,'aplicacion/contacto.html',data)

def indexadmin(request):
    return render(request,'aplicacion/indexadmin.html')

def modificar_juego(request,id):
    
    juego = get_object_or_404(Juego,id=id)

    data = {
        'form': JuegoForm(instance=juego)
    }

    if request.method=='POST':
        formulario = JuegoForm(data=request.POST, instance=juego, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request,"juego modificado correctamente")
            return redirect(to="juego_inicio")
        data["form"] = formulario

    return render(request,'aplicacion/modificar_juego.html',data)

def eliminar_juego(request, id):
    juego = get_object_or_404(Juego, id=id)
    juego.delete()
    messages.success(request, "El juego se ha eliminado exitosamente")
    return redirect(to="juego_inicio")

def carrito(request):
    return render(request,'aplicacion/carrito.html')

def listar_cliente(request):
    clientes = Cliente.objects.all()
    data = {
        'clientes':clientes
    }
    return render(request, 'aplicacion/listar_cliente.html',data)

def modificar_cliente(request, rut):
    cliente = Cliente.objects.get(rut=rut)
    data = {
        'form': ClienteForm(instance=cliente)
    }
    if request.method == 'POST':
        formulario = ClienteForm(data=request.POST, instance=cliente)
        if formulario.is_valid():
            formulario.save()
            data['mensaje'] = "Modificado correctamente"
        data['form'] = formulario

    return render(request, 'aplicacion/modificar_cliente.html', data)

def eliminar_cliente(request, rut):
    cliente = Cliente.objects.get(rut=rut)
    cliente.delete()

    return redirect(to="listar_cliente")

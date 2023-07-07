from django import forms
from django.forms import ModelForm
from .models import Juego
from django.contrib.auth.forms import UserCreationForm
from .models import Contacto
from .models import opciones_consultas
from .models import Cliente
from django.contrib.auth.models import User
from django.conf import settings
import datetime
import re


class CustomUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email',
                  'username', 'password1', 'password2']


class JuegoForm(forms.ModelForm):
    class Meta:
        model = Juego
        fields = ['nombre', 'precio', 'descripcion',
                  'fecha_creacion', 'stock', 'imagen']

        widgets = {
            'fecha_creacion': forms.SelectDateWidget(years=range(2000, 2024))
        }

    def clean_fecha_creacion(self):
        fecha = self.cleaned_data['fecha_creacion']

        if fecha > datetime.date.today():
            raise forms.ValidationError(
                "La fecha de creación debe estar entre los parámetros.")

        return fecha

    def clean_descripcion(self):
        descripcion = self.cleaned_data['descripcion']
        if len(descripcion) <= 20:
            raise forms.ValidationError(
                "La descripción del juego debe tener más de 20 caracteres para ser agregada.")
        return descripcion

    def clean_nombre(self):
        nombre = self.cleaned_data['nombre']
        if len(nombre) <= 3:
            raise forms.ValidationError(
                "El nombre del juego debe tener más de 3 caracteres para ser agregado.")
        elif not re.match("^[a-zA-Z0-9_]+$", nombre):
            raise forms.ValidationError(
                "El nombre del juego solo debe contener letras y números.")
        return nombre

    def clean_precio(self):
        precio = self.cleaned_data['precio']
        if precio <= 5000:
            raise forms.ValidationError(
                "El precio debe ser mayor a 5000.")
        return precio

    def clean_stock(self):
        stock = self.cleaned_data['stock']
        if not re.match(r'^[1-9]\d{0,2}$', str(stock)):
            raise forms.ValidationError("El stock debe ser un número entero entre 1 y 200.")
        return stock
        
    # pinche imagen
    def clean_imagen(self):
        imagen = self.cleaned_data.get('imagen', False)
        if imagen:

            pass

        return imagen


class ContactoForm(forms.ModelForm):
    nombre = forms.CharField(widget=forms.TextInput)
    correo = forms.CharField(widget=forms.TextInput)
    tipo_consulta = forms.ChoiceField(
        choices=opciones_consultas, widget=forms.Select(attrs={'class': 'form-control'}))
    mensaje = forms.CharField(widget=forms.TextInput)

    class Meta:
        model = Contacto
        #fields = ("nombre","correo","tipo_consulta","mensaje")
        fields = '__all__'


class ClienteForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['rut'].widget.attrs['readonly'] = True
        self.fields['rut'].widget.attrs['class'] = 'plomito'

    class Meta:
        model = Cliente
        fields = ['rut', 'pnombre', 'papellido',
                  'sapellido', 'fecha_nacimiento', 'email']

        widgets = {
            'fecha_nacimiento': forms.SelectDateWidget(years=range(1960, 2024))
        }

    def clean_fecha_nacimiento(self):
        fecha = self.cleaned_data['fecha_nacimiento']

        if fecha > datetime.date.today():
            raise forms.ValidationError(
                "la fecha no debe ser mayor a la fecha actual")

        return fecha

    def clean_pnombre(self):
        pnombre = self.cleaned_data['pnombre']
        if len(pnombre) <= 3:
            raise forms.ValidationError(
                "El nombre del cliente debe tener más de 3 caracteres para ser modificado.")
        elif not re.match("^[a-zA-Z]+$", pnombre):
            raise forms.ValidationError(
                "El nombre del cliente solo debe contener letras.")
        return pnombre

    def clean_papellido(self):
        papellido = self.cleaned_data['papellido']
        if len(papellido) <= 3:
            raise forms.ValidationError(
                "El apellido del cliente debe tener más de 3 caracteres para ser modificado.")
        elif not re.match("^[a-zA-Z]+$", papellido):
            raise forms.ValidationError(
                "El apellido del cliente solo debe contener letras.")
        return papellido

    def clean_sapellido(self):
        sapellido = self.cleaned_data['sapellido']
        if len(sapellido) <= 3:
            raise forms.ValidationError(
                "El apellido del cliente debe tener más de 3 caracteres para ser modificado.")
        elif not re.match("^[a-zA-Z]+$", sapellido):
            raise forms.ValidationError(
                "El apellido del cliente solo debe contener letras.")
        return sapellido

    def clean_email(self):
        email = self.cleaned_data['email']

        if '.' not in email or '@' not in email:
            raise forms.ValidationError(
                "El correo electrónico debe contener un punto (.) y un símbolo de arroba (@) para ser modificado")

        return email

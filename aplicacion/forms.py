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

class CustomUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password1', 'password2']
        

class JuegoForm(forms.ModelForm):

    nombre = forms.CharField(widget=forms.TextInput)
    precio = forms.CharField(widget=forms.TextInput)
    descripcion = forms.CharField(widget=forms.TextInput)
    fecha_creacion = forms.DateField(widget=forms.SelectDateWidget, input_formats=settings.DATE_INPUT_FORMATS)
    stock = forms.CharField(widget=forms.TextInput)

    class Meta:
        model = Juego
        fields = ['nombre', 'precio', 'descripcion', 'fecha_creacion','stock','imagen']

    def val_nombre(self):
        nombre = self.cleaned_data.get('nombre')
        if len(nombre)<4:
            raise forms.ValidationError("El nombre debe tener al menos 4 caracteres")
        return nombre
    

    def va_precio(self):
        precio =self.cleaned_data.get('precio')
        if precio<=0:
            raise forms.ValidationError("El precio tiene que ser mayor que 0")
        return precio
    

class ContactoForm(forms.ModelForm):
    nombre = forms.CharField(widget=forms.TextInput)
    correo = forms.CharField(widget=forms.TextInput)
    tipo_consulta = forms.ChoiceField(choices=opciones_consultas, widget=forms.Select(attrs={'class': 'form-control'}))
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
        fields = ['rut', 'pnombre', 'papellido','sapellido', 'fecha_nacimiento', 'email']

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
        pnombre = self.cleaned_data[
            'pnombre']
        if len(pnombre) <= 3:
            raise forms.ValidationError(
                "El nombre debe tener  3 o más caracteres para ser modificado")
        return pnombre

    def clean_papellido(self):
        papellido = self.cleaned_data[
            'papellido']
        if len(papellido) <= 3:
            raise forms.ValidationError(
                "El primer apellido debe tener  3 o más caracteres para ser modificado")
        return papellido

    def clean_sapellido(self):
        sapellido = self.cleaned_data[
            'sapellido']
        if len(sapellido) <= 3:
            raise forms.ValidationError(
                "El segundo apellido debe tener  3 o más caracteres para ser modificado")
        return sapellido

    def clean_email(self):
        email = self.cleaned_data['email']
        
        if '.' not in email or '@' not in email:
            raise forms.ValidationError("El correo electrónico debe contener un punto (.) y un símbolo de arroba (@) para ser modificado")

        return email

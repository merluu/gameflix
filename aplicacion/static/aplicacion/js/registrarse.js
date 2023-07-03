function validarCampos() {
  if (validarRut() && validarNombre() && validarApellido() && validarCorreoElectronico() && validarContraseñas() ) {
    window.location.href = '../pages/index.html';
  } else {
    alert("campos invalidos");
  }
}

function validarRut() {
  const rut = document.getElementById("id-rut").value;
  const parrafo = $('#id-msj');

  // Verificar si el campo RUT está vacío
  if (rut.trim() === '') {
    parrafo.text('Debes ingresar un RUT');
    $('#id-rut').focus();
    return false;
  }

  if (rutEsValido(rut)) {
    parrafo.text('');
    return true;
  } else {
    parrafo.text('RUT inválido');
    $('#id-rut').focus();
    return false;
  }
}


function rutEsValido(rut) {

  // Eliminar puntos y guiones del RUT
  rut = rut.replace(/\./g, '');
  rut = rut.replace(/\-/g, '');

  // Validar longitud del RUT
  if (rut.length < 8 || rut.length > 9) {
    return false;
  }

  // Extraer dígito verificador del RUT
  var dv = rut.charAt(rut.length - 1);

  // Extraer número base del RUT
  var num = parseInt(rut.substring(0, rut.length - 1));

  // Calcular dígito verificador esperado
  var m = 0, s = 1;
  for (; num; num = Math.floor(num / 10)) {
    s = (s + num % 10 * (9 - m++ % 6)) % 11;
  }
  var dvEsperado = (s > 0) ? String(s - 1) : 'K';

  // Comparar dígito verificador esperado con dígito verificador del RUT
  return (dv.toUpperCase() === dvEsperado);
}


function validarCorreoElectronico() {
  const email = document.getElementById("idEmail").value;
  const parrafo = $('#id-msjc');

  // Verificar si el correo electrónico está vacío
  if (email.trim() === '') {
    parrafo.text('Debes ingresar un correo electrónico');
    $('#idEmail').focus();
    return false;
  }

  // Expresión regular para validar el correo electrónico
  var regex = /\S+@\S+\.\S+/;

  // Valida el correo electrónico utilizando la expresión regular
  if (regex.test(email)) {
    // El correo electrónico es válido
    parrafo.text('');
    return true;
  } else {
    // El correo electrónico no es válido
    parrafo.text('Correo electrónico inválido');
    $('#idEmail').focus();
    return false;
  }
}


function validarContraseñas() {
  const contraseña1 = document.getElementById("idcontraseña1").value;
  const contraseña2 = document.getElementById("idcontraseña2").value;
  const parrafo = $('#id-msjp');

  // Verificar si los campos de contraseña están vacíos
  if (contraseña1.trim() === '' || contraseña2.trim() === '') {
    parrafo.text('Las contraseñas no pueden estar vacias');
    return false;
  }

  if (contraseña1 === contraseña2) {
    // Las contraseñas son iguales
    parrafo.text('');
    return true;
  } else {
    // Las contraseñas no son iguales
    parrafo.text('Las contraseñas no coinciden');
    return false;
  }
}


function validarNombre() {
  const nombre = document.getElementById("id-nombre").value;
  const parrafo = $('#id-msjn');
  // Expresión regular para validar el nombre
  var regex = /^[a-zA-Z ]{3,}$/;

  // Valida el nombre utilizando la expresión regular
  if (nombre.trim() === "") {
    parrafo.text('nombre no puede estar vacío');
    // El nombre está vacío
    return false;
  } else if (!regex.test(nombre)) {
    parrafo.text('nombre invalido');
    // El nombre no cumple con los requisitos
    return false;
  } else {
    parrafo.text('');
    // El nombre es válido
    return true;
  }
}

function validarApellido() {
  const apellido = document.getElementById("id-apellido").value;
  const parrafo = $('#id-msja');
  // Expresión regular para validar el apellido
  var regex = /^[a-zA-Z ]{3,}$/;

  // Valida el nombre utilizando la expresión regular
  if (apellido.trim() === "") {
    parrafo.text('apellido no puede estar vacío');
    // El apellido está vacío
    return false;
  } else if (!regex.test(apellido)) {
    parrafo.text('apellido invalido');
    // El apellido no cumple con los requisitos
    return false;
  } else {
    parrafo.text('');
    // El apellido es válido
    return true;
  }
}

/*
$(document).ready(function() {
  // todo lo que se hace apenas cargue el html
}); */

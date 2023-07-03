function validarCampos() {
    if (validarRut() && validarNombres() && validarApellidos() && validarFechaNacimiento() && validarCorreoElectronico()) {
        alert("Cliente se ha agregado exitosamente");
        window.location.href = '../pages/index.html';
    } else {
        alert("campos invalidos");
    }
}

function validarRut() {
    const rut = document.getElementById("id-Run").value;
    const parrafo = $('#id-msjrun');

    // Verificar si el campo RUT está vacío
    if (rut.trim() === '') {
        parrafo.text('Debes ingresar un RUT');
        $('#id-Run').focus();
        return false;
    }

    if (rutEsValido(rut)) {
        parrafo.text('');
        return true;
    } else {
        parrafo.text('RUT inválido');
        $('#id-Run').focus();
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

function validarNombres() {
    const nombre = document.getElementById("id-pnom").value;
    const apellido = document.getElementById("id-pape").value;
    const parrafo = $('#id-msjna');

    // Verificar si los campos están vacíos o tienen menos de tres caracteres
    if (nombre.trim() === '' || apellido.trim() === '' || nombre.length < 3 || apellido.length < 3) {
        parrafo.text('Debes ingresar un primer nombre y segundo nombre válidos');
        return false;
    }

    parrafo.text('');
    return true;
}

function validarApellidos() {
    const apellidop = document.getElementById("id-pape").value;
    const apellidos = document.getElementById("id-sape").value;
    const parrafo = $('#id-msjapes');

    // Verificar si los campos están vacíos o tienen menos de tres caracteres
    if (apellidop.trim() === '' || apellidos.trim() === '' || apellidop.length < 3 || apellidos.length < 3) {
        parrafo.text('Debes ingresar un primer apellido y segundo apellido válidos');
        return false;
    }

    parrafo.text('');
    return true;
}


function validarFechaNacimiento() {
    const fechaNacimiento = $('#id-fecha').val();
    const parrafo = $('#id-msjfech');

    // Verificar si el campo está vacío
    if (fechaNacimiento.trim() === '') {
        parrafo.text('Debes ingresar una fecha de nacimiento');
        return false;
    }

    // Obtener la fecha actual del sistema
    const fechaActual = new Date();

    // Obtener la fecha de nacimiento como objeto Date
    const fechaNacimientoObj = new Date(fechaNacimiento);

    // Verificar si la fecha de nacimiento es mayor a la fecha actual
    if (fechaNacimientoObj > fechaActual) {
        parrafo.text('La fecha de nacimiento no puede ser mayor a la fecha actual');
        return false;
    }

    parrafo.text('');
    return true;
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


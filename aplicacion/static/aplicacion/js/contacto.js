function validarCampos() {
    if (validarNombreApellido() && validarCorreoElectronico() && validarCelular() && validarMensaje()) {
        alert("mensajo enviado con éxito: Nos pondremos en contacto contigo");
        window.location.href = '../pages/index.html';
    } else {
        alert("campos invalidos");
    }
}

function validarCorreoElectronico() {
    const email = document.getElementById("id-email").value;
    const parrafo = $('#id-msje');

    // Verificar si el correo electrónico está vacío
    if (email.trim() === '') {
        parrafo.text('Debes ingresar un correo electrónico');
        $('#id-email').focus();
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
        $('#id-email').focus();
        return false;
    }
}


function validarNombreApellido() {
    const nombre = document.getElementById("id-nom").value;
    const apellido = document.getElementById("id-ape").value;
    const parrafo = $('#id-msjs');

    // Verificar si los campos están vacíos o tienen menos de tres caracteres
    if (nombre.trim() === '' || apellido.trim() === '' || nombre.length < 3 || apellido.length < 3) {
        parrafo.text('Debes ingresar un nombre y apellido válidos');
        return false;
    }

    parrafo.text('');
    return true;
}

function validarCelular() {
    const celular = document.getElementById("id-celular").value;
    const parrafo = $('#id-msjcel');

    // Verificar si el campo está vacío
    if (celular.trim() === '') {
        parrafo.text('Debes ingresar un número de celular');
        return false;
    }

    // Verificar si contiene solo números
    if (!/^\d+$/.test(celular)) {
        parrafo.text('El número de celular debe contener solo dígitos');
        return false;
    }

    // Verificar si tiene una longitud de 9 dígitos
    if (celular.length !== 9) {
        parrafo.text('El número de celular debe tener 9 dígitos');
        return false;
    }

    parrafo.text('');
    return true;
}

function validarMensaje() {
    const mensaje = document.getElementById("id-mensaje").value;
    const parrafo = $('#id-msjmen');

    // Verificar si el campo está vacío
    if (mensaje.trim() === '' || mensaje === 'Ingrese su mensaje aquí') {
        parrafo.text('Debes ingresar un mensaje');
        return false;
    }

    // Verificar si excede el límite de caracteres
    if (mensaje.length > 200) {
        parrafo.text('El mensaje no puede exceder los 200 caracteres');
        return false;
    }

    parrafo.text('');
    return true;
}


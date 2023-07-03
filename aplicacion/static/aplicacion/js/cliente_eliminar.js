function validarCampos() {

    if (validarCheckboxSeleccionado()) {
        confirmacion();
    }

}

function confirmacion() {
    var userPreference;

    if (confirm("Deseas guardar los cambios?") == true) {
        userPreference = "Datos guardados exitosamente!";
        window.location.href = '../pages/index.html';
    } else {
        userPreference = "Cambios cancelados!";
    }
}

function validarCheckboxSeleccionado() {
    const checkboxes = $('.form-check-input');
    // const checkboxes = document.getElementById("id-Run").value;
    const parrafo = $('#id-msjcheck');

    let isChecked = false;

    checkboxes.each(function () {
        if ($(this).is(':checked')) {
            isChecked = true;
        }

        if ($(this).val().trim() === '') {
            parrafo.text('Debes ingresar un valor para todos los checkboxes');
            return false;
        }
    });

    if (!isChecked) {
        parrafo.text('Debes seleccionar al menos un checkbox');
        return false;
    }

    parrafo.text('');
    return true;
}




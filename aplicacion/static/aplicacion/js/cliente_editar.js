function validarCampos() {
    if (validarRut() && validarNombres() && validarApellidos() && validarFechaNacimiento() && validarCorreoElectronico()) {
        alert("Cliente se ha agregado exitosamente");
        window.location.href = '../pages/index.html';
    } else {
        alert("campos invalidos");
    }
}

var userPreference;

if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}




document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los elementos de entrada
  const inputs = document.querySelectorAll("input");
  // Agregar el event listener para el evento 'input' a cada elemento de entrada
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      validateInput(this);
    });
  });

  let nameBool = false;
  let passBool = false;

  const myForm = document.getElementById("myForm");
  // Agregar el event listener para el evento 'submit' al formulario
  myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    console.log(event);

    // Validar todos los campos de entrada en el formulario
    inputs.forEach(function (input) {
      validateInput(input);
    });


    if (nameBool == true && passBool == true) {
      // Si no hay errores, puedes enviar el formulario aquí
      alert("El formulario se envió correctamente.");
      this.submit();
    }
  });


  // Función para validar un campo de entrada específico
  function validateInput(input) {

    var inputValue = input.value;
    var inputName = input.name;


    var errcarcter = document.getElementById("errcarc")
    var errnombre = document.getElementById("errnom");
    var names = document.getElementById("nombre");
    if (inputName == 'nombre') {

      let largo = inputValue.length

      if (largo == 0) {
        errcarcter.style.display = 'none';
        errnombre.style.display = "flex";
        errnombre.style.color = 'red';
        names.style.border = '1px solid red';

        return false;
      } else {
        errnombre.style.display = "none";
        names.style.border = "transparent";
      }

      if (largo < 20) {
        nameBool = false
        errcarcter.style.display = 'flex';
        errcarcter.style.color = 'red';
        names.style.border = '1px solid red';

        return false;
      } else {
        nameBool = true
        errcarcter.style.display = 'none';
      }
    }

    var psws = document.getElementById("psw");
    var spanPSW = document.getElementById("mispan2");
    if (inputName == "psw") {
      // Valida que la contraseña tenga al menos 8 caracteres y al menos una letra mayúscula
      var pswRegex = /^(?=.*[A-Z]).{8,}$/;
      if (!pswRegex.test(inputValue)) {
        passBool = false
        spanPSW.style.display = "flex"; //Muestra el mensaje de error
        spanPSW.style.color = "red";//Genera la letra en rojo
        psws.style.border = '1px solid red' //Agregar El borde Rojo
        return false;
      } else {
        passBool = true
        spanPSW.style.display = "none";//Quita el mensaje de error
        psws.style.border = 'transparent'//Vuelve transparente el borde 
      }
    }



  }

});



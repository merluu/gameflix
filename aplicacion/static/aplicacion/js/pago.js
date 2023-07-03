document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos de entrada
    const inputs = document.querySelectorAll("input");

    // Agregar el event listener para el evento 'input' a cada elemento de entrada
    inputs.forEach(function (input) {
        input.addEventListener("input", function () {
            validateInput(this);
        });
    });
    let cvvBool = false;
    let cardNumeberBool = false;
    let cardNameBool = false


        // Escucha el evento 'submit' del formulario y realiza la validación antes de enviarlo
    // Obtener el formulario
    const myForm = document.getElementById("myForm");

    // Agregar el event listener para el evento 'submit' al formulario
    myForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        console.log(event);

        // Validar todos los campos de entrada en el formulario
        inputs.forEach(function (input) {
            validateInput(input);
        });

        // Comprobar si hay algún campo de entrada con error
        var invalidInputs = document.querySelectorAll(".is-invalid");
        if (cvvBool == true && cardNameBool == true && cardNumeberBool == true) {
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
        var names = document.getElementById("name");
        if (inputName == 'name') {

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
            // Validar que solo contenga letras y al menos un espacio
            var regex = /^[A-Za-z ]+$/;
            if (!regex.test(inputValue)) {
                errcarcter.style.display = 'flex';
                errcarcter.style.color = 'red';
                names.style.border = '1px solid red';
                return false;
            } else {
                errcarcter.style.display = 'none';
            }

            if (largo < 20) {
                errcarcter.style.display = 'flex';
                errcarcter.style.color = 'red';
                names.style.border = '1px solid red';
                return false;
            } else {
                errcarcter.style.display = 'none';
            }
        }


        var emailError = document.getElementById('erremail');
        var emails = document.getElementById("email");
        if (inputName == "email") {

            let largo = inputValue.length;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Esto valida que sea formato Email
            const isValidEmail = emailRegex.test(inputValue); //Esto te dice si es verdadero o falso que el email esta bien

            if (largo <= 0) {
                emailError.style.display = 'flex';
                emailError.style.color = 'red';
                emails.style.border = '1px solid red';
                return false;
            } else {
                emailError.style.display = 'none';
                emails.style.border = 'transparent';
            }

            if (isValidEmail) {
                emailError.style.display = 'none';
                emails.style.border = 'transparent';
            } else {
                emailError.style.display = 'flex';
                emailError.style.color = 'red';
                emails.style.border = '1px solid red';
            }
        }


        var addressError = document.getElementById('erradr');
        var addresses = document.getElementById("address");
        if (inputName == 'address') {



            let largo = inputValue.length;

            if (largo <= 0) {
                addressError.style.display = 'flex';
                addressError.style.color = 'red';
                addresses.style.border = '1px solid red';
                return false;
            } else {
                addressError.style.display = 'none';
                addresses.style.border = 'transparent';
            }
        }

        var errorcity = document.getElementById('errcit');
        var citys = document.getElementById("city");
        if (inputName == 'city') {


            let largo = inputValue.length;

            if (largo <= 0) {
                errorcity.style.display = 'flex';
                errorcity.style.color = 'red';
                citys.style.border = '1px solid red';
                return false;
            } else {
                errorcity.style.display = 'none';
                citys.style.border = 'transparent';
            }

        }

        var errorcode = document.getElementById('errcod');
        var codes = document.getElementById("code");
        if (inputName == 'code') {


            let largo = inputValue.length;
            //Accion que solo permite el numero en el campo Codigo
            codes.addEventListener('input', function (event) {
                var inputValue = event.target.value;
                var numericValue = inputValue.replace(/\D/g, '');
                event.target.value = numericValue;
            });


            if (largo <= 0) {
                errorcode.style.display = 'flex';
                errorcode.style.color = 'red';
                codes.style.border = '1px solid red';
                return false;
            } else {
                errorcode.style.display = 'none';
                codes.style.border = 'transparent';
            }

        }

        var errcarnlenghts = document.getElementById("errcarnlenght");
        var errcarns = document.getElementById("errcarn");
        var cardnames = document.getElementById("cardname");
        if (inputName == 'cardname') {

            let largo = inputValue.length
            if (largo == 0) {
                errcarnlenghts.style.display = 'none';
                errcarns.style.display = "flex";
                errcarns.style.color = 'red';
                cardnames.style.border = '1px solid red';
                return false;
            } else {
                errcarns.style.display = "none";
                cardnames.style.border = "transparent";
            }

            if (largo < 20) {
                cardNameBool = false
                errcarnlenghts.style.display = 'flex';
                errcarnlenghts.style.color = 'red';
                cardnames.style.border = '1px solid red';
                return false;
            } else {
                cardNameBool = true
                errcarnlenghts.style.display = 'none';
            }
        }


        var errnumclenghts = document.getElementById("errnumclenght");
        var errnumcs = document.getElementById("errnumc");
        var cardnumbers = document.getElementById("cardnumber");
        if (inputName == 'cardnumber') {


            let largo = inputValue.length
            cardnumbers.addEventListener('input', function (event) {
                var inputValue = event.target.value;
                var numericValue = inputValue.replace(/\D/g, '');
                event.target.value = numericValue;
            });

            if (largo == 0) {
                errnumclenghts.style.display = 'none';
                errnumcs.style.display = "flex";
                errnumcs.style.color = 'red';
                cardnumbers.style.border = '1px solid red';
                return false;
            } else {
                errnumcs.style.display = "none";
                cardnumbers.style.border = "transparent";
            }

            if (largo < 16) {
                cardNumeberBool = false;
                errnumclenghts.style.display = 'flex';
                errnumclenghts.style.color = 'red';
                cardnumbers.style.border = '1px solid red';
                return false;
            } else {
                cardNumeberBool = true;
                errnumclenghts.style.display = 'none';
            }
        }


        var errexms = document.getElementById('errexm');
        var expmonths = document.getElementById("expmonth");
        var errexmcorrectmonths = document.getElementById('errexmcorrectmonth');
        if (inputName == 'expmonth') {



            let largo = inputValue.length;
            if (largo < 4) {
                errexmcorrectmonths.style.display = 'none';
                errexms.style.display = 'flex';
                errexms.style.color = 'red';
                expmonths.style.border = '1px solid red';
                return false;
            } else {
                errexms.style.display = 'none';
                expmonths.style.border = 'transparent';
            }


            const arrayMonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

            //Esta expresion inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase()) Lo que hace es generar Siempre Mayuscula la primera letra y el resto en minuscula sin importar de ocmo se escriba
            if (arrayMonth.includes(inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase())) { // Esta validacion busca que lo que venga en el valor de value sea uno de los meses del arreglo para eso sirve el include
                errexmcorrectmonths.style.display = 'none';
                expmonths.style.border = 'transparent';
            } else {
                errexmcorrectmonths.style.display = 'flex';
                errexmcorrectmonths.style.color = 'red';
                expmonths.style.border = '1px solid red';
                return false;
            }
        }


        var errexys = document.getElementById('errexy');
        var expyears = document.getElementById("expyear");
        if (inputName == 'expyear') {

            let largo = inputValue.length;
            //Accion que solo permite el numero en el campo Codigo
            expyears.addEventListener('input', function (event) {
                var inputValue = event.target.value;
                var numericValue = inputValue.replace(/\D/g, '');
                event.target.value = numericValue;
            });


            if (largo < 4) {
                errexys.style.display = 'flex';
                errexys.style.color = 'red';
                expyears.style.border = '1px solid red';
                return false;
            } else {
                errexys.style.display = 'none';
                expyears.style.border = 'transparent';
            }

        }


        var errcvvs = document.getElementById('errcvv');
        var cvvs = document.getElementById("cvv");
        if (inputName == 'cvv') {

            let largo = inputValue.length;
            //Accion que solo permite el numero en el campo Codigo
            cvvs.addEventListener('input', function (event) {
                var inputValue = event.target.value;
                var numericValue = inputValue.replace(/\D/g, '');
                event.target.value = numericValue;
            });


            if (largo < 3) {
                cvvBool = false
                errcvvs.style.display = 'flex';
                errcvvs.style.color = 'red';
                cvvs.style.border = '1px solid red';
                return false;
            } else {
                cvvBool = true
                errcvvs.style.display = 'none';
                cvvs.style.border = 'transparent';
            }



        }


    }


});

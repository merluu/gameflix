


document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkUsd");
  
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        usdCLP(document.getElementById("valor-dolar"))//Cambiar precio a dolares
        // Realiza acciones adicionales cuando el checkbox está marcado
      } else {
        // Realiza acciones adicionales cuando el checkbox está desmarcado
        clpUSD(document.getElementById("valor-dolar"))//Cambiar el precio a clp
      }
    });

  function usdCLP(valor) {

    const url = "https://mindicador.cl/api/dolar"; 
    // Realiza la solicitud GET a la API utilizando fetch
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al obtener el valor del dólar a CLP: " + response.status);
        }
      })
      .then(data => {

        const valorDolarCLP = data.serie[0].valor;
        valor.textContent = (valor.textContent / valorDolarCLP).toFixed(2)
      })
      .catch(error => {
        // Maneja el error
        console.error(error);
      });
    
  }

  function clpUSD(valor) {
    const url = "https://mindicador.cl/api/dolar"; 
    // Realiza la solicitud GET a la API utilizando fetch
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al obtener el valor del dólar a CLP: " + response.status);
        }
      })
      .then(data => {
        const valorDolarCLP = data.serie[0].valor;
        valor.textContent = (valor.textContent * valorDolarCLP).toFixed(0) //El to fixed para que no me aparescan decimales
      })
      .catch(error => {
        // Maneja el error
        console.error(error);
      });
    
  }

});




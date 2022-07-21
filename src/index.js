import validator from './validator.js';

  let submitValidator = document.getElementById("submitval"); // Encuentra el elemento "submitval" en el sitio
  submitValidator.onclick = function() {validator.isValid()};


document.getElementById("CardNumber").addEventListener("blur", numerotarjeta);
    function numerotarjeta (event) {
      let Numcard = event.target.value;

      event.target.value = validator.maskify(Numcard);
    }

    //validacion de input text solo acepta numeros
let solonumeros = document.getElementById("CardNumber");
solonumeros.addEventListener("keyup", (e)=>{
  let valorinput = e.target.value; //guardando el valor del input
   solonumeros.value = valorinput
    //eliminar espacios en blanco
   .replace(/\D/g, '')//eliminar las letras
   .replace(/([0-9]{4})/g, '$1 ') //espacio cada cuatro numeros
   .trim();
});




  //console.log(isValid)

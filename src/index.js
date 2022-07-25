import validator from './validator.js';

document.getElementById("submitval").addEventListener("click",callvalidator );
  function callvalidator () {
    let creditCardNumber = document.getElementById("CardNumber").value ; // guardando el valor del input
          creditCardNumber = creditCardNumber.replace(/\s/g, '');
        //  console.log("primero"+creditCardNumber);
document.getElementById("CardNumber").value = validator.maskify(creditCardNumber); //muestra en HTML el numero enmascarado

      if (validator.isValid(creditCardNumber) && creditCardNumber.length > 0) {
    document.getElementById("Message").innerHTML = "<span style= 'color: green; background: #C3E0CA;'> Tarjeta Valida </span>";
      }
      else {
    document.getElementById("Message").innerHTML = "<span style= 'color: red; background: #C3E0CA;'> Tarjeta Invalida </span>" ;
      }

  let valueExp = document.getElementById("Cexp").value ;
   let Cexp = valueExp.split('/') ; // divide la cadena en arreglo
   let mes = parseInt (Cexp [0]) ; //convierte la cadena en entero
   if (mes <= 12 && mes > 0){
    console.log("Mes correcto")
   }
   else {
     console.log( "Mes incorrecto")
   }
 const fecha = new Date()
   let año = parseInt (Cexp [1]) ;
   if (año >= fecha.getFullYear().toString().slice(-2)) { //devuelve el año de la fecha especificada extrayendo los YY de la cadena
     console.log ("Ano correcto")
   }
   else {
     console.log ("Ano invalido")
   }

   let valueCVV = document.getElementById("CCV").value ;
   if (/^[0-9]{3}$/.test(valueCVV)){
      console.log(" correcto")
   }
    else {
      console.log( "incorrecto")
    }


  }
    //validacion de input text solo acepta numeros
let solonumeros = document.getElementById("CardNumber");
solonumeros.addEventListener("keyup", (e)=>{  // evento que ocurre cuando se suelta la tecla
  let valorinput = e.target.value; //guardando el valor del input
   solonumeros.value = valorinput
   .replace(/\D/g, '')//eliminar las letras
   .replace(/([0-9]{4})/g, '$1 ') //espacio cada cuatro numeros
   .trim();
});






//  console.log(validator)

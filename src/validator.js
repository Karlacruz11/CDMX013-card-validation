const validator=  {
//function isValid() {
  //logica de isvalid
//},

isValid:function(creditCardNumber){
  //let CCnum = numnormal.replace(/\s/g, '') ; //eliminar espacios en blanco
  let CCnumSplit = creditCardNumber.split("");
  let sum = 0; // inicializa la variable
  let imparNum = [], parNum = [] ; //inicializando arreglos

  for(let i=0; creditCardNumber.length>i; i++){   //recorre arreglos
 //validar par
   if(i % 2==0){
      let mulpar= "" + parseInt((CCnumSplit[i]) * 2);
    if(mulpar>=10){
      let separar=  mulpar.split("");
      let suma= parseInt(separar[0])+parseInt(separar[1]);
      parNum.push(suma);
      }
    else{
        parNum.push(mulpar);
      }
     }
  else {
      imparNum.push(CCnumSplit[i]);

    }
  }

 //console.log("PARES")
  for (let i of parNum){    //toma una iteracion del arreglo
    sum=parseInt(sum) + parseInt(i);
   //console.log("["+i+"]")
  }

  //console.log("IMPARES")
  for (let i of imparNum){
    sum=parseInt(sum)  + parseInt(i);
  //  console.log("["+i+"]")
  }

 //console.log("suma total= " + (sum % 10 === 0))

 console.log("suma total= " + (sum))
sum = sum % 10;
if (sum === 0) {
  return true;
}
else {
  return false;
}
  //operacion logica

},

maskify: function (creditCardNumber) {
  let MaskNum = ""
  if(creditCardNumber.length > 4) {
    MaskNum +=
    "#".repeat(creditCardNumber.length -4 ) + creditCardNumber.slice(-4);
  return MaskNum;
  }
   else {
     return creditCardNumber;
   }

}



} ;



export default validator;

let numnormal ;
const validator=  {
//function isValid() {
  //logica de isvalid
//},

isValid:function(){
  let CCnum = numnormal.replace(/\s/g, '') ;
  let CCnumSplit = CCnum.split("");
  let sum = 0;
  let imparNum = [], parNum = [] ;

  for(let i=0; CCnum.length>i; i++){
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

  console.log("PARES")
  for (let i of parNum){
    sum=parseInt(sum) + parseInt(i);
    console.log("["+i+"]")
  }

  console.log("IMPARES")
  for (let i of imparNum){
    sum=parseInt(sum)  + parseInt(i);
    console.log("["+i+"]")
  }

  console.log("suma total= " + sum)
  if(sum % 10 == 0){
    alert("es valida")
  }
  else{
    alert(" invalida")
  }
},



maskify: function (Numcard) {
  let MaskNum = ""
  numnormal = Numcard
  if(Numcard.length > 4) {
    MaskNum +=
    "#".repeat(Numcard.length -4 ) + Numcard.slice(-4);
  return MaskNum;
  }
   else {
     return Numcard;
   }

}



} ;



export default validator;

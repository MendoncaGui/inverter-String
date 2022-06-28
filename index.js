var recebeString = window.prompt("Digite uma palavra");
var cont;
var resultado = "";

for(cont = recebeString.length - 1; cont>= 0; cont -- ){
  resultado+= recebeString[cont];
}

window.alert(resultado);
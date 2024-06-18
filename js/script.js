var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();


  maiuscula();

});


function maiuscula() {


  let palavra = document.getElementById("palavra").value;

  let primeiraLetra = palavra.charAt(0);

  // se primeira letra for maiúscula escreva sim
  if (primeiraLetra == primeiraLetra.toUpperCase()) {
      document.getElementById("resultado").value = "SIM";
  } else {
    document.getElementById("resultado").value = "NÃO";
  }





}

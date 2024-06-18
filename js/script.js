var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  maiuscula();

});


//Função somar
function maiuscula() {
  console.log("Este é o arquivo correto....será ?????");
  //Captura o que está dentro do primeiro input no formulário
  //Palavra - Transforma o texto capturado em Palavra
  let palavra = document.getElementById("palavra").value;

  let primeiraLetra = palavra.charAt(0);


  let resultado = primeiraLetra;

  console.log(primeiraLetra);

  if () {}

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("resultado").value = resultado;


}-

function inserir(elemento) {
  let valor = document.getElementById("caixaResultado").innerHTML;
  document.getElementById("caixaResultado").innerHTML = valor + elemento;
}
function limpar() {
  document.getElementById("caixaResultado").innerHTML = "";
}
function calcular() {
  let resultado = document.getElementById("caixaResultado").innerHTML;
  document.getElementById("caixaResultado").innerHTML = eval(resultado);
}

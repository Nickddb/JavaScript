function calcular(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura * altura);
    document.getElementById("imc").textContent = "O IMC é igual a " + imc;
}
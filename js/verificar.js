function verificar(){
    let numero = document.getElementById("num").value;
    if(numero % 2 == 0){
        document.getElementById("verificar").textContent = "Número " + numero + " é par!";
    }   else {
        document.getElementById("verificar").textContent = "Número " + numero + " é ímpar!";
    }
}
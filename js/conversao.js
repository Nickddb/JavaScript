function converter(){
    let celsius = parseFloat(document.getElementById("celsius").value);
    let farenheit = (celsius * 1.8 ) + 32;
    document.getElementById("graus").textContent = "Farenheit: " + farenheit;
}
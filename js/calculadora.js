function apende(value){
    const display = document.getElementById("display");
    display.value += value;
}

function limpar(){
    const display = document.getElementById("display");
    display.value = "";
}

function calcular_resultado(){
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('x', 'X').replace('÷', '/'));
    }
    catch {
        display.value = "Erro";
    }
}
function verificar(){
    let idade = document.getElementById("idade").value;
    let nome = document.getElementById("nome").value;
    if (idade <= 2){
        document.getElementById("bebe").textContent = nome + " é um bebê!";
        console.log("If!");
    }
    else if (idade >= 2 || idade <= 12){
        document.getElementById("crianza").textContent = nome + " é uma criança! ";
        console.log("Else if!");
    }
    else if (idade >= 11 || idade <= 19){
        document.getElementById("aborrescente").textContent = nome + " é um adolecente! ";
        console.log("Else f!");
    }
    else if (idade >= 19 || idade <= 60){
        document.getElementById("adolto").textContent = nome + " é um adulto! ";
        console.log("Else if!");
    }
    else if (idade >= 60){
        document.getElementById("melhor idade").textContent = nome + " está na melhor idade! ";
        console.log("Else if!");
    }
}
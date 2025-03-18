function verificar(){
    let idade = document.getElementById("idade").value;
    let nome = document.getElementById("nome").value;
    if (idade <= 2){
        document.getElementById("checar").textContent = nome + " é um bebê!";
        console.log("bebe");
    }
    else if (idade >= 2 && idade <= 12){
        document.getElementById("checar").textContent = nome + " é uma criança! ";
        console.log("crianza");
    }
    else if (idade >= 11 && idade <= 19){
        document.getElementById("checar").textContent = nome + " é um adolecente! ";
        console.log("aborrescente");
    }
    else if (idade >= 19 && idade <= 60){
        document.getElementById("checar").textContent = nome + " é um adulto! ";
        console.log("adolto");
    }
    else if (idade >= 60){
        document.getElementById("checar").textContent = nome + " está na melhor idade! ";
        console.log("melhor idade");
    }
}
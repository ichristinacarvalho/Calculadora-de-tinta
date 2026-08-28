function calcular(){

    //ENTRADA
let largura = Number(document.getElementById("largura").value);
let altura = Number(document.getElementById("altura").value);

    //VALIDAÇÃO
    if (largura <=0 || altura <=0){
        alert("Digite um valor válido!");
        return;
    }

    //PROCESSAMENTO

    let area = largura * altura;
    let litros = area / 10;

    //SAÍDA
    document.getElementById("area").innerHTML = `A área mede ${area.toFixed(2)} m².`
    document.getElementById("litros").innerHTML = `Para essa área será necessário ${litros.toFixed(2)} litros de tinta.`
}

function limparCampos(){

    //Limpa áreas de input
    document.getElementById("largura").value = "";
    document.getElementById("altura").value = "";

    //Limpa a área do resultado
    document.getElementById("area").innerHTML = "";
    document.getElementById("litros").innerHTML = "";
}
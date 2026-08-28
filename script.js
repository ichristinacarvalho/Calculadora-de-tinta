function calcular() {
    //pegando os valores dos inputs
    let inputLargura = document.getElementById("largura").value;
    let inputAltura = document.getElementById("altura").value;

    //validando campos vazios
    if (inputLargura === "" || inputAltura === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    //convertendo para número
    let largura = Number(inputLargura);
    let altura = Number(inputAltura);

    //validação de valores negativos ou zero
    if(largura <=0 || altura <=0){
        alert("Digite valores maiores que zero!");
        return;
    }

    //calculando a área e litros de tinta
    let area = largura * altura;
    let litros = area / 10;

    //mostrando o resultado para os usuários
    document.getElementById("area").innerHTML = `A área mede ${area.toFixed(2)} m².`
    document.getElementById("litros").innerHTML = `Para essa área será necessário ${litros.toFixed(2)} litros de tinta.`

    //Limpa áreas de input
    document.getElementById("largura").value = "";
    document.getElementById("altura").value = "";
}

function limparCampos() {
    //Limpa a área do resultado
    document.getElementById("area").innerHTML = "";
    document.getElementById("litros").innerHTML = "";
}

// --- EVENTOS --- //
//chamando o evento de calcular
document.getElementById("btn-calcular").addEventListener("click", calcular);

//chamando o evento de limpar campos
document.getElementById("btn-limpar").addEventListener("click", limparCampos);

//chamando o evento de enter
function clicarEnter(event) {
    if (event.key === "Enter") {
        calcular();
    }
}

//conectando o evento apertarEnter nos inputs
document.getElementById("largura").addEventListener("keydown", clicarEnter);
document.getElementById("altura").addEventListener("keydown", clicarEnter);
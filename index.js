function botaolimpar() {
    document.getElementById("primeirovalor").value=""
    document.getElementById("segundovalor").value=""
    document.getElementById("resultado").value=""
    document.getElementById("operacoes").value="selecione"
}



function botaoconfirmar() {
    formvalidation()
    var operador = document.getElementById('operacoes').value
    var primeirovalor = document.getElementById('primeirovalor').value
    var segundovalor = document.getElementById('segundovalor').value
    var resultado = document.getElementById('resultado').value=0
    switch(operador){
            case 'soma':
                resultado = parseInt(primeirovalor) + parseInt(segundovalor)
        break;
        case 'subtracao':
            resultado = primeirovalor-segundovalor
        break;
        case 'multiplicacao':
            resultado = primeirovalor*segundovalor
        break;
        case 'divisao':
            resultado = primeirovalor/segundovalor
        break;
        case 'porcentagem':
        resultado = primeirovalor/100 * segundovalor
        break;
    }
    document.getElementById('resultado').value= resultado
}


function formvalidation(){
    var valor=document.getElementById('primeirovalor').value;
    if(valor == ""){
        alert('Informe o primeiro valor.');
        document.getElementById('primeirovalor').style.borderColor = "red";
        return false;

}
else{
    document.getElementById('primeirovalor').style.borderColor = "#808080";
}

var valor=document.getElementById('segundovalor').value;
    if(valor == ""){
        alert('Informe o segundo valor.');
        document.getElementById('segundovalor').style.borderColor = "red";
        return false;

}
else{
    document.getElementById('segundovalor').style.borderColor = "#808080";
}

var valor=document.getElementById('operacoes').value;
    if(valor == "selecione"){
        alert('Selecione o operador.');
        document.getElementById('operacoes').style.borderColor = "red";
        return false;

}
else{
    document.getElementById('operacoes').style.borderColor = "#808080";
}
}
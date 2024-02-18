//inicializando variáveis globais
let textInput = document.querySelector('input').value;
var outInput = document.getElementById('areaSaida');

function avisoTextoInvalido() {
    alert("Digite apenas letras minúsculas e sem acento!\nPor favor, NÃO digite numerais (escreva por extenso) caracteres especiais, simbolos ou letras maiúsculas.");
    textInput = document.querySelector('input');
    outInput = document.querySelector('textarea');
    textInput.value = '';
    outInput.value = '';
    location.reload();
}


// declarando a função criptografar
function criptografar() {
    let textInput = document.querySelector('input').value;
    if (textInput.match('[a-z]')) {
        var resultarCripto = textInput
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");
        return document.getElementById('areaSaida').innerHTML =  resultarCripto;
    }
    avisoTextoInvalido();
}



//declarando a função descriptografar
function descriptografar() {
    let textInput = document.querySelector('input').value;
    if (textInput.match('[a-z]')) {
        var resultarDecripto = textInput
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
            return document.getElementById('areaSaida').innerHTML =  resultarDecripto;
    }
    avisoTextoInvalido();
}

//declarando a função limpar texto
function limparTexto() {
    textInput = document.querySelector('input');
    outInput = document.querySelector('textarea');
    textInput.value = '';
    outInput.value = '';
    location.reload();

}

function copiarTexto(){
    var textoCopiado = document.getElementById("areaSaida");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("O texto encriptado ou decriptado foi copiado!")
}

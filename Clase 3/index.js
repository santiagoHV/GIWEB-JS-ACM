var a;
var b;
var resultTemplate = document.getElementById('resultado')

function recogerValores() {
    a = parseInt(document.getElementById('inputA').value)
    b = parseInt(document.getElementById('inputB').value)
}

function escribirResultado(resultado) {
    resultTemplate.value = resultado
}

function sumar() {
    recogerValores()
    escribirResultado(a + b)
}
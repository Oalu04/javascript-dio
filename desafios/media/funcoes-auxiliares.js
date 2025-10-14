const entradas = [9, 2, 3, 4];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function toArray() {
    return entradas.length;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print, toArray};
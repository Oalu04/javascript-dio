function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

// Comando para exportar um objeto que tem as funções get() e print()
module.exports =  {gets, print}
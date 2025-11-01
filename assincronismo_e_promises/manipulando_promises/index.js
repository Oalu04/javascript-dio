const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDaLeitura = fs.promises.readFile(filePath)

promessaDaLeitura 
    .then((arquivo) => arquivo.toString('utf8'))
    .then((texto) => console.log(texto.split('\n')))
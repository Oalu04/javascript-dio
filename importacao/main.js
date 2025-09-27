// Comando para importar um objeto que tem, no nosso caso, as funções get() e print()
const funcoes = require('./funcoes-auxiliares');

console.log(funcoes);

// Uma outra forma de importar objetos utilizando o destructuring 


const {gets, print} =  require('./funcoes-auxiliares');
print(gets());


/* Object Destructuring é um recurso do JavaScript que permite extrair propriedades de um objeto e atribuí-las a variáveis individuais de forma concisa, utilizando uma sintaxe expressiva {}.

Possuem o mesmo significado, mas com menos escrita
const {nome} = pessoa;

const nome = pessoa.nome;

*/

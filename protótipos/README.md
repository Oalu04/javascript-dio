# Protótipos

Protótipos em javascript é uma maneira de tratarmos herança entre as classes, basicamente uma classe filha que herdará os atributos de uma classe superior e utilizamos a palavra-chave `_proto_` para definir isso: 

```js
const pessoa = {
    genero: 'masculino'
}


const renan = {
    nome: 'renan',
    idade: 30,
    _proto_: pessoa
}

```
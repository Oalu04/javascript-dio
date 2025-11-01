# Promises na prática

Vamos por em prática a teoria que obtivemos sobre as promises: 

* 1 Vamos criar um arquivo `tarefas.csv` e colocar nossas tarefas do dia 
* 2 Usar um módulo do node.js para fazer a leitura dos arquivos

```js
const fs = require('fs')

const promessaDaLeitura = fs.promises.readFile('tarefas.csv')
```

# Async Await

Aprendemos então como manipular as promises e entender seus valores, porém a sintaxe que utilizamos embora funcional, não é muito legível aos olhos dos programadores, por isso iremos abordar uma outra forma de escrever a sintaxe mas que por baixo dos panos ainda é a mesma que utilizamos anteriormente. 

Nós manipulamos as promises utilizando os métodos `then`, `catch`  e `finally`, mesmo sendo entendível quando nos acostumamos a sintaxe é muito prolongada, utilizar thens um abaixo do outro não é "bonito" e é por isso que temos o Async e o await para facilitar isso. 

* 1 Criamos uma função que seja do tipo async
```js
async function buscarArquivo() {}
```
* 2 Utilizamos o mesmo módulo para ler o arquivo.csv que criamos, mas com a adição do `await`
```js
async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath)
    // Esse await esta dizendo: Leia este arquivo e quando terminar, armazene nesta variável
}
```
* 3 Fazemos as manipulações que desejarmos
```js 
async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath)

    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)

}

buscarArquivo()
```
* 4 Caso queremos lidar com os fracassos: 

```js

```



Assim ao invés de termos que manipular a promise por métodos, podemos utilizar a variável que definimos para isso, utilizando menos linhas de código.



>[!NOTE]
> Quando definimos que nossa funcão é `async` ela passa agora a retornar uma promise
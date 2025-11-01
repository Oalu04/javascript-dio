# Promises

Aqui abordaremos mais um pouco sobre como funciona as promises e lidar com assincronismo

Essa é a sintaxe para se criar uma promessa, no corpo do código estará o processamento assincrono e se tudo der certo retorna um `resolve()` ou um `reject()` se der errado
```js
new Promise((resolve, reject) => {
    // ...
    // ...
    resolve()
})
```

## Curiosidade 

Como o processamento é assincrono isso significa que ele não nos dará uma resposta imediata, mas não é por isso que nosso código ficará esperando pela resposta. O código ainda é executado enquanto o assincronismo não é devolvido, ele continuará executando, registrando os callbacks e assim executá-los.

```js
const promessaDeUmNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)

})

promessaDeUmNumero
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizou!'))


console.log('hello world')
```
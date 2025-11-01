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
const { gets, print, toArray } = require('./funcoes-auxiliares');


const N = toArray();

let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
    const numero = gets();
    if (numero % 2 == 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        menorNumeroImpar = numero; 
        if(numero <= menorNumeroImpar) {
            menorNumeroImpar = numero; 
        }
    }
} 


print(`Maior número par: ${maiorNumeroPar}` );
print(`Menor número ímpar: ${menorNumeroImpar}`);


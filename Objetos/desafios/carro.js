class Carro {
    marca; 
    cor;
    gastoCombustivel; 

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca; 
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }

    valorPercurso(km, preco) {
        const kmPorLitro = this.gastoCombustivel * km;
        return kmPorLitro * preco;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);


console.log(uno.cor);
console.log(uno.marca);
console.log(uno.gastoCombustivel);
console.log(uno.valorPercurso(70, 5));

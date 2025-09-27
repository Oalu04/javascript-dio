(function (){

    const pessoa =  {
        nome: 'Vitor J Guerra',
        idade: 25,
        descrever: function() {
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        }
    };



    pessoa.altura = 1.69;

    //deleta o objeto nome
    delete pessoa.nome;
    console.log(pessoa);

    pessoa.descrever();
})();
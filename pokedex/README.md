# Instalando as bibliotecas

Abra seu terminal e digite os seguintes comandos para importar a biblioteca que irá simular um servidor http

```
npm install  -g http-server
``` 
E criaremos um index.html

Para abrir esse index.html através de um http server, digite no terminal o comando `http-server`

## Introduzindo o javascript

No nosso exemplo atual criamos um botão e agora com javascript faremos com que ele faça alguma ação no nosso site 

Para fazer isso primeiro precisamos capturar esse botão utilizando o comando `document.getElementById()`. `Document` nada mais é do que a referencia do próprio html e agora que ele pegou o id que colocamos no botão faremos com que de um console.log toda vez que for pressionado

```javascript
const btnTeste = document.getElementById('btnTeste');

//Isso aqui basicamente diz: Quando acontecer um evento 'click' chama essa função, e essa função executa um console.log
btnTeste.addEventListener('click', function(){
    console.log('Clicou no botão');
})


```

# Normalize

Ao se montar um site existe um certo problema que pode ocorrer de diferença de interpetração do css por diferentes browsers, chrome, firefox, explorer, etc. Cada um deles tem um meio de ler o css e isso pode acabar criando algumas divergencias. O Normalize serve justamente para que o estilo css se mantenha no mesmo para qualquer tipo de browser.

## Instalando 

Pesquisaremos por `cdn normalize css` e abriremos a primeira página e copiaremos o link tag.

depois damos um `ctrl + v` no `head` do nosso html

# Adicionando fontes 
Pesquise no google fonts por roboto, clique em `get font` e copie por link e adicione no nosso head.

Depois vamos colocar globalmente a fonte no nosso global.css

```css
* {
    font-family: "Roboto", sans-serif;
}
```

# Estilização 
## Primeira estilização 

Nesse primeiro momento criaremos nossa section tendo um h1, com uma lista ordenada tendo nossos pokemons e no css daremos um espaçamento.

## Estilização da listagem 

Adicionaremos nomes de mais pokemons, faremos a lista ficar uma do lado da outra e criaremos blocos arredondados e mudaremos sua cor.

```css
ol.pokemons {
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
}

ol.pokemons li {
    margin: .5rem;
    padding: 2rem 1rem;
    border-radius: 1rem;
    background-color: #14a06f;
    color: #fff;
    height: 100px;
}
```

## Adicionando imagem 

Pegamos as imagens dos pokemon no pokeAPI e damos um  `display: flex ` e um `flex-direction: column` para fazer com que os itens da nossa lista fiquem um embaixo do outro. Agora na imagem, faremos um max-width: 100% para que a imagem não vaze e um height: 100px


# Protocolo HTTP 

## URL Path & Method 

Requisição HTTP

URL: https://pokeapi.co/api/v2/pokemon
A URL é nosso path o que quer dizer que ele é o ip, porta do servidor e o endereço do recurso que queremos.

A URL é composta por: ${Ip = endereço}/{path = caminho de indentificação do recurso}.

* Ip: https://pokeapi.co
Isso é um dominio que um servidor DNS irá converter para IP e fazer a comunicação.

* Path: /api/v2/pokemon
Depois do ip vem o path, o identificador do nosso recurso

### Request Method 
Sempre que formos fazer uma requisição para um servidor ela tem o seu tipo, podendo ser um **GET** | **POST**|**PUT** | **DELETE** cada um com significações diferentes. 
Usando https://pokeapi.co/api/v2/pokemon como exemplo: 
* GET: Quero buscar este recurso.
* POST: Quer inserir um novo pokemon.
* PUT:  Quero atualizar o pokemon
* DELETE: Deleta o pokemon com o identificador. Ex: https://pokeapi.co/api/v2/pokemon/1

## Query String
É uma descrição de busca, toda vez que usamos um metodo GET nós queremos buscar alguma coisa e pode ocorrer de querermos filtrar essa busca, como pegar uma lista de todos os pokemons que comecem com a letra i ou todos os pokemons tipo grama.

### Sintaxe 

URL: https://pokeapi.co/api/v2/pokemon?
Temos a URL e a `Query String` começa depois do ponto de interrogação.

Exemplo com tipo grama e que começem com letra i: https://pokeapi.co/api/v2/pokemon?type=grass&name=i

## Headers 

Os Headers são metadados na nossa requisição, servem para descrever ou complementar nossa requisição.
Temos dois tipos de header quando utilizamos o devTools `Request Header` que são as informações da nossa requisição e o `Response Header` que é o que o servidor irá responder para nós


Por exemplo: ![alt text](/readmeImg/image.png) 
Esse texto esta dizendo para o servidor que eu aceito como resposta: 

```
text/html
application/xhtml+xml
application/xml;q=0.9 
image/avif
image/webp
image/apng
*/*;q=0.8
```

E o servidor mesmo com nos devolverá um json:

![alt text](/readmeImg/image.png)

# Primeira requisição 

Para fazer uma requisição http com o pokeAPI usaremos o `FetchAPI` uma outra api que facilitará a conexão

Vamos criar algumas variaveis para servir como limite de quanto conteudo aparecerá e salvar a url em uma constante

E para fazer a requisição usamos o comando `fetch()` e passamos a URL que retorna uma **Promise**
```javascript
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
```

**Promise**: Serve para lidar com assincronismo no javascript. Assincronismo nesse sentido é quando queremos fazer uma conexão http so que não obteremos essa resposta de imediato, ela demorará para ser atendida. E uma Promise é uma promessa de um resultado, ou seja, conforme executarmos o fetch() temos a promessa de que uma hora receberemos a resposta

Este comando faz com que caso a requisição seja bem sucedida, "então" execute a função
```javascript
fetch(url) 
    .then(function(response) {
        console.log(response);
    })
    // Esse para caso a requisição de algum erro
    .catch(function(error) {
        console.error(error);
    })
```


# Transformando nossa lista de pokemon em uma list HTML

Criaremos uma função que vai receber um "pokemon" e irá retornar uma lista html

```javascript 
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>                        
                    <li class="type">poison</li>                        
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    
    `
}
```
Depois queremos colocar a lista de pokemons que criamos dentro da nossa lista no html. 
+ 1 Buscar uma referencia para o elemento html que precisamos utilizando `getElementById()`
+ 2 Criar um traço `for` que irá percorrer a lista de pokemons e incrementá-los na lista

```javascript
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
       
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }

    })
    .catch((error) => console.log(error))
```

Essa é uma das formas de se fazer isso, porém, não é recomendado fazer esse tipo de concatenação com o inner.HTML, pois a cada novo item do looping você faz com que o browser tenha que reinterpretar a lista inteira. O recomendado é concatenarmos tudo de uma vez, com uma lista já pronta. Em essência, no código mostrado abaixo você está transformando uma lista de objetos em uma lista HTMl, ou em outras palavras, um array de um tipo em um array de outro tipo. Falo dessa forma pois o javascript possui um método que realiza exatamente isso, sem precisarmos que façamos toda essa linha de código por nós mesmos. 

```js
const listItems = [];

for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon))
}
```

## Utilizando o `.map`
Em forma resumida mas o comando é o mesmo do ciclo for e muito mais legivel, ainda estamos pegando uma lista de objetos js e convertendo para uma lista html.
```js
.then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
})
```
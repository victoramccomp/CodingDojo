// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer = {};
/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
    nome: 'Lucas Alves',
    sobrenome: 'Luquita',
    sexo: 'Masculino',
    dataDeNascimento: new Date(1970, 0, 1),
    altura: 1.7,
    peso: 100,
    andando: false,
    caminhouQuantosMetros: 0
}
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.idade = () => {
    return Math.abs( new Date( new Date() - pessoa.dataDeNascimento.getTime() ).getUTCFullYear() - 1970 ); // 1970 é importante :)
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = (metros) => {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = () => {
    pessoa.andando = false;
}
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = () => {
    return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`;
}
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
// WE DID IT BETTER...Much Better!!!!! 
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = () => {
    return `Olá, é feio ficar perguntando isso... mas... ${pessoa.peso}Kg! SEU BABACA!`;
}
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = () => {
    return `Eu tenho ${pessoa.altura} metros!`;
}
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto();
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.idade();
/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso();
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.altura();
/*
Faça a `pessoa` fazer 3 aniversários.
*/
//Não tenho a jóia do tempo nem um deloryan, só aguardar...



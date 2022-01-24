// new Error (message, fileName, lineNumber)
// todos os parâmetros são opcionais mas, fileName e lineNumber nem sempre estão disponíveis

const meuErro = new Error('Mensagem de erro.');

meuErro.name = 'SomethingWrong';

console.log(meuErro.name);
console.log(meuErro.stack);
console.log(meuErro);

throw meuErro;
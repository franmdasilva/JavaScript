function palindromoVerifica(string){
    if (!string) throw "String inexistente ou vazia!"; // throw trata (!string) como um erro

    return console.log(string.split("").reverse().join("") === string);
}

function tryCatchExemplo(string) {
    try { // verifica se há erro em um pedaço de código
        return palindromoVerifica(string); 
    } catch (e) { // se houver erro, dentro do catch podemos decidir o que fazer com esse erro
        console.log(e); // neste caso vamos apenas imprimir a mensagem do erro
    }
    finally { // finally é executado independente de ter erro ou não
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');
tryCatchExemplo('pedra');
tryCatchExemplo('ana')
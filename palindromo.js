let string = "ana ana"

// solução 1
function palindromoVerifica(string){
    if (!string) return "String inexistente ou vazia!"

    return string.split("").reverse().join("") === string
}

console.log(palindromoVerifica(string))

// solução 2
function palindromoVerifica2(string){
    if (!string) return "String inexistente!"

    for(let i = 0; i < string.length / 2; i++){
    if (string[i] !== string[string.length - 1 - i]) {
        return false 
    }
    return true
    }
}

console.log(palindromoVerifica2(string))
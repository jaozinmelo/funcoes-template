// Resolva o Exercício de Fixação!

function verificarMaioridade(nome, anoNascimento, anoAtual){
    const idade = anoAtual - anoNascimento
    const EhMaior = idade >= 18

    const frase = `${nome} é maior de idade? ${EhMaior}`

    return frase
}

const pessoa2 = verificarMaioridade('Talita', 2007, 2023)
console.log(pessoa2)
const pessoa3 = verificarMaioridade('Wanderlei', 1977, 2023)
console.log(pessoa3)
const pessoa4 = verificarMaioridade('Orlainson', 2010, 2023)
console.log(pessoa4)

/* Usando prompt */
const nomeDoUser =prompt('Qual o seu nome')
const pessoa1 = verificarMaioridade(nomeDoUser, 2001, 2023)
console.log(pessoa1)
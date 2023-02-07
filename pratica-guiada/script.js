// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
// Pratica Guiada 1
function darOlaPessoa(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}
/* darOlaPessoa('Jp')
darOlaPessoa('Blenderson')
darOlaPessoa('juaresin') */

//(Função nao-nomeada)
const darOlaPessoaExtra = function(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}
/* darOlaPessoaExtra('Talitinha')
darOlaPessoaExtra('Dadin')
darOlaPessoaExtra('Dleidson') */

// usando prompt :)
/* const nomePrompt = prompt('Diga teu nome!')
darOlaPessoaExtra(nomePrompt)
 */

//Pratica Guiada II Unindo funções, variáveis e operadores
 function operarNumero(numero){

    const ehPar = numero % 2 === 0

    const soma = numero + 10

    const multiplica = numero * numero

    const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`
    
    return frase 
 }

/* console.log(operarNumero(4))
console.log(operarNumero(5))
console.log(operarNumero(12)) */

//refazer o exercício usando uma função não-nomeada/ expressão de função

const operarNumeroUsandoExpressaoDeFuncao = function(numero){
    const ehPar = numero % 2 === 0

    const soma = numero + 10

    const multiplica = numero * numero

    const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`
    
    return frase 
}

/* console.log(operarNumeroUsandoExpressaoDeFuncao(5))
console.log(operarNumeroUsandoExpressaoDeFuncao(6))
console.log(operarNumeroUsandoExpressaoDeFuncao(13)) */

//Pratica Guiada III

function verificarLoginESenha(login, senha) {
    const loginArmazenado = 'leoCerrote'
    const senhaArmazanada = 'Padrao123'

    const comparaLogin = loginArmazenado === login
    const comparaSenha = senhaArmazanada === senha

    const verificaInfos = comparaLogin && comparaSenha

    const frase = `As informações de login estão corretas? ${verificaInfos}`

    return frase
}

console.log(verificarLoginESenha('leoCerrote', 'Padrao123'))

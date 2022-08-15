let lista = []
let opcao = 's'
while (opcao == 's') {
    let nome = prompt("Digite o nome do participante: ")
    let idade = prompt("Idade: ")
    if (idade > 18) {
        if (lista.length < 100) {
            console.log("Cadastro Permitido");
            lista.push(nome)
        } else {
            console.log("Cadastro não permitido, lista cheia");
        }
    } else {
        console.log("Cadastro não permitido. Participante menor de idade");
    }
    opcao = prompt("Deseja continuar outro participante (s ou n) ")
}
let i = 1
while (i < lista.length) {
    console.log(lista[i])
    i++
}
// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
let numero = prompt("informe o número")
const converteNumero = parseInt(numero) 
alert(converteNumero * 2)

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto 
// pela conta junto com a taxa de atendimento do garçom.
const contaJantar = prompt("escreva o valor da sua conta")
const taxaGarcom = parseInt(contaJantar * 0.10)
const valorTotal = parseInt(contaJantar) + taxaGarcom
alert("O valor total do jantar é: R$ " + valorTotal.toFixed(2))
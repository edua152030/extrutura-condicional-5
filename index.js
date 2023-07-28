/**1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.


    let alunos = 0;
    let somaIdades = 0;
  
    while (true) {
      let idade = Number(prompt('Digite a idade do aluno (ou 999 para sair):'));
  
      if (idade === 999) {
        break;
      }
  
      somaIdades += idade;
      alunos++;
    }
  
      const mediaIdade = somaIdades / alunos;
      document.write(`Quantidade de alunos: ${alunos}`);
      document.write(`Média de idade: ${mediaIdade}`);
     */
//-----------------------------------------------------------------

/*2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.



let salariof = 0
let salariom = 0

do {
    let sexo = prompt('m para masculino  e f para feminino')
    let salario = parseInt(prompt('digite seu salario'))

    if(sexo == 'f'){
        salariof += salario
    }else{
        salariom += salario
    }

} while (confirm('continuar?'));


document.write('salarios masculino' + salariom)
document.write('salarios feminino' + salariof)

*/
//-----------------------------------------------------------------

/**3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!


let valorInicial = Number(prompt('digite o numero inicial'))
let valorFinal = Number(prompt('digite um valor final'))
let contagem = 0
for(i = valorInicial; i < valorFinal; i++){
    document.write(`${i} , `)
}

document.write(`  sua contagem `)
document.write(`acabou`)
document.write(`<br>seu valor inicial e : ${valorInicial}`)
document.write(`<br>seu valor final e : ${valorFinal}`)
 */
//-----------------------------------------------------------------

/** 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto
mulher 13%

let nome = prompt('digite se nome')
let sexo = prompt('digite o sexo m para homen e f para mulher').toLocaleUpperCase()
let valorCompra = 0
let desconto = 0

do {
    let valorProduto = parseInt(prompt('digite o valor do produto'))
    valorCompra += valorProduto
} while (confirm('deseja continuar'));
document.write(valorCompra)
if(sexo == 'M' ){
    desconto = 5;
    document.write(`o valor da sua compra ${nome} e de ${valorCompra - desconto}` )
}else{
    desconto = 13;
    document.write(`o valor da sua compra ${nome} e de ${valorCompra - desconto}` )
}
*/
//-----------------------------------------------------------------

/**5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.

let distancia = Number(prompt('digite a distancia que vamos percorer'))
let valor = 0

if(distancia < 200){
    valor = distancia * 0.5
}else{
    valor = distancia * 0.45
}

document.write(`voce percoreu ${distancia} e vai pagar ${valor}`)
 */
//-----------------------------------------------------------------

/**6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP
 

let comprimento = Number(prompt('digite a compimento'))
let largura = Number(prompt('digite a largura'))
let m2 = comprimento * largura

if(m2 < 100){
    document.write(`terreno popular ele tem ${m2} quadrados`)
}else if(m2 >= 100 && m2 < 500){
    document.write(`terreno master ele tem ${m2} quadrados`)
}else{
    document.write(`terreno vip ele tem ${m2} quadrados`)
}
*/
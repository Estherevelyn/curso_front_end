//const div = document.getElementById('quadrado')


 //onmouseenter="azul()"
 //onmouseout="vermelha()"
 //onmousedown="clicou()"
 //onmouseup="soltou()"
 //div.addEventerlistener('mouserenter', azul)
// div.addEventerlistener('mouseout', vermelha)
// div.addEventerlistener('mousedown', clicou)
 //div.addEventerlistener('mouseup', soltou)

//function azul(){
     
 //   div.style.backgroundColor = 'blue'
//}

//function vermelha(){
   

// div.style.backgroundColor = 'red'
//}

//function clicou(){
    

//    div.innerText = 'Clicou!'

//    div.innerHTML = `
  //    <ul>
   //     <li>item 1 </li>
    //    <li>item 2 </li>
    //    <li>item 3 </li>
 //    </ul>
   //  `
//}

//function soltou(){
    

 //   div.innerText = ' '
//}


const soma = document.getElementById('soma')
const div = document.getElementById('resposta')
const subtracao = document.getElementById('subtrair')
const multiplicacao = document.getElementById('multiplicar')
const dividir = document.getElementById('divisao')

soma.addEventListener('click', somar)
subtracao.addEventListener('click', subtrair)
multiplicacao.addEventListener('click', multiplicar)
dividir.addEventListener('click', divisao)



function somar(){
var valor1 = document.getElementById('n1').value
var valor2 = document.getElementById('n2').value
var resposta = Number(valor1) + Number(valor2)
div.innerText = resposta

}

function subtrair(){
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) - Number(valor2)
    div.innerText = resposta
}

function multiplicar(){
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) * Number(valor2)
    div.innerText = resposta
}

function divisao(){
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) / Number(valor2)
    div.innerText = resposta
}
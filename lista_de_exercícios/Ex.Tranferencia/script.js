//... - significa que foi adicionado array(o array é um vetor responsavel por detalhar os item da lista)
const itensLista = [...document.querySelectorAll('li')]
const botao = document.querySelector('button')
const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')


//o forEach é responsavel por adicionar a função para todos itens da lista 
//O forEach é a maneira mais facil
itensLista.forEach((item)=>{

//o addEventListener vai observar a funçao, nesse caso o click 

//a funcao vazia serve para previnir que adicione todos os itens da lista 

// adicionado classe selecionado aos itens clicados 
    item.addEventListener('click', () =>{
        
        item.classList.toggle('selecionado')
    })
})


botao.addEventListener('click', ()=>{
//nesse evento faz o que tenha a separação das listas
    const primeiraLista = document.querySelector('.primeira')
    const segundaLista = document.querySelector('.segunda')

// nesse evento vai selecionar a primeira ou a segunda lista de forma individual 
    const selecionadosPrimeira = [...primeiraLista.querySelectorAll('.selecionado')]
    const selecionadosSegunda = [...segundaLista.querySelectorAll('.selecionado')]

//vai selecionar a lista é passar para o outro lado 
    selecionadosPrimeira.forEach((item)=>{
        item.classList.remove('selecionado')
        lista2.appendChild(item)
 
    })

    selecionadosSegunda.forEach((item)=>{
        item.classList.remove('selecionado')
        lista1.appendChild(item)
    })
    
})



//O for é a maneira mais comum
// for(let item = 0; item < itensLista.length; item++){
//     itensLista[item].addEventListener('click', clicou2)
// }

// function clicou2 (){
//     console.log('fui clicado pelo normal')}


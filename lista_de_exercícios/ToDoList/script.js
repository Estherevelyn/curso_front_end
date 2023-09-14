// variavel capturada dentro do input onde vai ser inserido as tarefa
const textoBox = document.getElementById("texto-box");
// variavel dentro da ul onde irá aparecer as tarefas
const listaContainer = document.getElementById("lista-container");

// função criada para adicionar(botão) a tarefa da forma antiga pq não está funcionando
// o Luciano vai me odiar por isso
function addTarefa(){
// se não for adicionado nenhum texto criar um valor nulo
  if(textoBox.value === ''){
    alert("A tarefa não foi adicionada!")
  }
// senao criar uma lista com os elementos
  else{
// usei a variavel let pq vai ficar somente dentro dessa função
    let li = document.createElement("li");
// 
    li.innerText = textoBox.value;
    listaContainer.appendChild(li);
// excluir lista 
    let excluir = document.createElement("excluir");
    excluir.innerText = "\u00d7";
    li.appendChild(excluir);
 }
}
//adicionar como feita a lista 
 listaContainer.addEventListener("click", function(adicionar){
if(adicionar.target.tagName === "LI"){
 adicionar.target.classList.toggle("checked");
}
//se quiser pode adicionar ou excluir a tarefa 
else if(adicionar.target.tagName === "EXCLUIR"){
adicionar.target.parentElement.remove();
 }
})


//Perguntas ao Professor// 

//Qual a diferenca entre interHTML e interText 

//Se precisava limitar a quantidade de tarefas 

//Por que não precisa do li no html eu criei mais depois apaguei 



const btnEnviar = document.querySelector('button')
const cep = document.getElementById('cep')

btnEnviar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    l(cep.value)

    //interpolação tranformar o js em string
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response => response.json())
    .then(data => {
        l(data)
})
})




function l(mensagem){
    console.log(mensagem)
}
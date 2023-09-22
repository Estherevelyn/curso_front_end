// const btnProcurar = document.querySelector('#procurar')
cont = logradouro = document.querySelector('#logradouro')
const bairro = document.querySelector('#bairro')
const inputCep = document.getElementById('input-cep')

inputCep.addEventListener('blur', (evento)=> {

    evento.preventDefault()
    let cep = inputCep.value

    cep = cep.replace('-','')
    
     if (cep.length != 8){
         alert('CEP Invalido')
     }

     else{
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
         logradouro.value = data.logradouro
         bairro.value = data.bairro
         complemento.value = data.complemento
        })
        .catch(err => {
            console.log(err)
            alert('cep não encontrado!')
        })
     } 


})


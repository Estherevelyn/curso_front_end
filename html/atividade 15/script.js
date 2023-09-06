const email = document.getElementById('email')
const senha = document.getElementById('senha')
const entrar = document.getElementById('entrar')

entrar.addEventListener('click', (event) => {
    
    event.preventDefault();

    if (email.value == ''){
        alert('Email invalido') 
        email.classList = 'erro'
       
    }
    if (senha.value == ''){
        alert('Senha invalido!')
        senha.classList = 'erro'
    }

})

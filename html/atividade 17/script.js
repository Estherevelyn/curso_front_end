const btnmodal = document.getElementById('open')
const btnAceitar = document.getElementById('corfirma')
const btnCancelar = document.getElementById('cancela')

btnmodal.addEventListener('click',open)

btnCancelar.addEventListener('click', close)

btnAceitar.addEventListener('click' , ()=>{
    close()
    alert('fechar a paginas')
})

bt

function open(){
    const modal = document.getElementById('sec-modal')

    modal.classList.remove('hide')
}


function close(){
    const modal = document.getElementById('sec-modal')
    modal.classList.add('hide')

}

btnCancelar.addEventListener('click', cancela)

function cancela(){
    
}
 
const enviar = document.querySelector('#formulario')

enviar.addEventListener('submit', (e) => {
    
    e.preventDefault()
    const email = document.querySelector('#email').value
    const comentario = document.querySelector('#comentario').value
    let alerta = document.querySelector('#alerta')

    if (email == '' || comentario == '') {
        
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">¡Todos los campos son obligatorios!</div>'
        return
    }

    alerta.innerHTML = '<div class="alert alert-success" role="alert">¡Gracias por tu mensaje!</div>'
})
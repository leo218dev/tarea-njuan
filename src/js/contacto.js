const enviar = document.querySelector('#formulario')

/* const mostrarAlerta = (mensaje, tipo) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${tipo} alert-dismissible" role="alert">`,
      `   <div>${mensaje}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    const contenedor = document.querySelector('#alerta')
    contenedor.appendChild(wrapper)
} */

enviar.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Enviando formulario...')
    document.getElementById('alert').style.display = 'block';
})
import Cookies from 'js-cookie'

const modoOscuro = () => {
    Cookies.set('modoOscuro', 'true');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
}

const modoClaro = () => {
    Cookies.remove('modoOscuro');
    document.documentElement.setAttribute('data-bs-theme', 'light');
}

document.getElementById('modoOscuro').addEventListener('click', modoOscuro);
document.getElementById('modoClaro').addEventListener('click', modoClaro);

const cargarModo = () => {
    if (Cookies.get('modoOscuro')) {
        modoOscuro();
    } else {
        modoClaro();
    }
}

cargarModo();
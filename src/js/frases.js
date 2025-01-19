const frases = [
    "¡Escuchadme bien bastardos! Habeis apagado la luz del mundo. Pero jamás podrés sofocar... la llama que mora en mi interior.",
    "¡Jamás mil máquinas fabricarán una flor! ¡JAMÁS!",
    "Dentro de nosotros hay un auténtico universo de vida, de coraje, de esperaza.",
    "Ese chico está amargado, ese chico está despechado. ¡NO! El sistema está despechado por mí. El sistema ha perdido... a un gusano cojonudo.",
    "Domingo señores, domingo. No soporto los domingos."
]

const mostrarFrase = () => {
    const frase = frases[Math.round(Math.random() * (frases.length - 1))]
    document.getElementById('frase').innerHTML = frase
}

document.getElementById('fraseBtn').addEventListener('click', mostrarFrase)
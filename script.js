function load() {
    let msg = window.document.getElementById('horario')
    let container = document.getElementById('container')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `${hora} Horas`

    if (hora >= 0 && hora < 12) {
        // Morning
        document.body.style.backgroundImage = "url('imagens/morning-pc.jpg')"
        horario.style.color = "#FFF9C4"
    } else if (hora >= 12 && hora < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('imagens/afternoon-pc.jpg')"
        horario.style.color = "#90CAF9"
    } else {
        // Night
        document.body.style.backgroundImage = "url('imagens/night-pc.jpg')"
        horario.style.color = "#4682B4"
    }
}



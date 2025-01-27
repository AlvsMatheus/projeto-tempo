function load() {
    let msg = window.document.getElementById('horario')
    let container = document.getElementById('container')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `${hora} Horas`

    if (hora >= 0 && hora < 12) {
        // Morning
        container.style.backgroundImage = "url('manha.jpg')"
        horario.style.color = "#FFF9C4"
    } else if (hora >= 12 && hora < 18) {
        // Afternoon
        container.style.backgroundImage = "url('afternoon.jpg')"
        horario.style.color = "#90CAF9"
    } else {
        // Night
        container.style.backgroundImage = "url('night.jpg')"
        horario.style.color = "#4682B4"
    }
}



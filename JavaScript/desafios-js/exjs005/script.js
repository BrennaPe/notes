function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    // hora = 19  For testing purposes, set a fixed hour
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'images-exjs005/dia.png'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'images-exjs005/tarde.png'
        document.body.style.background = 'linear-gradient(0deg,rgba(29, 154, 204, 1) 45%, rgba(242, 161, 80, 1) 100%) no-repeat fixed'
    } else {
        // Boa noite
        img.src = 'images-exjs005/noite.png'
        document.body.style.background = 'linear-gradient(0deg,rgba(15, 73, 247, 1) 0%, rgba(3, 2, 2, 1) 100%) no-repeat fixed'
    }
}
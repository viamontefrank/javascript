function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    console.log(hora)
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manhana.png'
        document.body.style.backgroundColor = 'white'
    }else if (hora >= 12 && hora < 18){
        img.src = 'img/atardecer.png'
        document.body.style.backgroundColor = 'blue'
    }else{
        img.src = 'img/noche.png'
        document.body.style.backgroundColor = 'green'
    }

}

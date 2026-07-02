function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        res.innerHTML = ''

        let genero = ''
        if (fsex[0].checked) {
           genero = 'homem'
           if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'img/homenb.png')
           }else if ( idade < 21) {
             img.setAttribute('src','img/homenj.png')
           } else if (idade < 50) {
            img.setAttribute('src','img/homena.png')
           } else {
            img.setAttribute('src','img/homeni.png')
           }

        } else {
            genero = 'mulher'
             if(idade >= 0 && idade < 10) {
                img.setAttribute('src','img/mulherb.png')    
           }else if ( idade < 21) {
                img.setAttribute('src','img/mulherj.png')     
           } else if (idade < 50) {
                img.setAttribute('src','img/mulhera.png')
           } else {
                img.setAttribute('src','img/mulheri.png')    
           }
        }
     res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      
     res.appendChild(img)
    }
}
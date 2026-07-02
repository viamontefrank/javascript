function verificar() { 
    if (
    document.getElementById('inicio').value == '' ||
    document.getElementById('fim').value == '' ||
    document.getElementById('passo').value == ''
    ) {
        alert('Preencha todos os campos.')
        return
    } 

    let resultado = document.getElementById('res')
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    resultado.innerHTML = ''

    if (passo == 0 ) {
        window.alert('Impossível calcular, passo deve ser 1 ou mais')
        return
    }else if(inicio <= fim) {
        for(let c = inicio; c <= fim; c += passo) {
        resultado.innerHTML += `${c} \u{270F} `
        }
        resultado.innerHTML += `Fim \u{2705} `
    } else {
        for(let c = inicio; c >= fim; c -= passo) {
        resultado.innerHTML += `${c} \u{270F} `
        }
        resultado.innerHTML += `Fim \u{2705} `
    }
    

  
  
}
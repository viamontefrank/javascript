function verificar() {
    if(document.getElementById('numero').value === ''){
        window.alert('Selecione um numero para mostrar a tabuada')
        return
    }

    let numero = Number(document.getElementById('numero').value)
    let caja = document.getElementById('caja')
    
    caja.value = ''

    for(let c = 1;c <=10;c++) {
        let res = (numero*c)
        caja.value += ` ${numero} X ${c} = ${res}\n` 
        
        
        

    }
}
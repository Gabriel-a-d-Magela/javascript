function gerarTabuada() {
    var n1 = document.getElementById('txtn1')
    var tab = document.getElementById('seltab')
    if (n1.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        n1 = Number(n1.value)
        tab.innerHTML = ''
        for (cont=1;cont<=10;cont++) {
            var item = document.createElement('option')
            item.text = `${n1} x ${cont} = ${n1*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
    }  
    }
}
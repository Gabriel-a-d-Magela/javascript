function adicionar() {
    let num = document.getElementById('txtnum')
    let sel = document.getElementById('selvet')
    if (num.value.length == 0) {
        alert('[ERRO] Digite um valor!')
    } else {
        num = Number(num.value)
        vet = []
        num.push(num)
        let ivet = document.createElement('option')
        ivet.text = `${vet[0]}`
        sel.appendChild(ivet)
    }

    
}
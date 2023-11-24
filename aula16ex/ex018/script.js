var vet = []

function adicionar() {
    let num = document.getElementById('txtnum')
    let sel = document.getElementById('selvet')
    if (num.value.length == 0) {
        alert('[ERRO] Digite um valor!')
    } else {
        num = Number(num.value)
        if(num < 1 || num > 100) {
            alert('[ERRO] Digite valores entre 1 e 100')
        } else {
            if(vet.indexOf(num) == -1) {
                vet.push(num)
                let ivet = document.createElement('option')
                ivet.text = `Valor ${num} adicionado`
                sel.appendChild(ivet)
                res.innerHTML = ''
        } else {
            alert('[ERRO] Esse valor já existe no vetor!')
        }
        
        } 
    }   
}

function finalizar() {
    if(vet == '') {
        alert('[ERRO]Digite um valor!')
    } else {
        let res = document.getElementById('res')
        res.innerHTML = ''
        let valmaior = vet[0]
        let valmenor = vet[0]
        let somavet = 0
        let mediavet = 0
        //Percorrendo o vetor
        for(let pos in vet) {
            //Soma dos elementos do vetor
            somavet += vet[pos]
            //Condição para o maior valor do vetor
        if(vet[pos] > valmaior) {
            valmaior = vet[pos]
            //Condição para o menor valor do vetor 
        } else if(vet[pos] < valmenor) {
            valmenor = vet[pos]
        }
    }
    //Média dos valores do vetor
    mediavet = somavet/vet.length
    res.innerHTML += `
    Ao todo, temos ${vet.length} números cadastrados.<br>
    O maior valor digitado foi ${valmaior}. <br> 
    O menor valor digitado foi ${valmenor}.<br>
    Somando todos os valores, temos ${somavet}.<br>
    A média dos valores digitados é ${mediavet}.
    `
    }  
} 
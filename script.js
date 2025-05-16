let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '
    } else {
        window.alert('Valor inválido / já inserido !')
    }
    num.value = ''
    num.focus()
}

function finalizar (){
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ' '
        res.innerHTML += `<p>Temos ${tot} valores adicionados.</p>`
        res.innerHTML += `<p>O <strong>maior</strong> valor foi: ${maior}</p>`
        res.innerHTML += `<p>O <strong>menor</strong> valor foi: ${menor}</p>`
        res.innerHTML += `<p><strong>Somando</strong> os valores, temos: ${soma}</p>`
        res.innerHTML += `<p>A <strong>média</strong> dos valores é: ${media}</p>`
    }
}
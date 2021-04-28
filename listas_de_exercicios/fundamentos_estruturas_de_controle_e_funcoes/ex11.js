function ehBissexto(ano) {
    if (ano % 400 === 0) {
        return true
    } else if (ano % 100 === 0) {
        return false
    } else if (ano % 4 === 0) {
        return true
    } else {
        return false
    }
}

const ano = 1628
console.log(ehBissexto(ano) ? `O ano ${ano} é bissexto` : `O ano ${ano} não é bissexto`)
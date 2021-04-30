function comparaStrings(string1, string2) {
    string1 = string1.toUpperCase().split('')
    string2 = string2.toUpperCase().split('')

    let cond

    cond = string1.every(c => string2.indexOf(c) !== -1)
    cond = cond && string2.every(c => string1.indexOf(c) !== -1)

    return cond
}

console.log(comparaStrings('analistas', 'sanalitas'))
console.log(comparaStrings('para', 'arpa'))
console.log(comparaStrings('amor', 'roma'))
console.log(comparaStrings('pêra', 'maçã'))
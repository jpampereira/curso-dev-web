const multiplicar = (a, b) => {
    let soma = 0
    for (let i = 0; i < b; i++) {
        soma += a
    }

    return soma
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
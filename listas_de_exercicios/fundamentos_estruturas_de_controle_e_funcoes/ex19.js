function conta(codigo, qtd) {
    switch(codigo) {
        case 100:
            return 3.00 * qtd
        case 200:
            return 4.00 * qtd
        case 300:
            return 5.50 * qtd
        case 400:
            return 7.50 * qtd
        case 500:
            return 3.50 * qtd
        case 600:
            return 2.80 * qtd
        default:
            return 'Produto não encontrado'
    }
}

console.log(conta(100, 1))
console.log(conta(200, 2))
console.log(conta(300, 3))
console.log(conta(400, 4))
console.log(conta(500, 5))
console.log(conta(600, 6))
console.log(conta(700, 7))
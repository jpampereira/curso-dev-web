const operacoes = (a, op, b) => {
    switch(op) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            return 'Operação Inválida'
    }
}

console.log(operacoes(3, '+', 4))
console.log(operacoes(3, '-', 4))
console.log(operacoes(3, '*', 4))
console.log(operacoes(3, '/', 4))
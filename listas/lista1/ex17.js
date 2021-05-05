function calculaSalario(plano, salario) {
    switch(plano) {
        case 'A':
            return salario * (1 + 0.10)
        case 'B':
            return salario * (1 + 0.15)
        case 'C':
            return salario * (1 + 0.20)
        default:
            return 'Plano Inválido'
    }
}

console.log(calculaSalario('A', 1000))
console.log(calculaSalario('B', 1000))
console.log(calculaSalario('C', 1000))
console.log(calculaSalario('D', 1000))
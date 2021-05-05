const NumeroPorExtenso = numero => {
    switch(numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo.'
    }
}

console.log(NumeroPorExtenso(0))
console.log(NumeroPorExtenso(1))
console.log(NumeroPorExtenso(2))
console.log(NumeroPorExtenso(3))
console.log(NumeroPorExtenso(4))
console.log(NumeroPorExtenso(5))
console.log(NumeroPorExtenso(6))
console.log(NumeroPorExtenso(7))
console.log(NumeroPorExtenso(8))
console.log(NumeroPorExtenso(9))
console.log(NumeroPorExtenso(10))
console.log(NumeroPorExtenso(11))
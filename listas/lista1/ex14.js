const mercado = fruta => {
    switch(fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'O que é isso?'
    }
}

console.log(mercado('maçã'))
console.log(mercado('kiwi'))
console.log(mercado('melancia'))
console.log(mercado('uva'))
function revendedora(modelo) {
    switch(modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(revendedora('hatch'))
console.log(revendedora('sedans'))
console.log(revendedora('motocicletas'))
console.log(revendedora('caminhonetes'))
console.log(revendedora('4x4'))
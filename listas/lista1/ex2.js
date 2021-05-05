const tipoDeTriangulo = (a, b, c) => {
    if (a === b && b === c) {
        return 'Equilátero'
    } else if (a !== b && a !== c && b !== c) {
        return 'Escaleno'
    } else {
        return 'Isósceles'
    }
}

console.log(tipoDeTriangulo(2, 2, 2)) //  Equilátero
console.log(tipoDeTriangulo(1, 2, 3)) // Escaleno
console.log(tipoDeTriangulo(1, 2, 2)) // Isósceles
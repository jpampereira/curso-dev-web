const atribuirConceito = notas => {
    let conceito;

    notas.forEach(nota => {
        if (nota >= 9) {
            conceito = 'A'
        } else if (nota >= 7) {
            conceito = 'B'
        } else if (nota >= 5) {
            conceito = 'C'
        } else {
            conceito  = 'D'
        }

        console.log(`${nota.toFixed(2)}\t=> ${conceito}`.replace('.', ','))
    })
}

atribuirConceito([7.7, 5.6, 4.2, 8.5, 7.0, 3.9, 2.0, 9.4, 10.0, 6.0])
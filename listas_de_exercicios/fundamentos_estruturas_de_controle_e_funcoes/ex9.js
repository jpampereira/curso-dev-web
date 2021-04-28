const classificacaoNotas = nota => {
    if (nota < 38) {
        return { nota, status: 'Reprovado' }
    }

    const diferenca = 5 - (nota % 5)
    if (diferenca < 3) {
        nota += diferenca
    }

    return { nota, status: 'Aprovado' }
}

console.log(classificacaoNotas(43))
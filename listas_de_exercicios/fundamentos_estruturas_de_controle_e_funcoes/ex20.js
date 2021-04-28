const caixaEletronico = dinheiro => {
    const cedulas = [100, 50, 10, 5, 1]
    const qtds    = [0, 0, 0, 0, 0]

    while(dinheiro > 0) {
        if (dinheiro >= 100) {
            dinheiro -= 100
            qtds[0]++
        } else if (dinheiro >= 50) {
            dinheiro -= 50
            qtds[1]++
        } else if (dinheiro >= 10) {
            dinheiro -= 10
            qtds[2]++
        } else if (dinheiro >= 5) {
            dinheiro -= 5
            qtds[3]++
        } else if (dinheiro >= 1) {
            dinheiro -= 1
            qtds[4]++
        }
    }

    let saida = ``
    for (i in qtds) {
        if (qtds[i] > 0) {
            saida += `${qtds[i]} nota(s) de R$ ${cedulas[i]}. `
        }
    }

    return saida
}

console.log(caixaEletronico(18))
console.log(caixaEletronico(73))
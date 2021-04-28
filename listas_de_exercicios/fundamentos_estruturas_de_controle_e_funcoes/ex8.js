function desempenho(pontuacoes) {
    pontuacoes = pontuacoes.split(/\s+/).map(pontuacao => parseInt(pontuacao))

    let melhorPontuacao = 0
    let recordes = -1
    let piorPontuacao
    let piorJogo = 0

    pontuacoes.forEach((pontos, i) => {
        if (pontos > melhorPontuacao) {
            melhorPontuacao = pontos
            recordes++
        } else if (pontos < piorPontuacao || piorPontuacao === undefined) {
            piorPontuacao = pontos
            piorJogo = i + 1
        }
    })

    return [recordes, piorJogo]
}

const pontuacoes = '20 30 19 21 33 14 40 45 14 14 22'
console.log(desempenho(pontuacoes))
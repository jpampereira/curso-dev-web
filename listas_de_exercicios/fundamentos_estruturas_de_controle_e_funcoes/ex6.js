const jurosSimples = (capital, juros, tempo) => capital * (1 + juros * tempo)

const jurosCompostos = (capital, juros, tempo) => capital * (1 + juros) ** tempo

console.log(jurosSimples(1200, 0.02, 15))
console.log(jurosCompostos(10000, 0.15, 10))
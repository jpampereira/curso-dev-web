const anuidade = (mes, valor) => valor * (1 + 0.05) ** (mes - 1)

console.log(anuidade(3, 1000))
const numerosNegativos = nums => {
    qtdNegativos = 0
    nums.forEach(num => num < 0 ? qtdNegativos++ : null)

    return qtdNegativos
}

console.log(numerosNegativos([3, 7, -2, 15, -8, 22, -13, 4, 36, -24]))
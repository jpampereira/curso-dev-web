const repetir = (elemento, repeticoes) => {
    const array = []
    for (let i = 0; i < repeticoes; i++) {
        array.push(elemento)
    }

    return array
}

console.log(repetir("repetir", 2))
console.log(repetir(7, 3))
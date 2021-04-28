function f(valor) {
    console.log(`R$ ${valor.toFixed(2).replace('.', ',')}`)
}

f(0.1 + 0.2)
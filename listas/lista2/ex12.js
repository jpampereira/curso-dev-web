const removerPropriedade = (objeto, atributo) => {
    const newObj = {}

    for (a in objeto) {
        if (a !== atributo) {
            newObj[a] = objeto[a]
        }
    }

    return newObj
}

const obj1 = { a: 1, b: 2 }
const obj2 = { id: 20, nome: 'caneta', descricao: 'Não preenchido' }

console.log(Object.is(removerPropriedade(obj1, 'a'), obj1))
console.log(Object.is(removerPropriedade(obj2, 'descricao'), obj2))
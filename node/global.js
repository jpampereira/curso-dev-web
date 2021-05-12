// console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

// Tudo o que estiver dentro do objeto 'global' em um arquivo pode ser visualizado por outro arquivos
// Evite essa técnica e procure utilizar o sistema de módulos
function Pessoa() {
    this.idade = 0
    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // A cada 1000 milissegundos a função anônima é 'disparada'
}

new Pessoa
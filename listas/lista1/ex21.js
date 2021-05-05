function convenioMedico(idade) {
    valor = 100

    if (idade > 60) {
        return valor += 130
    } else if (idade > 30) {
        return valor += 95
    } else if (idade >= 10) {
        return valor += 50
    } else {
        return valor += 80
    }
}

console.log(convenioMedico(7))
console.log(convenioMedico(24))
console.log(convenioMedico(34))
console.log(convenioMedico(59))
console.log(convenioMedico(62))
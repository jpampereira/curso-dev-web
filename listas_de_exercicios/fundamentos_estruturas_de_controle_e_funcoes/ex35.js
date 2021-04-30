const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

console.log(vetorPilha)

vetorAdiciona.forEach(elem => {
    console.log(`[ ${vetorPilha} ] <= ${elem}`.replace(/,/g, ', '))

    vetorPilha.push(elem)
})

console.log(vetorPilha)
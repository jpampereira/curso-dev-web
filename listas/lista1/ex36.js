const mapear = (array, num) => {
    // for (i in array) {
    //     array[i] = array[i] * num
    // }

    array = array.map(elem => elem * num)

    return array
}

const mapearSeMaiorQue5 = (array, num) => {
    // for (i in array) {
    //     if (array[i] > 5) {
    //         array[i] = array[i] * num
    //     }
    // }

    array = array.map(elem => elem > 5 ? elem * num : elem)

    return array
}

console.log(mapear([1, 2, 3, 4, 5], 2))
console.log(mapearSeMaiorQue5([4, 6, 2, 8, 11], 2))
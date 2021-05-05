function trocaArrays(array1, array2) {
    console.log(`array1 => ${array1}`)
    console.log(`array2 => ${array2}`)

    for (i in array1) {
        array1.push(array2.shift())
        array2.push(array1.shift())
    }

    console.log(`\narray1 => ${array1}`)
    console.log(`array2 => ${array2}`)
}

trocaArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
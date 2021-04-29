function paresImpares(nums) {
    let par = 0
    let imp = 0

    nums.forEach(num => num % 2 === 0 ? par++ : imp++)

    console.log(`Pares = ${par}, Ímpar = ${imp}`)
}

paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
paresImpares([7, 13, 16, 21, 37, 44, 56, 83, 101])
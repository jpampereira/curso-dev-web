function maiorMenor (nums) {
    let maior = nums[0]
    let menor = nums[0]

    nums.forEach(num => {
        if (num > maior) maior = num
        else if (num < menor) menor = num
    })

    console.log(`Menor = ${menor}, Maior = ${maior}`)
}

maiorMenor([7, 13, 8, 16, 31, 24, 2, 25, 10])
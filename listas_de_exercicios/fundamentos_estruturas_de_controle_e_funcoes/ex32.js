function mediaAritmetica(nums) {
    soma = 0
    nums.forEach(num => soma += num)

    return soma/nums.length
}

console.log(mediaAritmetica([7, 13, 8, 16, 31, 24, 2, 25, 10]))
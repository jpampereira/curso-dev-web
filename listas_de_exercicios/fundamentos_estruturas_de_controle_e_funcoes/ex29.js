const pertenceIntervalo = nums => {
    let dentro = 0
    let fora   = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 10 && nums[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }

    console.log(`Dentro do Intervalo = ${dentro}, Fora do Intervalo = ${fora}`)
}

pertenceIntervalo([7, 13, 8, 16, 31, 24, 17, 25, 10])
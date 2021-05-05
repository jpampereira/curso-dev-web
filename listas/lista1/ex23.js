function calculaNota(cod, notas) {
    notas.sort((a, b) => a < b)

    const media = 0.4 * notas[0] + 0.3 * notas[1] + 0.3 * notas[2]
    const status = media >= 5 ? 'APROVADO' : 'REPROVADO'

    console.log(`Código do Aluno: ${cod}\nNotas: ${notas}\nMédia: ${media.toFixed(2)}\nStatus: ${status}\n`)
}

const alunos = [
    [1,  [6.87, 9.33, 10]],
    [2,  [6., 4.5, 3]    ],
    [3,  [5.5, 8.2, 7]   ],
    [4,  [6, 6.5, 8]     ],
    [5,  [7, 7.5, 8.9]   ],
    [6,  [3, 2.2, 8]     ],
    [7,  [4, 4.5, 5]     ],
    [-1, [10, 6, 2]      ],
    [9,  [5, 5, 4.5]     ],
    [10, [3.5, 7, 6.2]   ]
]

for (i in alunos) {
    [cod, notas] = alunos[i]

    if (cod === -1) {
        break
    }

    calculaNota(cod, notas)
}
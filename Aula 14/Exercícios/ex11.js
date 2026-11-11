// Crie uma lista para armazenar informações sobre departamentos de uma empresa. Cada posição da lista deverá ser um objeto referente a um departamento, que armazena o nome do departamento e uma lista de funcionários. Cada funcionário é um objeto com nome do funcionário e salário do mesmo.
// - Adicione pelo menos 2 departamentos e 3 funcionários em cada um.
// - Calcule a soma dos salários de todos os funcionários.
// - Liste o nome do departamento com a média salarial mais alta.

const departamentos = [
    {
        nome: 'marketing',
        funcionarios: [
            { nome: 'João', salario: 2100 },
            { nome: 'Maria', salario: 3100 },
            { nome: 'José', salario: 3200 }
        ]
    },
    {
        nome: 'rh',
        funcionarios: [
            { nome: 'Paulo', salario: 1500 },
            { nome: 'Ana', salario: 7100 },
            { nome: 'Cleber', salario: 4200 }
        ]
    }
]

let totalSalario = 0
for (const departamento of departamentos) {
    for (const funcionario of departamento.funcionarios) {
        totalSalario += funcionario.salario
    }
}
console.log(`Total dos salários: ${totalSalario}`)

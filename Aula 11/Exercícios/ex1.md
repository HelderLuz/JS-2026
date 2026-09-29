# 1. Explique a diferença entre var, let e const.

### var
> Escopo global e função. Permite a redeclaração e reatribuição de valor. Sofre hoisting, com variável inicializada como undefined.

### let
> Escopo de bloco. Não permite redeclaração. Permite reatribuição de valor. Sofre hoisting, mas a variável não é inicializada.

### const
> Escopo de bloco. Não permite redeclaração e reatribuição. Sofre hoisting, mas a variável não é inicializada.

# 2. Explique o conceito de hoisting e como ele afeta var, let e const.

> É o processo de criação das variáveis antes da execução do código. Variáveis declaradas com `var` são inicializadas com undefined. Variáveis declaradas com `const` e `let` não são inicializadas.

# 3. Corrija o código abaixo para seguir as convenções de nomenclatura e criação de variáveis:
```js
const nome = "João";
const idade = 25;
function calcularIdade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
}
```

# 4. Identifique o escopo das variáveis e a saída no código abaixo:
```js
if (true) {
    var a = 1; // escopo global
    let b = 2; // escopo bloco
    const c = 3; // escopo bloco
}
console.log(a); // 1
console.log(b); // erro de referência, variável não definida
console.log(c); // erro de referência, variável não definida
```

# 5. Corrija os problemas de declaração no código:
```js
const nome = "Ana";
const nome2 = "Carlos"; // Problema aqui
const idade = 25;
const idade2 = 30; // Problema aqui

let nome = "Ana";
nome = "Carlos"; // Problema aqui
let idade = 25;
idade = 30; // Problema aqui
```

# 6. Corrija os problemas de estilização no código abaixo:
```js
function calcular(a, b, c) {
    let resultado = a + b * c

    if (resultado>100) {
        console.log("Resultado muito alto")
        return resultado
    } else {
        console.log("Resultado normal")
        return resultado
    }
}
```

# 7. Analise o comportamento do hoisting no código:
```js
console.log(x); // undefined
console.log(y); // variável não inicializada
console.log(z); // variável não inicializada

var x = 1;
let y = 2;
const z = 3;
```

# 8. Identifique qual declaração usar (`var`, `let` ou `const`) em cada caso:
```js
// Configuração que nunca muda
const URL_API = "https://api.exemplo.com";

// Contador em um loop
for (let i = 0; i < 10; i++) {
    // Nome que pode mudar durante execução
    const nomeAtual = obterNome(i);
    
    // Valor calculado que não muda no loop
    const valorFixo = i * 2;
    // ...resto do código
}
```

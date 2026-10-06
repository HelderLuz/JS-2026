```js
let a = 10;     // 1 
let b = 5;      // 2
while (a > 0) { // 3 x
    a = a - 2;  // 4
    b = b + 1;  // 5 x
}
```

| Passo | Linha | a  | b  | a > 0 |         Ação         |
|:-----:|:-----:|:--:|:--:|:-----:|:--------------------:|
|   1   |   3   | 10 | 5  | true  | Inicialização e loop |
|   2   |   5   | 8  | 6  |   -   | a = a- b; b = b + 1  |
|   3   |   3   | 8  | 6  | true  |         loop         |
|   4   |   5   | 6  | 7  |   -   | a = a- b; b = b + 1  |
|   5   |   3   | 6  | 7  | true  |         loop         |
|   6   |   5   | 4  | 8  |   -   | a = a- b; b = b + 1  |
|   7   |   3   | 4  | 8  | true  |         loop         |
|   8   |   5   | 2  | 9  |   -   | a = a- b; b = b + 1  |
|   9   |   3   | 2  | 9  | true  |         loop         |
|  10   |   5   | 0  | 10 |   -   | a = a- b; b = b + 1  |
|  11   |   3   | 0  | 10 | false |         loop         |
|  12   |   6   | 0  | 10 |   -   |         fim          |
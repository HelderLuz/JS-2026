function nomeCompleto(primeiroNome, segundoNome, sobrenome = '') {
    console.log(`Nome completo: ${primeiroNome} ${segundoNome} ${sobrenome}`);
}

nomeCompleto('Mario', 'Sérgio', 'Augusto');

nomeCompleto('Mario', 'Sérgio'); // sem passar o sobrenome

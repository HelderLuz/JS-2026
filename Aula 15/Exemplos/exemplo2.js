function olaMundo(callback) {
  console.log('Olá, mundo!');
  callback();
}

function adeusMundo() {
  console.log('Adeus, mundo!');
}


olaMundo(adeusMundo);
olaMundo(() => console.log('Mundo exterminado 💣') );

const pessoa = [];

pessoa.push("Paulo");
pessoa.push("Yasmim");
pessoa.push("Bianca");
pessoa.push("Rodrigo");
pessoa.push("Bruna");
pessoa.push("Beatriz");
pessoa.push("Vitão");
pessoa.push("Jeff");
pessoa.push("Vitoria");
pessoa.push("Dani");

const resultado = search("Vitão");
console.log(resultado);
function search(nome){
  ind = pessoa.indexOf(nome);
    return pessoa[ind];
}

/*
const nome = template(pessoa[6], pessoa.indexOf("Vitão"));
console.log(nome);


function template (pessoa, posicao) {
  return `Nome da pessoa: ${pessoa} \n
  Posição: ${posicao}`;
}*/
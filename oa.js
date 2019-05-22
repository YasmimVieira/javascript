const listaCostumer = [];

addCustomer("Yasmim", 17, true, "F");
addCustomer("Paulo ", 30, true, "M");
addCustomer("Bianca", 17, true, "F");
addCustomer("Jeff", 17, true, "M");

function addCustomer(nome, age, status, sexo) {
  const pessoa = {};

  pessoa.nome = nome;
  pessoa.age = age;
  pessoa.status = status;
  pessoa.sexo = sexo;

  listaCostumer.push(pessoa);

}
console.log(listaCostumer);

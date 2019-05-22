const idade = []; //array

//o push está adcionando objetos na array
idade.push(10);
idade.push(20);
idade.push(30);
idade.push(40);

//aqui está indicando para achar o valor da posição 3
const resultado = template(idade[3]);
console.log(resultado);

//template string
function template(idade){
  return `Idade: ${idade}`;
}
//o template string precisa ter a mesma quantida de parametros que a const
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// criando clientes
const clienteOne = new Cliente('Ricardo', 88822233309);
const clienteTwo = new Cliente('Alice', 88822233309);

// atribuindo a conta
const contaExemploOne = new ContaCorrente(1001, clienteOne);
const contaExemploTwo = new ContaCorrente(102, clienteTwo);

contaExemploOne.depositar(500); // ou sacar();

// transferência de ExemploOne para ExemploTwo
let valor = 200;
contaExemploOne.transferir(valor, contaExemploTwo);

// log's
console.log(contaExemploOne);
console.log(contaExemploTwo);
console.log(
  `O numero de contas correntes criadas são: ${ContaCorrente.numeroDeContas}`
);

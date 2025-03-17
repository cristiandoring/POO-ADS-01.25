import { Conta } from "./Conta"
import { Funcionario } from "./Funcionario"

let conta1:Conta = new Conta()

conta1.numero = '1424s-5'
conta1.saldo = 1000
conta1.limite = 100

conta1.depositar(600)
console.log('Saldo ' + conta1.saldo )

conta1.sacar(300) ?console.log('Saque realizado'):console.log('Saque não realizado')
conta1.sacar(600) ?console.log('Saque realizado'):console.log('Saque não realizado')

console.log(conta1.consultarSaldo())



let funcionario1:Funcionario = new Funcionario
funcionario1.nome = 'Cristian'
funcionario1.salario = 1000

funcionario1.aumentarSalario(10)


console.log(funcionario1.consultarDados())
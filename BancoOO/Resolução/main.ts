import { Conta } from "./Conta"
import { Funcionario } from "./Funcionario"
import { Gerente } from "./Gerente"
import {Cliente} from './Cliente'
import { Telefonista } from "./Telefonista"
import { Secretarias } from "./Secretarias"

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

let cartaoCredito1:CartaoDeCredito = new CartaoDeCredito()

let cliente1:Cliente = new Cliente()
cliente1.nome = 'Jonas'
cliente1.id = 2

cartaoCredito1.titularCartão = cliente1.nome

conta1.agencia = new Agencia("123")


let gerente1:Gerente = new Gerente()
gerente1.nome = 'Juliano'
gerente1.salario = 10000


let telefonista1: Telefonista = new Telefonista()
telefonista1.codigo = 'hn31*2'

let secretaria1: Secretarias = new Secretarias()
secretaria1.numeroRamal = 1048
secretaria1.nome = 'Maria'
secretaria1.salario = 8000

secretaria1.bonificacao()
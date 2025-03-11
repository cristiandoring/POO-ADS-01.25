class Cliente{
    nome:string
    id:number
}


let cliente1 = new Cliente()

cliente1.nome = "Fulano"
cliente1.id = 1

let cliente2 = new Cliente()
cliente2.nome = "Beltrano"
cliente2.id = 2


class CartaoCredito{
    numeroCartao:number
    dataValidadeCartao:string


}

let cartao1 = new CartaoCredito
cartao1.numeroCartao = 123456
cartao1.dataValidadeCartao = '01/28'


let cartao2 = new CartaoCredito
cartao2.numeroCartao = 654321
cartao2.dataValidadeCartao = '04/32'


class AgenciaBanco{
    numeroAgencia:number
}

let agencia1 = new AgenciaBanco()
agencia1.numeroAgencia = 580

let agencia2 = new AgenciaBanco()
agencia2.numeroAgencia = 274

class Conta{
    numeroConta:number
    saldo:number
    limite:number = 100

}

let conta1 = new Conta()
conta1.numeroConta = 218
conta1.saldo = 0
conta1.limite = 250

let conta2 = new Conta()
conta2.numeroConta = 299
conta2.saldo = 147
conta2.limite = 1500

console.log(conta1.numeroConta)
console.log(conta2.numeroConta)

console.log(conta1.saldo)
console.log(conta2.saldo)

console.log(conta1.limite)
console.log(conta2.limite)

class Conta{

    limite:number = 100

    deposito(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }

        saque(valor: number): void {
            if (valor > 0 && valor <= this.saldo + this.limite) {
                if (valor <= this.saldo) {
                    this.saldo -= valor;
                } else {
                    // Se o valor do saque for maior que o saldo, usar o limite
                    this.limite -= (valor - this.saldo);
                    this.saldo = 0;
                }
                console.log(`Saque de R$ ${valor} realizado com sucesso!`);
            } else {
                console.log("Saldo insuficiente para o saque.");
            }

            extrato(): void {
                console.log(`Extrato da conta ${this.numeroConta}:`);
                console.log(`Saldo: R$ ${this.saldo}`);
                console.log(`Limite: R$ ${this.limite}`);
                console.log(`Saldo disponível para saque: R$ ${this.saldo + this.limite}`);
            }

            saldoDisponivel(): number {
                return this.saldo + this.limite;
            }

}
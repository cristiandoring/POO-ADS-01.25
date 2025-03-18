export class Conta {
    numero: string
    saldo: number
    limite: number
    agencia:Agencia

    //altera o valor do atributo para 100 (deixando fixo)
    constructor(agencia:Agencia) {
        this.limite = 100
        this.agencia = this.agencia
    }


    depositar(valor: number): void {
        this.saldo += valor
    }

    sacar(valor:number):boolean {
        if(this.saldo + this.limite >= valor){
            this.saldo -= valor

            return true
        }

        return false 
    }

    imprimirExtrato() {

    }

    consultarSaldo():number {

        return this.saldo
    }

    transferir(contaDestino:Conta, valor:number):boolean{
        if(this.saldo + this.limite >= valor){
            contaDestino.saldo += valor
            this.saldo -= valor
            return true
        }
        return false
    }
}

export class Conta {
    numero: string
    saldo: number
    limite: number

    //altera o valor do atributo para 100 (deixando fixo)
    constructor() {
        this.limite = 100
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
}

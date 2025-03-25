export class Conta {
    private _numero: string
    public get numero(): string {
        return this._numero
    }
    public set numero(value: string) {
        this._numero = value
    }
    private _saldo: number
    public get saldo(): number {
        return this._saldo
    }
    public set saldo(value: number) {
        this._saldo = value
    }
    private _limite: number
    public get limite(): number {
        return this._limite
    }
    public set limite(value: number) {
        this._limite = value
    }
    private _agencia: Agencia
    public get agencia(): Agencia {
        return this._agencia
    }
    public set agencia(value: Agencia) {
        this._agencia = value
    }

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

import Funcionario from '../Resolução/Funcionario'

export class Gerente extends Funcionario{

    private _nomeUsuario: string

    public get nomeUsuario(): string {
        return this._nomeUsuario
    }
    public set nomeUsuario(value: string) {
        this._nomeUsuario = value
    }

    

    

    private _senha: string

    public get senha(): string {
        return this._senha
    }
    public set senha(value: string) {
        this._senha = value
    }

    bonificacao(valor:number=0.15):void{
        this.salario += this.salario*valor
    }

    constructor(){
        super() //chama o construtor da classe base
    }

    mostrarDados():void {

        super.mostrarDados()
        console.log(this.nomeUsuario)
        console.log(this.senha)
    }
}
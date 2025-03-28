import Funcionario from '../Resolução/Funcionario'

export class Gerente extends Funcionario{

    private _nomeUsuario: string

    public get nomeUsuario(): string {
        return this._nomeUsuario
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

    mostrarDados() {

        console.log(this.nome)
        console.log(this.salario)
        console.log(this.bonificacao())
        console.log(this.nomeUsuario)
    }
}
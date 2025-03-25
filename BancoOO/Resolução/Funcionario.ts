export class Funcionario{
    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    private _salario: number
    public get salario(): number {
        return this._salario
    }
    public set salario(value: number) {
        this._salario = value
    }

    aumentarSalario(valorPercentual:number):void{
        this.salario += (valorPercentual)*this.salario
    }

    consultarDados():string{
        return `Nome: ${this.nome} Salario: ${this.salario}`
    }
}


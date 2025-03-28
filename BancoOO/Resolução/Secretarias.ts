import Funcionario from '../Resolução/Funcionario';

export class Secretarias extends Funcionario {
    private _numeroDocumento: string;

    public get numeroDocumento(): string {
        return this._numeroDocumento;
    }

    public set numeroDocumento(value: string) {
        this._numeroDocumento = value;
    }

    constructor(nome: string, salario: number, numeroDocumento: string) {
        super();
        this.nome = nome;
        this.salario = salario;
        this._numeroDocumento = numeroDocumento;
    }

    bonificacao(valor: number = 0.1): void {
        this.salario += this.salario * valor;
    }
    mostrarDados() {

        console.log(this.nome)
        console.log(this.salario)
        console.log(this.bonificacao())
        console.log(this.numeroDocumento)
    }
}
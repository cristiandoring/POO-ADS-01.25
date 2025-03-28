import Funcionario from '../Resolução/Funcionario';

export class Telefonistas extends Funcionario {
    private _numeroRamal: number;

    public get numeroRamal(): number {
        return this._numeroRamal;
    }

    public set numeroRamal(value: number) {
        this._numeroRamal = value;
    }

    constructor(nome: string, salario: number, numeroRamal: number) {
        super();
        this.nome = nome;
        this.salario = salario;
        this._numeroRamal = numeroRamal;
    }

    bonificacao(valor: number = 0.05): void {
        this.salario += this.salario * valor;
    }

    mostrarDados(){
        console.log(this.nome)
        console.log(this.salario)
        console.log(this.bonificacao())
        console.log(this.numeroRamal)
    }

    
}

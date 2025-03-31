import Funcionario from '../Resolução/Funcionario';

export class Secretarias extends Funcionario {

    private _numeroRamal: number;

    public get numeroRamal(): number {
        return this._numeroRamal;
    }

    public set numeroRamal(value: number) {
        this._numeroRamal = value;
    }


    bonificacao(valor: number = 0.1): void {
        this.salario += this.salario * valor;
    }
    
    constructor(){
        super() //chama o construtor da classe base
    }

    mostrarDados():void {

        super.mostrarDados()
        console.log(this.numeroRamal)

    }
}

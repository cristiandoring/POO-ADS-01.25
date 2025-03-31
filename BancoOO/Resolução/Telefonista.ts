import Funcionario from '../Resolução/Funcionario';

export class Telefonistas extends Funcionario {
    private _numeroDocumento: string;

    public get numeroDocumento(): string {
        return this._numeroDocumento;
    }

    public set numeroDocumento(value: string) {
        this._numeroDocumento = value;
    }

    constructor(){
        super() //chama o construtor da classe base
    }

    mostrarDados():void {

        super.mostrarDados()
        console.log(this.numeroDocumento)
    }
}



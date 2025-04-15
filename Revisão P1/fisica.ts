import { Pessoa } from "./pessoa"; 

export class Fisica extends Pessoa{
    private _rg;

    public get rg_1() {
        return this._rg;
    }
    public set rg_1(value) {
        this._rg = value;
    }
    
    private _cpf;
    public get cpf() {
        return this._cpf;
    }
    public set cpf(value) {
        this._cpf = value;
    }

    private _dataNasc;

    public get dataNasc() {
        return this._dataNasc;
    }
    public set dataNasc(value) {
        this._dataNasc = value;
    }

    constructor(nome: string, telefone: string, email: string, rg: string, cpf: string, dataNasc: string){
        super(nome, telefone, email)
        this._rg = rg
        this._cpf = cpf
        this._dataNasc = dataNasc
    }

    calcularIdade():number{
        return 30
    }


}
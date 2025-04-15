import { Fisica } from "./fisica";
import { Pessoa } from "./pessoa"; 

export class Juridica extends Pessoa{
    private _razaoSocial: string;
    public get razaoSocial(): string {
        return this._razaoSocial;
    }
    public set razaoSocial(value: string) {
        this._razaoSocial = value;
    }

    private _cnpj: string;
    public get cnpj(): string {
        return this._cnpj;
    }
    public set cnpj(value: string) {
        this._cnpj = value;
    }

    private _responsavel: Fisica;
    public get responsavel(): Fisica {
        return this._responsavel;
    }
    public set responsavel(value: Fisica) {
        this._responsavel = value;
    }

    constructor(nome: string, telefone: string, email: string, razaoSocial: string, cnpj: string, responsavel: Fisica){
        super(nome, telefone, email)

        this._razaoSocial = razaoSocial
        this._cnpj = cnpj
    }


    alterarResponsavel(resp:Fisica):void{
        console.log('O  responsável ' + resp)

        let novoResp = resp

        console.log("O responsável da empresa foi alterado de " + this.responsavel + "para " + no)
    }
}

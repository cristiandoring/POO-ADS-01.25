import { Usuario } from "./usuario";
export class Administrador extends Usuario{

    private _nivelAcesso: number;

    public get nivelAcesso(): number {
        return this._nivelAcesso;
    }
    public set nivelAcesso(value: number) {
        this._nivelAcesso = value;
    }


    public verificarLogin(email:string, senha:string):boolean{
        return true
    }

    public recuperarSenha(email: string): void {
        
    }
}
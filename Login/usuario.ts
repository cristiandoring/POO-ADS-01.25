export class Usuario{
    private _nome: string

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    private _email: string

    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }

    private _senha: string

    public get senha(): string {
        return this._senha
    }
    public set senha(value: string) {
        this._senha = value
    }

    constructor(usuario:string, email:string, senha:string){
        this._nome = usuario
        this._email = email
        this._senha = senha

    }

    verificarLogin(email:string, senha:string):boolean{
        return true
    }

    recuperarSenha(email:string):void{

    }

    validarEmail(email:string):boolean{
        return true
    }
}
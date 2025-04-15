export class Pessoa{
    private _nome:string
    private _telefone:string
    private _email:string

    constructor(nome:string, telefone:string, email:string){
        this._nome = nome
        this._telefone = telefone
        this._email = email
    } 
    
    enviarMensagem(mensagem:string):void{
        console.log(mensagem)
    }
}
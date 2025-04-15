import { Usuario } from "./usuario"

export class SistemaLogin{
    private _usuarios:Array<Usuario>

    constructor(){
        this._usuarios = new Array<Usuario>

    }
    criarUsuario(nome:string, email:string, senha:string):void{

        this._usuarios.push(new Usuario(nome, email, senha))
    }

    login(email:String, senha:string):void{
            let usr = this._usuarios.find(u => u.email == email)

            if(usr != undefined){
                if(usr.verificarLogin(email,senha)){
                    console.log('Login realizado com sucesso')
                }
                else{
                    console.log('Erro ao realizar o login')
                }
            }
    }

    recuperarSenha(email:string):void{

    }
}
export class Software{
    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    
    private _qtdMemoria: number
    public get qtdMemoria(): number {
        return this._qtdMemoria
    }
    public set qtdMemoria(value: number) {
        this._qtdMemoria = value
    }

    
    private _qtdHD: number
    public get qtdHD(): number {
        return this._qtdHD
    }
    public set qtdHD(value: number) {
        this._qtdHD = value
    }

    constructor(nome?:string, qtdMemoria?:number, qtdHD?: number){
        if(nome!=null)
            this._nome = nome
        
        if(qtdMemoria != null)
            this.qtdMemoria = qtdMemoria

        if(qtdHD != null)
            this.qtdHD = qtdHD

    }

}
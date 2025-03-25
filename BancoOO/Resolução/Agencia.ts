class Agencia{
    private _numeroAgencia: string
    public get numeroAgencia(): string {
        return this._numeroAgencia
    }

    constructor(num:string){
        this._numeroAgencia = num
    }
}


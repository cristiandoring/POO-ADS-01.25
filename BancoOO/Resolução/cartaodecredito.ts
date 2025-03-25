class CartaoDeCredito{
    private _numeroCartao: string
    public get numeroCartao(): string {
        return this._numeroCartao
    }



    private _dataValidadeCartao: string
    public get dataValidadeCartao(): string {
        return this._dataValidadeCartao
    }

    private _titularCartão: string
    public get titularCartão(): string {
        return this._titularCartão
    }
 
    constructor(num:string, data:string, nome:string){
        this._numeroCartao = num
        this._dataValidadeCartao = data
        this._titularCartão = nome
    }
}

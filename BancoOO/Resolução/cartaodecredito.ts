class CartaoDeCredito{
    numeroCartao:string
    dataValidadeCartao:string
    titularCartão:string
 
    constructor(num:string, data:string, nome:string){
        this.numeroCartao = num
        this.dataValidadeCartao = data
        this.titularCartão = nome
    }
}

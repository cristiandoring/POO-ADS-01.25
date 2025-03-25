import { Tablet } from "./Tablet"

export class Smarthphone extends Tablet{
    
    private _qtdChips: string
    public get qtdChips(): string {
        return this._qtdChips
    }
    public set qtdChips(value: string) {
        this._qtdChips = value
    }
    private _cartaoMemoria: string
    public get cartaoMemoria(): string {
        return this._cartaoMemoria
    }
    public set cartaoMemoria(value: string) {
        this._cartaoMemoria = value
    }
}
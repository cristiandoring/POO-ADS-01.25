import { Computador } from "./computador"
export class Notebook extends Computador{
    private _touchpad: string
    public get touchpad(): string {
        return this._touchpad
    }
    public set touchpad(value: string) {
        this._touchpad = value
    }
    private _placamae: string
    public get placamae(): string {
        return this._placamae
    }
    public set placamae(value: string) {
        this._placamae = value
    }
    private _bateria: string
    public get bateria(): string {
        return this._bateria
    }
    public set bateria(value: string) {
        this._bateria = value
    }
    private _tela: string
    public get tela(): string {
        return this._tela
    }
    public set tela(value: string) {
        this._tela = value
    }

}
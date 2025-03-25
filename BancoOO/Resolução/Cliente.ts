export class Cliente{
    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    private _id: number
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
}

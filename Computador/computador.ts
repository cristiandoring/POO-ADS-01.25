import { Software } from "./Software";

export class Computador{
    private _marca: string;    

    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }

    private _capacidadeRAM: number;
    public get capacidadeRAM(): number {
        return this._capacidadeRAM;
    }
    public set capacidadeRAM(value: number) {
        this._capacidadeRAM = value;
    }

    
    private _capacidadeHD: number;
    public get capacidadeHD(): number {
        return this._capacidadeHD;
    }
    public set capacidadeHD(value: number) {
        this._capacidadeHD = value;
    }

    private _freqProcessador: number;
    public get freqProcessador(): number {
        return this._freqProcessador;
    }
    public set freqProcessador(value: number) {
        this._freqProcessador = value;
    }


    private _clockProcessador: number;
    public get clockProcessador(): number {
        return this._clockProcessador;
    }
    public set clockProcessador(value: number) {
        this._clockProcessador = value;
    }

    
    private _qtdNucleosProcessador: number;
    public get qtdNucleosProcessador(): number {
        return this._qtdNucleosProcessador;
    }
    public set qtdNucleosProcessador(value: number) {
        this._qtdNucleosProcessador = value;
    }

    
    private _placaVideoIntegrada: boolean;

    private _qtdMemoriaPlacaVideo: number;

    private _programasAbertos:string[];
    private _programasAbertosRAM:number[];
    private _softwaresInstalados:Software[]

    constructor(){
        this._programasAbertos = new Array()
        this._programasAbertosRAM = new Array()
        this._softwaresInstalados = new Array()
    }

    instalarSoftware(softw:Software){
        if(softw!= null){
            this._softwaresInstalados.push(softw)
        }

    }

    private carregaBIOS(){

    }

    private carregarSO(so:string){
        console.log(`Carregando S.O. ${so}`)
    }

    ligar(){
        this.carregaBIOS()
        this.carregarSO('Windows 11')
    }

    desligar(){
    
    }

    abrirPrograma(programas:string, memRAM:number):boolean{        
        const index = this._softwaresInstalados.findIndex(p=>p.nome === programas)
        if(this._capacidadeRAM > memRAM && index > 0){
            console.log(`Abrindo Programa ${programas}`)
            this._programasAbertos.push(programas);
            this._programasAbertosRAM.push(memRAM);
            this._capacidadeRAM-=memRAM;
            return true;
        }        
        return false;
    }

    fecharPrograma(programa:string):boolean{        
        const index = this._programasAbertos.findIndex(p=>p === programa);
        if(index != -1){

            this._programasAbertos.splice(index,1);

            delete this._programasAbertos[index];
            this._capacidadeRAM +=this._programasAbertosRAM[index];
            delete this._programasAbertosRAM[index];
            return true;
        }
        return false;
    }
}
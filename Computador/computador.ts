import { Software } from "./Software";

export class Computador{
    marca:string;    
    capacidadeHD:number;
    capacidadeRAM:number;
    freqProcessador:number;
    clockProcessador:number;
    qtdNucleosProcessador: number;
    placaVideoIntegrada: boolean;
    qtdMemoriaPlacaVideo:number;
    programasAbertos:string[];
    programasAbertosRAM:number[];
    softwaresInstalados:Software[]

    constructor(){
        this.programasAbertos = new Array()
        this.programasAbertosRAM = new Array()
        this.softwaresInstalados = new Array()
    }

    instalarSoftware(softw:Software){
        if(softw!= null){
            this.softwaresInstalados.push(softw)
        }

    }

    carregaBIOS(){

    }

    carregarSO(so:string){
        console.log(`Carregando S.O. ${so}`)
    }

    ligar(){

    }

    desligar(){
    
    }

    abrirPrograma(programas:string, memRAM:number):boolean{        
        const index = this.softwaresInstalados.findIndex(p=>p.nome === programas)
        if(this.capacidadeRAM > memRAM && index > 0){
            console.log(`Abrindo Programa ${programas}`)
            this.programasAbertos.push(programas);
            this.programasAbertosRAM.push(memRAM);
            this.capacidadeRAM-=memRAM;
            return true;
        }        
        return false;
    }

    fecharPrograma(programa:string):boolean{        
        const index = this.programasAbertos.findIndex(p=>p === programa);
        if(index != -1){

            this.programasAbertos.splice(index,1);

            delete this.programasAbertos[index];
            this.capacidadeRAM +=this.programasAbertosRAM[index];
            delete this.programasAbertosRAM[index];
            return true;
        }
        return false;
    }
}
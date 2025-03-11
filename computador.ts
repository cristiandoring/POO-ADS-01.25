class Computador{
    //atributos (características)
    marca:string
    capacidadeHD:number
    capacidadeRAM:number
    freqProcessador:number
    clockProcessador: number
    qtdNucleosProcessador: number
    placaVideoIntegrado: boolean
    qtdMemoriaPlacaVideo: number
    programasAbertos:string[]

    //é chamado sempre que se instancia uma objeto
    constructor(){
        this.programasAbertos = new Array()
    }

    //métodos (ação)
    carregarBios(){

    }
    carregarSO(so:string, memRAM:number):boolean{
        
        console.log(`carregando S.O. ${so}`)

        
    }

    ligar(){

    }
    desligar(){

    }

    abrirPrograma(programa:string){

        if(this.capacidadeRAM > memRAM){
            
        console.log(`Abrindo o programa ${programa}`)
            
            this.programasAbertos.push(so)
            return true
        }
        //usamos this quando vamos usar um atributo da própria classe
        this.programasAbertos.push(programa)
    }

    fecharPrograma(programa:string){
        console.log(`Fechando o programa ${programa}`)


    }

}


let computador1 = new Computador()

computador1.marca = 'Dell'
computador1.capacidadeHD = 1000
computador1.capacidadeRAM = 32
computador1.freqProcessador = 3.5
computador1.qtdNucleosProcessador = 8
computador1.placaVideoIntegrado = true


computador1.ligar()
computador1.abrirPrograma('VSCode')


let computador2 = new Computador()

computador2.marca = 'Apple'
computador2.capacidadeHD = 2000
computador2.capacidadeRAM = 16
computador2.freqProcessador = 3.8
computador2.qtdNucleosProcessador = 8
computador2.placaVideoIntegrado = false

computador2.ligar()
computador2.abrirPrograma('Galery')

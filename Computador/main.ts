import { Computador } from "./computador"
import { Software } from "./Software"
let computador1 = new Computador()

computador1.marca = 'Dell'
computador1.capacidadeHD = 1000
computador1.capacidadeRAM = 32
computador1.freqProcessador = 3.5
computador1.qtdNucleosProcessador = 8


computador1.ligar()

let softw1:Software = new Software()

softw1.nome='Windows 11'
softw1.qtdMemoria = 11000
softw1.qtdHD = 2000


let softw2:Software = new Software()

softw2.nome='Libre Office'
softw2.qtdMemoria = 3000
softw2.qtdHD = 700


let softw3:Software = new Software()

softw3.nome='Google Chrome'
softw3.qtdMemoria = 1500
softw3.qtdHD = 2000



computador1.instalarSoftware(softw1)
computador1.instalarSoftware(softw2)
computador1.instalarSoftware(softw3)



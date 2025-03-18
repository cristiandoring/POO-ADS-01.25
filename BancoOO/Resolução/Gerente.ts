export class Gerente{

    nome:string
    salario:number
    aumentarSalarioFixo(){
        this.aumentarSalario(0.1)
    }


    aumentarSalario(valor:number){
        this.salario +=  this.salario*valor/100
    }
}
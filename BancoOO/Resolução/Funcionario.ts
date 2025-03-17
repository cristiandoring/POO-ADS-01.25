export class Funcionario{
    nome:string
    salario:number

    aumentarSalario(valorPercentual:number):void{
        this.salario += (valorPercentual)*this.salario
    }

    consultarDados():string{
        return `Nome: ${this.nome} Salario: ${this.salario}`
    }
}


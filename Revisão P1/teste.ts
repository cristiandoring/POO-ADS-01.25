import { Fisica } from "./fisica";
import { Juridica } from "./juridica";

class Teste {
    public static main(): void {

        const fisica = new Fisica(
            "João Silva",
            "123456789",
            "joao@email.com",
            "1234567",
            "123.456.789-00",
            "15/04/1990"
        );

        const juridica = new Juridica(
            "Empresa X",
            "987654321",
            "empresa@email.com",
            "Empresa X Ltda",
            "12.345.678/0001-90",
            fisica 
        );

        console.log(`Responsável inicial: ${juridica.responsavel.rg}`);

        const novoResponsavel = new Fisica(
            "Maria Oliveira",
            "987654321",
            "maria@email.com",
            "7654321",
            "987.654.321-00",
            "20/05/1985"
        );

        juridica.alterarResponsavel(novoResponsavel); 
    }
}

Teste.main();
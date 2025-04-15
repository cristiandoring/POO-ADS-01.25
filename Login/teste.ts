import { SistemaLogin } from "./sistemaLogin";

let sislogin:SistemaLogin = new SistemaLogin

sislogin.criarUsuario('teste', 'teste@teste.com', '12345')
sislogin.login('teste@teste.com','12345')
sislogin.login('tes@teste.com','12345')
sislogin.login('teste@teste.com','aaaa')


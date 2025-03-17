"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    //altera o valor do atributo para 100 (deixando fixo)
    function Conta() {
        this.limite = 100;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    Conta.prototype.imprimirExtrato = function () {
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
exports.Conta = Conta;

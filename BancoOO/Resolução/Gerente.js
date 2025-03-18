"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Gerente = /** @class */ (function () {
    function Gerente() {
    }
    Gerente.prototype.aumentarSalarioFixo = function () {
        return salario += salario * 0.1;
    };
    Gerente.prototype.aumentarSalario = function (valor) {
        return salario += salario * valor / 100;
    };
    return Gerente;
}());
exports.Gerente = Gerente;

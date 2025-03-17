"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.aumentarSalario = function (valorPercentual) {
        this.salario += (valorPercentual) * this.salario;
    };
    Funcionario.prototype.consultarDados = function () {
        return "Nome: ".concat(this.nome, " Salario: ").concat(this.salario);
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;

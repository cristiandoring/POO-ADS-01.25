var Computador = /** @class */ (function () {
    function Computador() {
        this.programasAbertos = new Array();
    }
    //métodos (ação)
    Computador.prototype.carregarBios = function () {
    };
    Computador.prototype.carregarSO = function (so) {
        console.log("carregando S.O. ".concat(so));
    };
    Computador.prototype.ligar = function () {
    };
    Computador.prototype.desligar = function () {
    };
    Computador.prototype.abrirPrograma = function (programa) {
        console.log("Abrindo o programa ".concat(programa));
        //usamos this quando vamos usar um atributo da própria classe
        this.programasAbertos.push(programa);
    };
    Computador.prototype.fecharPrograma = function (programa) {
        console.log("Fechando o programa ".concat(programa));
    };
    return Computador;
}());
var computador1 = new Computador();
computador1.marca = 'Dell';
computador1.capacidadeHD = 1000;
computador1.capacidadeRAM = 32;
computador1.freqProcessador = 3.5;
computador1.qtdNucleosProcessador = 8;
computador1.placaVideoIntegrado = true;
computador1.ligar();
computador1.abrirPrograma('VSCode');
var computador2 = new Computador();
computador2.marca = 'Apple';
computador2.capacidadeHD = 2000;
computador2.capacidadeRAM = 16;
computador2.freqProcessador = 3.8;
computador2.qtdNucleosProcessador = 8;
computador2.placaVideoIntegrado = false;
computador2.ligar();
computador2.abrirPrograma('Galery');

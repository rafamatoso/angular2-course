var minhaVar = "minha variavel";
function minhaFuncao(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
// Função Exemplo 1
numeros.map(function (valor) {
    return valor * 2;
});
// ES2015 -> Função Exemplo 2, após transpilação, é igual a Função 1
numeros.map(function (valor) { return valor * 2; });
var str = PI + " \u00E9 PI";
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = "oi";
if (typeof n1 === "string") {
    n1 = "tipagem funcionou!";
    console.log(n1);
}
else {
    n1 = 4;
    console.log("tipagem não funcionou");
}

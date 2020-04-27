var minhaVar = "minha variavel";

function minhaFuncao(x, y) {
  return x + y;
}

let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];

// Função Exemplo 1
numeros.map(function (valor) {
  return valor * 2;
});

// ES2015 -> Função Exemplo 2, após transpilação, é igual a Função 1
numeros.map((valor) => valor * 2);

const str = `${PI} é PI`;

class Matematica {
  soma(x: any, y: any) {
    return x + y;
  }
}

var n1: string = "oi";
if (typeof n1 === "string") {
  n1 = "tipagem funcionou!";
  console.log(n1);
} else {
  n1 = 4;
  console.log("tipagem não funcionou");
}

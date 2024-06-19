const unidades = document.querySelectorAll('#unidades__select');
const inputValor = document.getElementById('conversor__valor');
const campoResultado = document.querySelector('.campo__resultado');

let opcion = 0;
let valor = 0;
let resultado = 0;

unidades.forEach(un => {
  un.addEventListener('change', function () {
    opcion = +un.value;
    conversion();
  });
});

inputValor.addEventListener('input', function (e) {
  valor = +e.currentTarget.value;
  conversion();
});

function conversion() {
  switch (opcion) {
    case 1:
      resultado = (valor * 9) / 5 + 32;
      break;

    case 2:
      resultado = valor * 3.28084;
      break;

    case 3:
      resultado = valor * 2.20462;
      break;

    default:
      return;
  }
  mostrarConv(resultado);
}

const mostrarConv = function (resultado) {
  campoResultado.textContent = resultado;
};

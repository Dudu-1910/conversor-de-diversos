const converterMoeda = () => {
  let valorMoeda = parseFloat(document.querySelector('#valor').value);
  let valorEmReal = valorMoeda * document.querySelector('#moedas').value;

  let valorElementoConvertido = document.querySelector('#valorConvertido');
  let valorConvertido = `O valor em real é R$ ${valorEmReal}`;
  valorElementoConvertido.innerHTML = valorConvertido;
}

const converterTemperatura = () => {
  let elementoTemperaturaValor = document.querySelector("#temperatura").value;
  let valorNumerico = parseFloat(elementoTemperaturaValor);

  let valorGrausCelsius = eval(document.querySelector("#temperaturas").value.replace("dinamico", valorNumerico));

  let elementoValorConvertido = document.querySelector("#valorTemperatura");
  let valorConvertido = "O resultado em Celsius é " + valorGrausCelsius.toFixed(1);
  elementoValorConvertido.innerHTML = valorConvertido;
}


function converterKm() {
  let valorElementoKm = document.getElementById('quilometro');
  let valor = valorElementoKm.value;
  let valorKmNumerico = parseFloat(valor);

  let valorAnoLuz = valorKmNumerico * 1.057e-13;

  let elementoKmConvertido = document.getElementById('valorAnoLuz');
  let kmConvertido = 'O resultado em Ano-luz é ' + valorAnoLuz;
  elementoKmConvertido.innerHTML = kmConvertido;
}

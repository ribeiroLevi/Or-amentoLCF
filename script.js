let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let peso = document.querySelector('#peso');
  let tempo = document.querySelector('#tempo');
  let tipo = [
    document.querySelector('#plaRadioType'),
    document.querySelector('#absRadioType'),
    document.querySelector('#petgRadioType'),
  ];

  let erro = [
    document.querySelector('#plaRadioError'),
    document.querySelector('#absRadioError'),
    document.querySelector('#petgRadioError'),
  ];

  let comp = [
    document.querySelector('#baixa'),
    document.querySelector('#media'),
    document.querySelector('#alta'),
  ];

  let tipoMarcado, erroMarcado, compMarcado, tipoPorce, erroPorce, compPorce;

  if (peso.valeu == 0 || tempo.value == 0) {
    alert('Não podem existir campos vazios');
  }

  for (let i = 0; i < tipo.length; i++) {
    if (tipo[i].checked == true) {
      tipoMarcado = i;
    }
  }
  for (let i = 0; i < erro.length; i++) {
    if (erro[i].checked == true) {
      erroMarcado = i;
    }
  }
  for (let i = 0; i < comp.length; i++) {
    if (comp[i].checked == true) {
      compMarcado = i;
    }
  }

  switch (compMarcado) {
    case 0:
      compPorce = 0.05;
      break;
    case 1:
      compPorce = 0.06;
      break;
    case 2:
      compPorce = 0.07;
  }

  switch (tipoMarcado) {
    case 0:
      tipoPorce = 0.02;
      break;
    case 1:
      tipoPorce = 0.03;
      break;
    case 2:
      tipoPorce = 0.04;
  }
  console.log(tipoMarcado, erroMarcado, compMarcado);
  console.log(compPorce, tipoPorce);
  let total =
    peso.value * 0.1 +
    peso.value * tipoPorce +
    tempo.value * 0.05 +
    peso.value * compPorce;

  /*console.log(
    peso.value * 0.1,
    peso.value * tipoPorce,
    tempo.value * 0.05,
    peso.value * compPorce
  );
  */

  alert(`Valor final: ${total}`);
});

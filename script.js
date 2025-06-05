const resVerificar = document.getElementById('resVerificar');
const imagem = document.getElementById('imagem');

const datas = ['05/09/2011', '06/09/2011', '07/09/2011', '08/09/2011', '09/09/2011', '10/09/2011',
    '11/09/2011', '12/09/2011', '13/09/2011', '14/09/2011', '15/09/2011'];

const mensagens = [
  "Aproximando da cota de alerta<strong(6,22m)</strong>. <strong>FIQUE ALERTA</strong>!!!",
  "Fortes chuvas, <strong>aproximando mais da cota de alerta(7,02m)</strong>",
  "Cota de alerta atingida<strong>(8,18m)</strong>. <strong>Prepara-se para uma possível enchente!</strong>",
  "Subiu mais<strong>(11,35m)</strong>, <strong>PEGUE SEUS DOCUMENTOS E BENS IMPORTANTES E VÁ PARA UM LUGAR ALTO</strong>",
  "Pico histórico de enchente<strong>(12,58m)</strong>. <strong>Espere até que o nível da água desça mais</strong>",
  "O nivel caiu um pouco<strong>(10,84m)</strong>, mas <strong>CONTINUE ESPERANDO</strong>!",
  "Ainda acima da cota de alerta<strong>(8,37m)</strong>, mas teve uma queda significativa. <strong>CONTINUE ESPERANDO</strong>!",
  "Vai demorar, mas <strong>retornando ao normal(6,46m)</strong>!!",
  "Solo ainda encharcado, mas controlado<strong>(5,45m)</strong>. Se você perceeber que já da para passar pelas ruas, <strong>VOLTE PARA SUA CASA</strong>",
  "<strong>Retorno à normalidade(4,84m)</strong>. Se sua casa foi atingida, peça ajuda e comece a arrumá-la",
  "<strong>Estabilizado(4,12m)</strong>!!!"
];
function verificar(){
    resVerificar.innerHTML = '';
    for(let i = 0; i < 11; i++){
        resVerificar.innerHTML += `<p>Dia ${datas[i]}: ${mensagens[i]}</p>`;
        resVerificar.className = 'respostas'
    }
    imagem.innerHTML = `<img src="gs_calculo.png" alt="Grafico">`;
}

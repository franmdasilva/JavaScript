const canvas1 = document.getElementsByClassName('canvas1')[0];

const ctx1 = canvas1.getContext('2d'); //método usado para definir dimensões da região onde figura será renderizada

ctx1.fillStyle = 'red'; // método de preenchimento

ctx1.fillRect(0, 0, 200, 100); // retângulo preenchido com (x starting point, y starting point, width, height)

ctx1.clearRect(20, 20, 160, 60); // faz área retângular vazia

ctx1.strokeRect(30, 30, 140, 40); // retângulo vazio

const canvas2 = document.getElementsByClassName('canvas2')[0];

const ctx2 = canvas2.getContext('2d');

ctx2.arc(60, 60, 50, 0, 2 * Math.PI, true); // arco com arc(x, y, radius, startAngle, endAngle, counterclockwise);

ctx2.fill();

function desenhar() {
    var canvas3 = document.getElementsByClassName('canvas3')[0];
    var ctx3 = canvas3.getContext('2d');
    ctx3.font = '50px vedana';
    ctx3.fillText('Olá mundo!', 10, 50); // desenha texto preenchido 
}

desenhar();

function desenhar2() {
    var canvas4 = document.getElementsByClassName('canvas4')[0];
    var ctx4 = canvas4.getContext('2d');
    ctx4.font = '50px vedana';
    ctx4.strokeText('Olá mundo!', 10, 50); // desenha texto contornado
}

desenhar2();

function caminho() {
    var canvas5 = document.getElementsByClassName('canvas5')[0]; 
    var ctx5 = canvas5.getContext('2d');
        
    ctx5.beginPath();
    ctx5.moveTo(10, 10);
    ctx5.lineTo(100, 50);
    ctx5.arc(100, 100, 50, 3 * Math.PI / 2, true);
    ctx5.lineTo(100, 50);
    ctx5.lineTo(10, 100);
    ctx5.fill();
}

caminho();
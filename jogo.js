//Variáveis gerais
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

let contador = 0;

var GerarTempo = 1500;

var vjNivel = window.location.search;
vjNivel = vjNivel.replace('?','');
if(vjNivel =='Facil'){
    var GerarTempo = 1500;
    var tempo = 15;
}else if(vjNivel == 'Medio'){
    var GerarTempo = 1000;
    var tempo = 20;
}else if(vjNivel == 'Dificil'){
    var GerarTempo = 750;
    var tempo = 30;
}

//Função para que os elementos não apareça fora da tela, trazendo a responsividade, já que eles só podem surgir no espaço determinado
function Responsividade(){

altura = window.innerHeight;
largura = window.innerWidth;

}
Responsividade();

// o innerHTML pega tudo que está entre as tags, que no caso, será tudo entre a abertura e fechamento do "spanCronometro"
var VjCronometro = setInterval(function(){
    tempo -= 1 
if(tempo < 0){

    clearInterval(VjCronometro);
    clearInterval(GerarBola);
    window.location.href = "vitoria.html";
    
    }else{
        document.getElementById('meuCronometro').innerHTML = tempo
    }
},1000)
function posRandom(){

//Remover o elemento "Bola"
if(document.getElementById('TempoBola')){
   document.getElementById('TempoBola').remove();

   //Troca a imagem do coração cheio pelo vazio ao não clicar na bola, ao passar das 3 vidas redireciona para a tela de derrota
   if(vidas > 3){
    window.location.href = "finaljogo.html";
   }
   else{
    document.getElementById("v" + vidas).src="img/coracao_vazio.png";
    vidas++;
   }
}

//Randomizando a forma de aparecer os elementos
var posX = Math.floor(Math.random()*largura)-90;
var posY = Math.floor(Math.random()*altura)-90;

posX = posX < 0?0: posX;
posY = posY < 0?0: posY;
console.log(posX, posY)

var Bola = document.createElement('img');
Bola.src="img/bola.png";
document.body.appendChild(Bola);
Bola.className = sizeBola() + ' ' + ladoAleatorio();
Bola.style.left = posX + 'px';
Bola.style.top = posY + 'px';
Bola.style.position = 'absolute';
Bola.id = 'TempoBola';

const displayContador = document.getElementById('contador');

Bola.onclick =function(){
    // This é um operador que faz referência ao elemento HTMl que vai executar a função, que no caso é a remoção da bola 
    this.remove();
    contador++;
    displayContador.textContent = contador;
}
}


// Função para randomizar o tamanho de exibição da bola, que foram customizadas com CSS
function sizeBola(){
    var classe = Math.floor(Math.random() * 3);
    switch (classe){
        case 0:
            return 'ball01'
        case 1:
            return 'ball02'
        case 2:
            return 'ball03'
    }
}

// Função para randomizar o lado exibição da bola
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);
    switch (classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
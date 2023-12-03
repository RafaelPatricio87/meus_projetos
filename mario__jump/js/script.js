
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score');

let score = 0;

const jump = () => {
  mario.classList.add('jump')
  
 setTimeout(() => {
  mario.classList.remove('jump') 
 },500)  
}


const updateScore = () => {
  score += 1;
  scoreDisplay.textContent = `Pontuação: ${score}`;
};
const loop = setInterval(() => {
  
  const pipePosition =  pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
    
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'images/game-over.png'
    mario.style.width = '75px'
    mario.style.margin = '50px'

    clearInterval(loop)
  }else if (pipePosition < -50) {
    // O cano ultrapassou o Mario com sucesso
    updateScore();
       // Reinicia a animação do cano
    const newPipePosition = window.innerWidth; // Posiciona o cano fora da tela à direita
    pipe.style.left = `${newPipePosition}px`;
  } else {
    pipe.style.left = `${pipePosition - 5}px`; // Move o cano para a esquerda
  }
  
})



document.addEventListener('keydown', jump);
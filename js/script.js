const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = ()=> {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);

}
const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    // o "+" na frente de uma string converte ela para números  
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
 
    if(pipePosition <= 125 && pipePosition > 0 && marioPosition < 80){
        //Setando o Endgame se mario bater no pipe
        pipe.style.animation = 'none';
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left =`${marioPosition}px`;

        mario.src = './img/gameOver.png'

        clearInterval(loop);
    }

}, 10)

document.addEventListener("keydown",jump)  
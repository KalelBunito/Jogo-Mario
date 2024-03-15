// tarefas a serem exevutadas: colisao, tecla de pulo, botao de reiniciar.

const dino = document.querySelector(".dino")
const cloud = document.querySelector(".cloud")
const pipe = document.querySelector(".pipe")
const game_over = document.querySelector(".game-over")
const restart = document.querySelector(".restart")
function teclaPulo(){

    dino.classList.add('jump')
    console.log("Tô FUNCIONANDO")

    setTimeout(()=>{
        dino.classList.remove('jump')
        console.log("Tô SENDO REMOVIDA")
    }, 2000)
}
document.addEventListener('keydown', teclaPulo)
document.addEventListener('touchstart', teclaPulo)
// adicionar eventos para tecla: "KeyDown"
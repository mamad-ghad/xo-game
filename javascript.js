let blocks = document.querySelectorAll(".block")
let valueBox = [0,1,2,3,4,5,6,7,8]
let turn = 'X'
let turnBox = document.querySelector("#turn-box span")
let winner = document.querySelector(".winner")
let ended=false

blocks.forEach((block,index)=>{
    block.addEventListener("click",(e)=>{
        if (ended ==false && valueBox[index]!=='X' && valueBox[index]!=='O') {
            block.innerText = turn
            valueBox[index] = turn
            checkForWin(turn)
            turn = turn === 'X' ? 'O' : 'X'
            turnBox.innerText = turn
        }
    })
})


function checkForWin() {
    if (
        (valueBox[0] === valueBox[1] && valueBox[1] ===valueBox[2])||
        (valueBox[3] === valueBox[4] && valueBox[4] ===valueBox[5])||
        (valueBox[6] === valueBox[7] && valueBox[7] ===valueBox[8])||
        (valueBox[0] === valueBox[3] && valueBox[3] ===valueBox[6])||
        (valueBox[1] === valueBox[4] && valueBox[4] ===valueBox[7])||
        (valueBox[2] === valueBox[5] && valueBox[5] ===valueBox[8])||
        (valueBox[0] === valueBox[4] && valueBox[4] ===valueBox[8])||
        (valueBox[2] === valueBox[4] && valueBox[4] ===valueBox[6])
    ) {
        winner.innerText = `${turn} win`
        ended=true
    }
}

function restart() {
    valueBox = [0,1,2,3,4,5,6,7,8]
    blocks.forEach(block=>{
        block.innerText = ""
        turn = 'X'
        winner.innerText = ""
    })
}
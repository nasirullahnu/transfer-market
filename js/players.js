// document.getElementById('select-buttons').addEventListener('click', function (event) {
//     const selectButons = event.target.innerText;
//     const targetPlayer = document.getElementsByTagName('h3');
//     const targetPlayerName = targetPlayer.innerText;
//     console.log(targetPlayerName);
//     console.log(selectButons);

// })


function getPlayerName(playerName){
    const yourComment = document.getElementById(playerName);
    const inputText = yourComment.innerText;

    const commentContainer = document.getElementById('sellected-players');
    const para = document.createElement('p');
    para.innerText = inputText;
    commentContainer.appendChild(para);

}

document.getElementById('btn-messi').addEventListener('click', function () {
    getPlayerName('player-1');
})


document.getElementById('btn-ronaldo').addEventListener('click',function(){
    getPlayerName('player-2');
    
})


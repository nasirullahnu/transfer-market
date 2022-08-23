// player select button common function 

function getPlayerName(playerName) {
    const selectPlayerById = document.getElementById(playerName);
    const selectedPlayer = selectPlayerById.innerText;

    const listItems = document.getElementById('sellected-players');
    const li = document.createElement('li');
    li.innerText = selectedPlayer;

    const playersLength = document.querySelectorAll('#sellected-players li')
    const playerNumbers =  playersLength.length;
    const playerNumber = playerNumbers;

    if(playerNumber <= 4){
        listItems.appendChild(li);
    }
    else{
        alert('you can not select more than 5 players');
    }

    
}

document.getElementById('btn-messi').addEventListener('click', function () {
    getPlayerName('player-1')
})
document.getElementById('btn-ronaldo').addEventListener('click', function () {
    getPlayerName('player-2');
})
document.getElementById('btn-neymar').addEventListener('click', function () {
    getPlayerName('player-3');
})
document.getElementById('btn-maria').addEventListener('click', function () {
    getPlayerName('player-4');
})
document.getElementById('btn-alves').addEventListener('click', function () {
    getPlayerName('player-5');
})
document.getElementById('btn-kaka').addEventListener('click', function () {
    getPlayerName('player-6');
})



























// player select button common function 

// function getPlayerName(playerName) {
//     const selectPlayerById = document.getElementById(playerName);
//     const selectedPlayer = selectPlayerById.innerText;

//     const listItems = document.getElementById('sellected-players');
//     const li = document.createElement('li');
//     li.innerText = selectedPlayer;
//     listItems.appendChild(li);
// }
// document.getElementById('btn-messi').addEventListener('click', function () {
//     getPlayerName('player-1')
// })
// document.getElementById('btn-ronaldo').addEventListener('click', function () {
//     getPlayerName('player-2');
// })
// document.getElementById('btn-neymar').addEventListener('click', function () {
//     getPlayerName('player-3');
// })
// document.getElementById('btn-maria').addEventListener('click', function () {
//     getPlayerName('player-4');
// })
// document.getElementById('btn-alves').addEventListener('click', function () {
//     getPlayerName('player-5');
// })
// document.getElementById('btn-kaka').addEventListener('click', function () {
//     getPlayerName('player-6');
// })
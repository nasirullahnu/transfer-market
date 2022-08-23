// document.getElementById('select-buttons').addEventListener('click', function (event) {
//     const selectButons = event.target.innerText;
//     const targetPlayer = document.getElementsByTagName('h3');
//     const targetPlayerName = targetPlayer.innerText;
//     console.log(targetPlayerName);
//     console.log(selectButons);

// })

function serials() {
    var items = ['1.', '2.', '3.', "4.", "5."];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        console.log(item);
        return item
    }
}



function getPlayerName(playerName) {
    const yourComment = document.getElementById(playerName);
    const inputText = yourComment.innerText;

    const commentContainer = document.getElementById('sellected-players');
    const para = document.createElement('p');
    para.innerText = serials() + '.' + inputText;
    commentContainer.appendChild(para);
}

document.getElementById('btn-messi').addEventListener('click', function () {
    getPlayerName('player-1');
})
document.getElementById('btn-ronaldo').addEventListener('click', function () {
    getPlayerName('player-2');
})
document.getElementById('btn-neymar').addEventListener('click', function(){
    getPlayerName('player-3');
})
document.getElementById('btn-maria').addEventListener('click', function(){
    getPlayerName('player-4');
})
document.getElementById('btn-alves').addEventListener('click', function(){
    getPlayerName('player-5');
})
document.getElementById('btn-kaka').addEventListener('click', function(){
    getPlayerName('player-6');
})



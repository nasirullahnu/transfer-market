// thhis is a comomon function for get input field value by id 
function getInputFieldValueById(inputFieldId){
    const ehee = document.getElementById(inputFieldId);
    const eheeValue = ehee.value;
    return eheeValue;
}

document.getElementById('calculate-players').addEventListener('click', function () {
    const playersLength = document.querySelectorAll('#sellected-players li')
    const playerNumbers =  playersLength.length;
    const playerNumber = playerNumbers;
    
    const perPlayerBudget = getInputFieldValueById('per-player');

    const totalBudget = playerNumber * perPlayerBudget;

    const totalCostShowField = document.getElementById('player-total')
    if(playerNumber === 0){
        alert ('কমপক্ষে একজন খেলোয়ার নির্বাচন করুন');
    }
    else if(totalBudget <= 1000 ){
        alert('you have to spent more then 1000 Taka for buy players')
    }
    totalCostShowField.innerText = totalBudget;
})



// thhis is a comomon function for get input field value by id 
function getInputFieldValueById(inputFieldId){
    const ehee = document.getElementById(inputFieldId);
    const eheeValue = ehee.value;
    return eheeValue;
}

// players calculate button 
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
    else if(perPlayerBudget <= 0 ){
        alert('please select any player amount')
    }
    totalCostShowField.innerText = totalBudget;
})

// total calculate button 
document.getElementById('calculate-total').addEventListener('click', function(){
    const managerCost = getInputFieldValueById('manager');
    const managerCostFinal = parseFloat(managerCost);

    const coachCost = getInputFieldValueById('coach');
    const coachCostFinal = parseFloat(coachCost);

    const playerCost = document.getElementById('player-total');
    const playerCostAll = playerCost.innerText;
    const playerCostAllFinal = parseFloat(playerCostAll)
    
    const finalCost = managerCostFinal + coachCostFinal + playerCostAllFinal;
    
    const totalBudget = document.getElementById('total-budget')
    if(managerCost <= 0){
        alert('enter manager amount')
        return;
    }
    else if(coachCost <= 0 ){
        alert('enter coach amount')
        return;
    }
    totalBudget.innerText = finalCost;

    
})
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE=20;

let chosenMaxLife = 100;
let currentMonsterHeath = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);
function endRound(){
   
const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
currentPlayerHealth -= playerDamage;
if (currentMonsterHeath <= 0 && currentPlayerHealth>0) {
    alert('You Won!');
} else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
    alert('You Lost!');
}else if(currentMonsterHeath<=0 && currentPlayerHealth<=0){
    alert('You Havde A Draw');
}
}

function attackMonster(mode){
    let maxDamage;
if(mode==='ATTACK'){
    maxDamage= ATTACK_VALUE;
}else if(mode==='STRONG_ATTACK'){
    maxDamage= STRONG_ATTACK_VALUE;
}
const damage = dealMonsterDamage(maxDamage);
currentMonsterHeath -= damage;
endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler(){
   attackMonster('STRONG_ATTACK');
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife-HEAL_VALUE){
        alert("You can't heal more than your initial health");
        healValue= chosenMaxLife-currentPlayerHealth;
    } else{
healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentplayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
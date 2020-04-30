var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board[16]);

const player1_Button = document.getElementById("player-1");
const player2_Button = document.getElementById("player-2");

console.log(player1_Button);
console.log(player2_Button);


player1_Button.addEventListener("click", rollDice_1);
player2_Button.addEventListener("click", rollDice_2);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["FacePrep", 0, 1000];


//player--1
function rollDice_1() {
    console.log("player1 position before rolls the dice", player1[1]);
    position = Math.floor(Math.random() * 6) + 1;
    console.log("player1 rolls the dice ,dice value", position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old, currentPos) {
    var newPosition = old + currentPos;
    player1[1] = newPosition
    console.log("player1 updated position is", player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {

    if (p1 < board.length) {
        var updateMoney = 0;
        updateMoney = player1[2] - board[p1 - 1];
        console.log("updated money on player_1 is", updateMoney);
    } else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
        console.log("updated money on player_1 is", updateMoney);

    }
}

//player--2
function rollDice_2() {
    console.log("player2 position before rolls the dice", player2[1]);
    position = Math.floor(Math.random() * 6) + 1;
    console.log("player2 rolls the dice ,dice value", position);
    changePosition_2(player2[1], position);
}

function changePosition_2(old, currentPos) {
    var newPosition = old + currentPos;
    player2[1] = newPosition
    console.log("player1 updated position is", player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_2(p2) {
    if (p2 < board.length) {
        var updateMoney = 0;
        updateMoney = player2[2] - board[p2 - 1];
        console.log("updated money on player_2 is", updateMoney);
    } else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
        console.log("updated money on player_2 is", updateMoney);
    }
}



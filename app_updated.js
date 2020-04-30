var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

const player1_Button = document.getElementById("player-1");
const player2_Button = document.getElementById("player-2");


class Player {

    constructor(name, position, money) {
        this.name = name;
        this.position = position;
        this.money = money;
    }

    roll_Dice() {
        console.log("Present Position:-" + this.name + this.position);
        let randomPositionValue = Math.floor(Math.random() * 6) + 1;
        console.log("Generated Position:-" + this.name + this.randomPositionValue);
        this.changePosition(randomPositionValue);
    }

    changePosition(generatedPositionValueFromDice) {
        this.position += generatedPositionValueFromDice;
        console.log("updated Position:-" + this.name + this.position);
        this.updateMoney(this.position);
    }

    updateMoney(position) {

        if (position < board.length)
            this.money -= board[this.position - 1];
        else {
            this.position %= 15;
            this.money -= board[this.position - 1];
        }
        console.log("updated Money:-" + this.money);
        console.log(playerOne);
        console.log(playerTwo);
    }



}

let playerOne = new Player("FacePre", 0, 1000);
let playerTwo = new Player("Prograd", 0, 1000);

player1_Button.addEventListener("click", function () { playerOne.roll_Dice(); }, false);
player2_Button.addEventListener("click", function () { playerTwo.roll_Dice(); }, false);

"use strict";
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this._coins = 0;
        this.items = [];
    }
    SlotMachine.prototype.play = function () {
        this._coins += 1;
        this.items[0] = this.randomBool();
        this.items[1] = this.randomBool();
        this.items[2] = this.randomBool();
    };
    Object.defineProperty(SlotMachine.prototype, "balance", {
        get: function () {
            return this._coins;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlotMachine.prototype, "resetCoins", {
        set: function (value) {
            this._coins = value;
        },
        enumerable: true,
        configurable: true
    });
    SlotMachine.prototype.randomBool = function () {
        return Boolean(Math.round(Math.random()));
    };
    return SlotMachine;
}());
var machine = new SlotMachine();
var $div1 = document.getElementById('item1');
var $div2 = document.getElementById('item2');
var $div3 = document.getElementById('item3');
var $message = document.getElementById('message');
var $coins = document.getElementById('coins');
$coins.innerText = machine.balance.toString() + " Coins";
$message.innerText = "Waiting for players";
var showResult = function (machine) {
    $div1.innerHTML = machine.items[0] ? '🍏' : '🍌';
    $div2.innerHTML = machine.items[1] ? '🍏' : '🍌';
    $div3.innerHTML = machine.items[2] ? '🍏' : '🍌';
    if (machine.items[0] === machine.items[1] && machine.items[0] === machine.items[2]) {
        $message.innerText = "Congratulations!!!. You won " + machine.balance + " coins!!";
        machine.resetCoins = 0;
    }
    else {
        $message.innerText = "Good luck next time!";
    }
    ;
    $coins.innerText = machine.balance.toString() + " Coins";
};
document.getElementById('throw').addEventListener('click', function () {
    machine.play();
    showResult(machine);
});

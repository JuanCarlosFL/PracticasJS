class SlotMachine {

    private _coins = 0;
    items: Array<boolean> = [];

    play(): void{
        this._coins += 1;
        this.items[0] = this.randomBool();
        this.items[1] = this.randomBool();
        this.items[2] = this.randomBool();
    }

    get balance(): number {
        return this._coins;
    }

    set resetCoins(value: number){
        this._coins = value;
    }

    randomBool(): boolean {
        return Boolean(Math.round(Math.random()));
    }

}

const machine = new SlotMachine();
  
let $div1 = document.getElementById('item1');
let $div2 = document.getElementById('item2');
let $div3 = document.getElementById('item3');
let $message = document.getElementById('message');
let $coins = document.getElementById('coins');

$coins!.innerText = `${machine.balance.toString()} Coins`;
$message!.innerText = `Waiting for players`;

const showResult = (machine: SlotMachine): void => {
 
    $div1!.innerHTML = machine.items[0] ? '🍏' : '🍌';
    $div2!.innerHTML = machine.items[1] ? '🍏' : '🍌';
    $div3!.innerHTML = machine.items[2] ? '🍏' : '🍌';

    if (machine.items[0] === machine.items[1] && machine.items[0] === machine.items[2]){
        $message!.innerText = `Congratulations!!!. You won ${machine.balance} coins!!`;
        machine.resetCoins = 0;
    }else {
        $message!.innerText = `Good luck next time!`;
    };

    $coins!.innerText = `${machine.balance.toString()} Coins`

};

document.getElementById('throw').addEventListener('click', () =>{
    machine.play();
    showResult(machine);
});

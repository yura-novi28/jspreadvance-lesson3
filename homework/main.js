function CoffeeMake(){};
CoffeeMake.prototype.on = function(){
    console.log('launch successful!');
}
CoffeeMake.prototype.off = function(){
    console.log('turning off!');
}

function Drip(){
    CoffeeMake.call(this);
}
Drip.prototype = Object.create(CoffeeMake.prototype);
Drip.prototype.constructor = Drip;
Drip.prototype.dripMode = function(){
    console.log('drip mode successful');
}

function Portafilter(){
    CoffeeMake.call(this);
}
Portafilter.prototype = Object.create(CoffeeMake.prototype);
Portafilter.prototype.constructor = Portafilter;
Portafilter.prototype.portafilterMode = function(){
    console.log('portafilter mode successful');
}

function CoffeeMachine(){
    CoffeeMake.call(this);
}
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;
CoffeeMachine.prototype.coffeeMachineMode = function(){
    console.log('coffee machine mode successful');
}


let drip1 = new Drip();
console.log(drip1);
drip1.dripMode();
drip1.on();
drip1.off();
let portafilter1 = new Portafilter();
console.log(portafilter1);
portafilter1.portafilterMode();
portafilter1.on();
portafilter1.off();
let coffeeMachine = new CoffeeMachine();
console.log(coffeeMachine);
coffeeMachine.coffeeMachineMode();
coffeeMachine.on();
coffeeMachine.off();
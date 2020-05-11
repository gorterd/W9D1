// dif between:
// const sum = function() {}
// function sum() {}

function sum() {
    const args = Array.from(arguments);

    return args.reduce(function(acc, el) {
        return acc + el;
    }) 
    
}

// using rest
const sum2  = function(...args){
    let sum = 0;
    for (let i=0; i < args.length; i++){
        sum += args[i];
    }

    return sum;
}

// greets(person1, person2)
//     logs "person1 says hello to person2";

function eats(food, drink) {
    console.log(`${this.name} eats ${food} and ${drink}`);
}
    



// johnEatsCurryAndDrinks = eats.myBind(john, "curry")
// ...args --> ["curry"]

// johnEatsCurryAndDrinks(drink)

// johnEatsCurryAndDrinks("pepsi")
// ...calltimeArgs --> ["pepsi"]

// greets.myBind(someObj, "john")
//     arg1: the new this for the anonymous function getting returned
//     arg2: always the first argument of the anonymous function getting returned

// function(person2)
//     logs "john says hello to person2"

// using rest operator (...args)
Function.prototype.myBind = function(ctx, ...args){ // ctx is the 'this', which would be 'John'
    const originalFunction = this; // eats

    return function(...calltimeArguments) { // drink, desert, mint
        // for (let i = 0; i < calltimeArguments.length; i++){
            originalFunction.call(ctx, ...args, ...calltimeArguments);
            // eats.call(ctx: John, args: "curry", "pepsi")
            // eats.call(ctx: John, args: "curry", "lassi")
        // }
    }
}



// Same thing:
// v1
// const boundFunction = eats.myBind(john, curry, pepsi)
// boundFunction();    

// v2
// const boundFunction = eats.myBind(john)
// boundFunction(curry, pepsi);    

// using 'arguments' JS keyword
Function.prototype.myBind2 = function(ctx){ 
    const originalFunction = this; 

    const args = Array.from(arguments);
    const siftedArgs = args.slice(1)    // like .drop in Ruby, takes all args from args[1..-1]

    return function() { 
        const args2 = Array.from(arguments)
        originalFunction.call(ctx, ...siftedArgs, ...args2)
    }
}


function curriedSum(numArgs){

    for(let i = 0; i < args.length; i++){
        function(args[i])
            
    }
}



const sum = curriedSum(20);



sum(5)(30)(20)(1)()()()()()()() => 



const sum = curriedSum(4);
sum(5)(30)(20)(1); // => 56



// if args.length < numArgs
// if args.length === numArgs
// if args.length > numArgs


function continuousAdd(numArgs) {
    
  let args = [];
  return function _curriedAdd(arg) {
      
      if (args.length < numArgs){
        args.push(arg);
        return _curriedAdd;
    } else {
        return args.reduce((acc, ele) => { return acc + ele }); // 6
    }
  }
}

function curriedSum(numArgs) {
    
  let args = [];
  return function _curriedAdd(arg) {
      
    if (args.length < numArgs - 1){
        args.push(arg);
        return _curriedAdd;
    } else if (args.length === numArgs - 1){
        args.push(arg);
        return args.reduce((acc, ele) => { return acc + ele }); // 6
    } else {
        return args.reduce((acc, ele) => { return acc + ele }); // 6
    }
  }
}

// add 6, 4, 8
const addThree = continuousAdd(3) // _curriedAdd(arg)
addThree(6)(4)(8)
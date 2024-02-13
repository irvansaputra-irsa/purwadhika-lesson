//[1] Create a function to check if two objects are equal
// example :
// Input : { a: “Hello” } & { a: 1 } -> return false
// Input : { a: 1 } & { a: 1 } -> return true

function checkTwoObject(obj1, obj2){
    let obj1Props = Object.entries(obj1).length;
    let obj2Props = Object.entries(obj2).length;

    if(obj1Props !== obj2Props){
        return false;
    }

    for(let key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;
};
console.log(checkTwoObject({ z: 1,  }, { z: 1 }))

//[2] Create a function to get the intersection of two objects
// example:
//{ a: 1, b: 2 } & { a: 1, c: 3 } -> return { a: 1 }

function findIntersection(obj1, obj2){
    let result = {};

    obj1 = { a: 1, b: 2, d: 4 };
    obj2 = { a: 1, c: 3, d: 4 };
    console.log(Object.keys(obj2));

    for(let key in obj1){
        if(Object.keys(obj2).find((el) => el === key )){
            if(obj1[key] === obj2[key]){
                result = {...result, [key] : obj1[key] }; // harus pake object notation biar read as key value
            }
        }
    }

    return result;
}
console.log(findIntersection());


//[3] Create a function to merge two array of student data and REMOVE DUPLICATE data
// Student data : name & email
function mergeArrayOfObject(arr1, arr2) {
    let merged = [...arr1];

    arr2.forEach(e => {
        let isExist = merged.find((el) => el.name === e.name );
        if(!isExist){
            merged = [...merged, e];
        }
    });

    return merged;
}
console.log(mergeArrayOfObject(
    [
        { name: 'Student 1', email: 'student1@mail.com' },
        { name: 'Student 2', email: 'student2@mail.com' }
    ],
    [
        { name: 'Student 1', email: 'student1@mail.com' },
        { name: 'Student 3', email: 'student3@mail.com' }
    ]
));


//[4] Create a function that can accept input as an array of objects and switch all values into property and property into value

function switchPropsValue(arr){
    let newarr = [];

    for(let array of arr){
        for(let key in array){
           let temp = {};
           temp = {...temp, [array[key]] : key};
           newarr.push(temp);
        }
    }

    return newarr;
};
console.log(switchPropsValue([{ name: 'David', age: 20 }, { name: 'Putra', age: 19 }]));

//[5] Create a function to find a factorial number using recursion
// ex => input : 5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function recursionF(n){
    if(n>1){
        return recursionF(n-1) * n;
    } else return 1;
}
console.log(recursionF(5))

//[6] exercise - shooting games

class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem(){
        const randomHealth =  Math.random() < 0.5 ? 0 : 10;
        const randomPower = Math.random() < 0.5 ? 0 : 10;
        return { health: randomHealth, power: randomPower };
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
          console.log("Player Status Before Shooting:");
          this.player1.showStatus();
          this.player2.showStatus();
    
          const itemPlayer1 = this.getRandomItem();
          const itemPlayer2 = this.getRandomItem();
    
          console.log("Getting random items before shooting:");
          console.log(`Player 1 gets item: Health bonus : ${itemPlayer1.health}, Power bonus : ${itemPlayer1.power}`);
          console.log(`Player 2 gets item:  Health bonus : ${itemPlayer2.health}, Power bonus : ${itemPlayer2.power}`);
    
          this.player1.useItem(itemPlayer1);
          this.player2.useItem(itemPlayer2);
    
          console.log("Player Status After Shooting:");
          this.player1.showStatus();
          this.player2.showStatus();
    
          this.player2.hit(this.player1.power);
          this.player1.hit(this.player2.power);
        }

        console.log("Game Over!");

        if (this.player1.health <= 0 && this.player2.health <= 0) {
        console.log("Tie!");
        } else if (this.player1.health <= 0) {
        console.log(`${this.player2.name} wins!`);
        } else {
        console.log(`${this.player1.name} wins!`);
        }
    }
};

class Player {
    name;
    health;
    power;

    constructor(name, health = 100, power = 10){
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power){
        this.health -= power;
    }

    useItem(item){
        this.health += item.health;
        this.power += item.power;
    }

    showStatus(){
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

// Example Usage
const playerA = new Player("Player A");
const playerB = new Player("Player B");

const game = new ShootingGame(playerA, playerB);
game.start();
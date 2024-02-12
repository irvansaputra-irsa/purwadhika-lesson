////Exercise 1
const getAge = (birthDateString) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    const yearsDifference = today.getFullYear() - birthDate.getFullYear();

    const isBeforeBirthday =
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate());

    return isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
};
function calculateStudentData(arrays){
    //calculateScore
    let highestScore=arrays[0].Score;
    let lowestScore=arrays[0].Score;
    let sumScore = 0;
    for(let arr of arrays){
        if(arr.Score < lowestScore){
            lowestScore = arr.Score;
        }
        if(arr.Score > highestScore){
            highestScore = arr.Score;
        }
        sumScore+= arr.Score;
    }

    console.log(highestScore, lowestScore, sumScore)

    //calculateAge
    let highestAge=getAge(arrays[0].Age);
    let lowestAge=getAge(arrays[0].Age);
    let sumAge=0 ;
    
    for(let arr of arrays){
        if(getAge(arr.Age) > highestAge ){
            highestAge = getAge(arr.age);
        }
        if(getAge(arr.Age) < lowestAge){
            highestScore = arr.Score;
        }
        sumAge+= getAge(arr.Age);
    }
    
    return {
        Score : {
            Highest : highestScore,
            Lowest : lowestScore,
            Average : sumScore / arrays.length
        },
        Age : {
            Highest: highestAge,
            Lowest: lowestAge,
            Average: sumAge / arrays.length
        }
    }
}

dataset = [
    {
        Name: 'ezreal',
        Email: 'ezreal123@ymail.com',
        Age: '2001-11-09',
        Score: 90
    },
    {
        Name: 'yone',
        Email: 'yonee333@ymail.com',
        Age: '2002-12-21',
        Score: 59
    },
    {
        Name: 'teemo',
        Email: 'teem0232@ymail.com',
        Age: '2002-07-19',
        Score: 80
    },
    {
        Name: 'kayne',
        Email: 'kayne232@ymail.com',
        Age: '2002-02-10',
        Score: 70
    },
    {
        Name: 'ksante',
        Email: 'ksante@ymail.com',
        Age: '2003-06-11',
        Score: 85
    },
]
console.log(calculateStudentData(dataset));

////Exercise 2
class Product {
    name;
    price;

    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    products;
    total;

    constructor(){
        this.products = [];
        this.total = 0;
    }

    addToCarts(product, qty){
        this.products.push({...product, qty});
        this.total += product.price * qty;
    }

    showTotals(){
        console.log("Current Total Transaction:", this.total);
    }

    checkouts(){
        console.log("Current Detailed Transactions \n");
        for(let t of this.products){
            console.log(`${t.name} = ${t.price} x ${t.qty} = ${t.price * t.qty}`)
        }
        this.showTotals();
    }
}

const p1 = new Product("pulpen", 3000);
const p2 = new Product("pensil", 2000);
const p3 = new Product("penghapus", 4000);

const transactions = new Transaction();
transactions.addToCarts(p1, 3);
transactions.addToCarts(p2, 5);
transactions.addToCarts(p3, 5);

transactions.showTotals();

transactions.checkouts();

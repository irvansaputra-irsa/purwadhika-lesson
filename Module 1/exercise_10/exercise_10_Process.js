// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

class orders {
    constructor(queue){
        this.queue = queue;
    }

    async processOrder(order){
        let time  =  Math.floor(Math.random() * 10) * 1000;
        console.log(`[Log] Queue ${order} Done in ${time/1000} seconds`);
        await new Promise((res) => setTimeout(res,  time));
    }

    async runQueue(){
        //show all queue list
        console.log("List of orders")
        for(let i=0 ; i<this.queue.length; i++){
            console.log(`Queue number ${i+1} : ${this.queue[i]}`)
        }

        let iterator = 0;
        while(iterator < this.queue.length){
            await this.processOrder(this.queue[iterator]);
            iterator++;
        }
        console.log("Queue Ended!");
    }
}

module.exports = {orders};
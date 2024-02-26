const {orders} = require('./exercise_10_Process');

let order = new orders(["capcay","nasi goreng", "kwetiau bun", "bihun kuah"]);
order.runQueue();
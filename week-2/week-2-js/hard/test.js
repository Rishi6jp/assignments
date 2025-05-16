const Calculator = require('./calculator');

const todos = require('./todo-list')

const td = new todos();

td.add("Make a todo");
td.add("Day 54");
td.add("Pray to God");
td.add("Ask for strength from god")
td.add("complete this backlog")

console.log(td.getAll());
console.log(td.get(2));
console.log(td.update(4, "You have done the assignment and you're strong"));
console.log(td.remove(0));
console.log(td.getAll());
console.log(td.clear());
console.log(td.getAll());



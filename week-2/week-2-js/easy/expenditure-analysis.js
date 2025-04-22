/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory (transactions) {
  let returnObject = []

  if(transactions.length == 0){
    return []
  }

  for(let trans of transactions){
    let found = false

    for(let obj of returnObject){
      if(trans.category == obj.category){
        obj.totalSpent += trans.price
        found = true;
        break;
      }

      
    }
    if(!found){
      returnObject.push({
        category: trans.category,
        totalSpent: trans.price
      })
    }
  }
  return returnObject;
}
module.exports = calculateTotalSpentByCategory;

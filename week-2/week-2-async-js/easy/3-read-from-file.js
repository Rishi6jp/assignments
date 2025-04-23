// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs')

fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
    if(err){
        console.log("file not found")
    } else {
        console.log(data)
    }
})

// Expensive operation: A simple, large computational task
const expensiveOperation = () => {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { 
      sum += i;
    }
    console.log('Expensive operation done');
  };
  
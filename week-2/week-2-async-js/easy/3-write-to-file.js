const fs = require('fs');

const filePath = "a.txt"

fs.writeFile(filePath, "mae Ye likhna chahta hu, pta nhi pehle kya likha tha" ,"utf-8", (err) => {
    if(err) {
        console.log("file not found", err);
        return;
    }
    console.log("File Written Successfully")
})

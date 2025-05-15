const fs = require('fs');

let text;

fs.readFile('./a_f.txt', "utf-8", (err, data) => {
    if(err){
        console.log("File not find")
    } else {
        text = data;
        text = text.replace(/\s+/g, ' ')

        fs.writeFile('./a_f.txt', text, () => console.log("content changed"))
    }
})


const fs = require('fs')

const filePath = "3-read-from-file.md"

fs.readFile(filePath, "utf-8", (err, data) => {
    if(err){
        console.err(" File NOt Fount; Err: ", err);
    }
    else {
        console.log(data);
    }
})
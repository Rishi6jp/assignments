const fs = require('fs')

const filePath = "sample.txt"
let str;
fs.readFile(filePath, "utf-8", (err, data) => {
    if(err){
        console.log("file not found")
    } else {
        let str = data.replace(/\s+/g, ' ').trim()
        fs.writeFile(filePath, str, (err, data) => {
                    if(err) {
                        console.log("can't write to the file")
                    }
                })
            }
        }
    );




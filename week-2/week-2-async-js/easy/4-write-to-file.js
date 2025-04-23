const fs = require('fs')

fs.writeFile("3-write-to-file.md", "You are wonderful You are Best and You're destined for greatness", (err, data) => {
    if(err){
        console.log("file not found")
    } else 
    console.log(data, "file written")
} )
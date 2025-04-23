let date = new Date()
let count = 0
function counter(){
    count += 1
    console.log(count)
    setTimeout(counter, 1000)
}
counter()
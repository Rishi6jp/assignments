const timer = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    let mer;
    let apHour
    if(hours == 0){
        apHour = 12;
        mer = "am"
    }
    else if(hours > 12){
        apHour = hours % 12;
        mer = "pm"
    }
    console.clear()
    console.log(`${hours}:${minutes}:${seconds}`)
    console.log(`${apHour}:${minutes}:${seconds} ${mer}`)
    setInterval(timer, 1000)
}

timer();


// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showClock(){
    const date = new Date()
    let hours = date.getHours() 
    let minutes = date.getMinutes()
    let second = date.getSeconds()


    const pad = (n) => (n < 10 ? '0' + n : n);

    const time24 = `${pad(hours)}:${pad(minutes)}:${pad(second)}`

    // 12 hours formate

    const meridian = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12;
    const time = `${pad(hours)}:${pad(minutes)}:${pad(second)} ${meridian}`

    console.log(`${time} || ${time24}`)
}

setInterval(showClock, 1000)



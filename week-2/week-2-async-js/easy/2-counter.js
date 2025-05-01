let c = 1

const timer = () => {
    setTimeout(() => {
        console.clear();
        console.log(c);
        c++;
        timer()
    }, 1000)
}

timer();
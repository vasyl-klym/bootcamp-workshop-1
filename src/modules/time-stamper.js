function f7 () {
    let arrayTimeStamper = [];
    function displayTimeStamper () {
        arrayTimeStamper.push(new Date().getTime());
        arrayTimeStamper.forEach( time => {
            console.log(time);
        })
    }
    return displayTimeStamper;
}

const myFunc = f7();
myFunc();
console.log('time');
myFunc();
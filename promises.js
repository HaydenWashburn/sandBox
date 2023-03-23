let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let num = Math.round(Math.random()*10)
        console.log(num)
        if (num % 2 == 0){
            resolve(num)
        } else {
            reject(num)
        }
    }, 0500)
})

promise
.then((x) => {
    return {x, doubled: x*3}
})
.then((obj)=>{console.log(`${obj.x} doubled is ${obj.doubled}`)})
.catch((err) => {console.error(`${err} the number is odd.`)})
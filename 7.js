const num = [ 87, 64, 96, 92, 88, 99, 73]
const x = num.reduce((acc, curr) => {
    return (acc > curr) ? acc : curr
})

console.log(x)


const y = (arr) => {

    let min = 0;

    for(let i = 0; i< arr.length; i++){

        if(min < arr[i]){
            
            min = arr[i]
        }

    }

    return min;

}

console.log(y(num))
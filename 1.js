const input = [5, 7, 1, 1, 2, 3, 22]

function minimumChange(money){

    let change = 1;
    const sortMoney = money.sort((a,b) => a - b)

    for(let i = 0; i<money.length; i++){

        if(change >= sortMoney[i]){
            change += sortMoney[i]
        }

        console.log(change)

    }

    return change;


}

console.log(minimumChange(input))
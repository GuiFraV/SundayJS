// Monnaie non constructible. Étant donné un tableau d'entiers positifs représentant les valeurs des pièces de monnaie en votre possession, écrivez une fonction qui renvoie le montant minimum de monnaie (la somme minimum d'argent) que vous ne pouvez pas créer. Les pièces données peuvent avoir n'importe quelle valeur entière positive et ne sont pas nécessairement uniques (c'est-à-dire que vous pouvez avoir plusieurs pièces de la même valeur). Par exemple, si on vous donne des pièces = [1, 2, 5] , le montant minimum de monnaie que vous ne pouvez pas créer est de 4 . Si l'on ne vous donne aucune pièce, la quantité minimale de monnaie que vous ne pouvez pas créer est de 1 .

// Other Input = [5, 7, 1, 1, 2, 3, 22] Other Output = 20

const coins = [5, 7, 1, 1, 2, 3, 22]

function changeMin(arr){

    let echangeMin = 1;
    let coinsSort = coins.sort((a,b) => a - b)

    for(let i = 0; i<arr.length; i++){

        console.log(echangeMin)

        if(echangeMin >= coinsSort[i]){

            echangeMin += coinsSort[i];

        }


    }

    console.log(echangeMin)


}

console.log(changeMin(coins))
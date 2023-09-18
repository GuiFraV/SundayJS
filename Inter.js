const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

/*Calcul de la factorielle :
Demandez à l'utilisateur un nombre et calculez la factorielle de ce nombre.*/

// rl.question('Donnez moi un nombre, pour calculer sa factorielle : ', (nbr) => {

//     let result = nbr;

//     for(let i = nbr -1 ; i >= 1; i--){
//         result *= i
//     }

//     console.log(result);
//     rl.close();

// })



/*Inverse d'une chaîne :
Demandez à l'utilisateur une chaîne et renvoyez cette chaîne inversée.*/

// rl.question(' Donne moi un phrase : ', (phrase) => {

//     let ph = phrase.split(' ');
//     let reverse  = ph.reverse().join(' ');

//     console.log(reverse);
//     rl.close();

// })


/*Nombre premier :
Demandez à l'utilisateur un nombre et déterminez si ce nombre est premier ou non.*/

// rl.question('Donnez moi un chiffre : ', (nbr) => {

//     let estPremier = true;

//     for(let i = 2 ; i < nbr ; i++){
//         if(nbr % i === 0){
//             estPremier = false;
//             break;
//         }
//     }

//     if(estPremier){
//         console.log("Ce chiffre est un nombre premier")
//     }else{
//         console.log("Ce n'est pas un nombre premier")
//     }

//     rl.close();
// })


/*Somme des chiffres :
Demandez à l'utilisateur un nombre et calculez la somme de ses chiffres.*/

// rl.question('Donnez moi un nombre ( pas un chiffre) : ', (nbr) => {

//     let res = 0;
//     let splitNbr = nbr.split('');
    
//     for(let i = 0; i < splitNbr.length ; i++){
//         res += parseInt(splitNbr[i]);
//     }

//     console.log(res);


//     rl.close();

// })


/*Fibonacci :
Demandez à l'utilisateur un nombre n et affichez le n-ième nombre de la séquence de Fibonacci.*/

rl.question("Suite de fibonacci, donnez moi un nombre :", (nbr) => {
    nbr = parseInt(nbr);

    if (!isNaN(nbr) && nbr >= 0) {
        let a = 0, b = 1;

        if (nbr === 0) {
            console.log(a);
        } else if (nbr === 1) {
            console.log(b);
        } else {
            for (let i = 2; i <= nbr; i++) {
                let temp = a + b;
                a = b;
                b = temp;
            }
            console.log(b);
        }
    } else {
        console.log("Veuillez entrer un nombre valide.");
    }
    rl.close();
});


/*Durée entre deux dates :
Demandez à l'utilisateur deux dates (format JJ/MM/AAAA) et calculez la différence en jours entre ces deux dates.

Mots les plus fréquents :
Demandez à l'utilisateur une phrase et affichez les trois mots les plus fréquemment utilisés dans cette phrase.

Anagrammes :
Demandez à l'utilisateur deux mots et déterminez s'ils sont des anagrammes l'un de l'autre.

Conversion de temps :
Demandez à l'utilisateur une durée en minutes et convertissez-la en heures et minutes.

Calcul de la moyenne :
Demandez à l'utilisateur une série de nombres (par exemple, séparés par des virgules) et calculez la moyenne de ces nombres.
*/
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

rl.question(' Donne moi un phrase : ', (phrase) => {

    let ph = phrase.split(' ');
    let reverse  = ph.reverse().join(' ');

    console.log(reverse);
    rl.close();

})


/*Nombre premier :
Demandez à l'utilisateur un nombre et déterminez si ce nombre est premier ou non.

Somme des chiffres :
Demandez à l'utilisateur un nombre et calculez la somme de ses chiffres.

Fibonacci :
Demandez à l'utilisateur un nombre n et affichez le n-ième nombre de la séquence de Fibonacci.

Durée entre deux dates :
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
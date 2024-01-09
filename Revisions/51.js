// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// Ecrire une fonction qui lit une chaine de caractère
// Lorsqu'un mot est supérieur à 5 lettres on l'inverse

const easyReverseWord = (str) => {
    let words = str.split(" ");

    let bistofly = words.map(w => {
        if(w.length > 5){
            return w.split("").reverse().join("");
        }
        return w;
    })

    return bistofly;
}

console.log(easyReverseWord("Hey fellow warriors"))
console.log(easyReverseWord("This is a test"))
console.log(easyReverseWord("This is another test"))
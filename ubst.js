const my_list = [1, 3, 5, 7, 9];

function binary_search(list, item){

    // Permet d'avoir un suivi dans quelle partie de la liste nous devons rechercher
    let low = 0; 
    let high = list.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2); // vérifie l'élément du milieu
        let guess = list[mid];

        if(guess === item){
            return mid; // Trouve l'item recherché
        }

        if(guess > item ){ // La réponse est trop haute par rapport à l'item
            high = mid - 1;
        }else{ // La réponse est trop basse par rapport à l'item
            low = mid + 1;
        }

        
    }
    
    return null; // Si l'item n'est pas trouvé retourne null  

}

// console.log(binary_search(my_list, 3))
// console.log(binary_search(my_list, -1))


// 1) Suppose you have a sorted list of 128 names, and you’re searching
// through it using binary search. What’s the maximum number of
// steps it would take?

// 2) Suppose you double the size of the list. What’s the maximum
// number of steps now?

let names = [
    "Emily", "Max", "Isabella", "Ethan", "Sophia", "Alexander", "Mia", "Noah", 
    "Ava", "William", "Olivia", "Liam", "Emma", "Benjamin", "Charlotte", "James", 
    "Amelia", "Lucas", "Harper", "Henry", "Evelyn", "Gabriel", "Abigail", "Matthew", 
    "Luna", "Jackson", "Elizabeth", "Levi", "Ella", "Samuel", "Sofia", "Owen", 
    "Avery", "John", "Scarlett", "Jack", "Emily", "Luke", "Madison", "Jayden", 
    "Chloe", "Dylan", "Layla", "Grayson", "Eleanor", "Carter", "Grace", "Michael", 
    "Nora", "Sebastian", "Zoey", "Daniel", "Penelope", "Aiden", "Riley", "Logan", 
    "Hannah", "David", "Lily", "Joseph", "Addison", "Wyatt", "Lucy", "Leo", "Ellie", 
    "Isaac", "Stella", "Lincoln", "Aubrey", "Jaxon", "Zoe", "Nathan", "Brooklyn", 
    "Ezra", "Hazel", "Nicholas", "Bella", "Julian", "Natalie", "Eli", "Savannah", 
    "Isaiah", "Leah", "Landon", "Samantha", "Mateo", "Violet", "Joshua", "Aurora", 
    "Christopher", "Skylar", "Andrew", "Paisley", "Theodore", "Camila", "Caleb", 
    "Autumn", "Ryan", "Peyton", "Asher", "Taylor", "Nolan", "Aria", "Hudson", 
    "Hailey", "Christian", "Allison", "Colton", "Elena", "Cameron", "Gabriella", 
    "Roman", "Serenity", "Easton", "Kennedy", "Aaron", "Sadie", "Hunter", "Ariana", 
    "Connor", "Genesis",     "Emily", "Max", "Isabella", "Ethan", "Sophia", "Alexander", "Mia", "Noah", 
    "Ava", "William", "Olivia", "Liam", "Emma", "Benjamin", "Charlotte", "James", 
    "Amelia", "Lucas", "Harper", "Henry", "Evelyn", "Gabriel", "Abigail", "Matthew", 
    "Luna", "Jackson", "Elizabeth", "Levi", "Ella", "Samuel", "Sofia", "Owen", 
    "Avery", "John", "Scarlett", "Jack", "Emily", "Luke", "Madison", "Jayden", 
    "Chloe", "Dylan", "Layla", "Grayson", "Eleanor", "Carter", "Grace", "Michael", 
    "Nora", "Sebastian", "Zoey", "Daniel", "Penelope", "Aiden", "Riley", "Logan", 
    "Hannah", "David", "Lily", "Joseph", "Addison", "Wyatt", "Lucy", "Leo", "Ellie", 
    "Isaac", "Stella", "Lincoln", "Aubrey", "Jaxon", "Zoe", "Nathan", "Brooklyn", 
    "Ezra", "Hazel", "Nicholas", "Bella", "Julian", "Natalie", "Eli", "Savannah", 
    "Isaiah", "Leah", "Landon", "Samantha", "Mateo", "Violet", "Joshua", "Aurora", 
    "Christopher", "Skylar", "Andrew", "Paisley", "Theodore", "Camila", "Caleb", 
    "Autumn", "Ryan", "Peyton", "Asher", "Taylor", "Nolan", "Aria", "Hudson", 
    "Hailey", "Christian", "Allison", "Colton", "Elena", "Cameron", "Gabriella", 
    "Roman", "Serenity", "Easton", "Kennedy", "Aaron", "Sadie", "Hunter", "Ariana", 
    "Connor", "Genesis",
];

let sortedNames = names.sort(); // trie de la liste des noms par ordre alphabétique)

function numberOfSteps(list){

    let low = 0; 
    let high = list.length -1;
    let steps = 0;

    while(low <= high){

        let mid = Math.floor((low + high) / 2); 
        let guess = list[mid];

        if(low === high){
            break; 
        }

        if(mid >= low ){ 
            high = mid - 1;
        }else{ 
            low = mid + 1;
        }

        steps++;
        
    }
    
    return steps;  

}


console.log(numberOfSteps(sortedNames));

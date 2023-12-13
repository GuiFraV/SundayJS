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

console.log(binary_search(my_list, 3))
console.log(binary_search(my_list, -1))
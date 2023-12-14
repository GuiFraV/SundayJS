function palindrome(mot) {
	
	let estUnPalindrome = true;
	
	for(let i = 0; i < mot.length; i++){

		if(mot[i] !== mot[mot.length -1 -i]){
			
			estUnPalindrome = false;
            
		}		
        break;			
        
	}

	estUnPalindrome ? console.log('C\'est un palindrome') : console.log('Ce n\'est pas un palindrome')

}


console.log(palindrome('kayakfefefefd'))
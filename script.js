
function toCase(text) { 
	let lowercase = "";
    let uppercase = "";
	let lowerstr;
	for (let i = 0; i < text.length; i++) {
        let charcode = text.charCodeAt(i);
		if(charcode >=97 && charcode <= 122 ){
            let str = String.fromCharCode(charcode-32);
			 lowerstr = String.fromCharCode(charcode); 
            uppercase = uppercase + str; 
			lowercase = lowercase + lowerstr;
        } 
		else if(charcode >= 65 && charcode <=90){
             str = String.fromCharCode(charcode);
			lowerstr = String.fromCharCode(charcode+32);
            uppercase = uppercase + str;   
			lowercase = lowercase + lowerstr;
        }   
		// for lowercase 
		
    }  
    return `'${lowercase}-${uppercase}'`; 
}
// DO not change the code below 
 const text = prompt("Enter text:");    
alert(toCase(text)); 

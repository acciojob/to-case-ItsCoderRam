
function toCase(text) { 
	let lowercase = "";
    let uppercase = "";
	for (let i = 0; i < text.length; i++) {
        let charcode = text.charCodeAt(i);
		if(charcode >=97 && charcode <= 122 ){
            let str = String.fromCharCode(charcode-32);
            uppercase = uppercase + str; 
        } 
		else if(charcode >= 65 && charcode <=90){
            let str = String.fromCharCode(charcode);
            uppercase = uppercase + str;   
        }  
		// for lowercase
		esle if(charcode >=97 && charcode <= 122 ){
            let str = String.fromCharCode(charcode);
            lowercase = lowercase + str; 
        } 
		else if(charcode >= 65 && charcode <=90){
            let str = String.fromCharCode(charcode+32);
            lowercase = lowercase + str;    
        }  
    }  
    return `'${lowercase}-${uppercase}'`; 
}
// DO not change the code below 
const text = prompt("Enter text:"); 
alert(toCase(text)); 

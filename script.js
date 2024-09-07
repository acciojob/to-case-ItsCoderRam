function toCase(text) {
  // write your code here
	let uppercase = "";
	for (let i = 0; i < text.length; i++) {
		let charcode = text.charCodeAt(i);
		if(charcode >=92){
		let str = String.fromCharCode(charcode-32);
		uppercase = uppercase + str;
		}
		else{
		 str = String.fromCharCode(charcode);
		 uppercase = uppercase + str; 
		}
	}  
	uppercase = uppercase.slice(1,-1);
	text = text.slice(1,-1);
	return `'${text}-${uppercase}`; 
}

// DO not change the code below
 
const text = prompt("Enter text:"); 
alert(toCase(text)); 

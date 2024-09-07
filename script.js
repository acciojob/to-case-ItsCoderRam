function toCase(text) {
  // write your code here
	let uppercase = '';
	for (let i = 0; i < text.length; i++) {
		let charcode = text.charCodeAt(i);
		console.log(charcode);
		if(charcode >=92){
		let str = String.fromCharCode(charcode-32);
		uppercase = uppercase + str;
		console.log(str);
		}
		else{
		  
		 str = String.fromCharCode(charcode);
		 uppercase = uppercase + str; 
		 console.log(str);
		}
	} 
	return uppercase;
}

// DO not change the code below
 
 const text = prompt("Enter text:"); 
alert(toCase(text)); 

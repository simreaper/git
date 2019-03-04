function verify(){
var username = "admin";
var psd = "admin";
var a = login.user.value;
console.log(a);
var b = login.pwd.value;
if((a === username) && (b === psd)){
	alert("Successfull");
	window.load("validUser.html");
	
}
else{
	alert("unsuccessfull");
}
}
var codeone = [];
var code = [];
var playerCode = [];
var a = 12;
var keyWhite = [];
var keyBlack = [];
var color = ["#00797f", "#a84800", "#00a84b", "#e0dd35", "#e8e8e8", "#2d2d2d"];
function start() {
	document.getElementById('start').style.display = 'none';
}
function randomiser(o){
	//code = [];
	//for (i = 0; i <= 3; i++){
	//	var random = Math.floor(Math.random() * 6);
	//	code.push(color[random]);
	//}
	document.getElementById("codegen").innerHTML = "code generated";
	//console.log(code);
	var crt = o.length,
		temp,
		index;
	while(crt > 0){
		index = Math.floor(Math.random() * crt);
		crt--;
		temp = o[crt];
		o[crt] = o[index];
		o[index] = temp;
		return o;
	}
}
//console.log(randomiser(color));
function codee(){
	code = [];
	console.log(code);
	code.length = 4;
	for(var i = 0; i <= 3; i++){
		code.push(color[i]);
	}
	document.getElementById("codegen").innerHTML = "code generated";
	console.log(code);
}
function iest(n){	

	if(playerCode.length < 4){
		if(n == "blue"){
			playerCode.push("#00797f");
		}else if(n == "red"){
			playerCode.push("#a84800");
		}else if(n == "green"){
			playerCode.push("#00a84b");
		}else if(n == "yellow"){
			playerCode.push("#e0dd35");
		}else if(n == "white"){
			playerCode.push("#e8e8e8");
		}else if(n == "black"){
			playerCode.push("#2d2d2d");
		}
	}
	
	for(var i = 0; i <= 3; i++){
		document.getElementById("pin"+a+"-"+i).style.backgroundColor = playerCode[i];
	}

	if(playerCode.length == 4){	
		for(var i = 0; i <= 3; i++){
			if(playerCode.includes(code[i + 4])){
				keyWhite.push("white");
			}	
		}
		for(var i = 0; i <= 3; i++){
			if(playerCode[i] === code[i + 4]){
				keyBlack.push("black");
			}
		}
		
		for(var i = 0; i <= 3; i++){
			document.getElementById("sp"+a+"-"+i).style.backgroundColor = keyWhite[i];
		}
		for(var i = 0; i <= 3; i++){
			document.getElementById("sp"+a+"-"+i).style.backgroundColor = keyBlack[i];
		}
		
		console.log(keyWhite);
		console.log(keyBlack);
		keyWhite = [];
		keyBlack = [];
		playerCode = [];
		a--;
	}
}
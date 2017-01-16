var code = [];
var playerCode = [];
var a = 12;
var keyWhite = [];
var keyBlack = [];
var count = 0;
var color = ["#00797f", "#a84800", "#00a84b", "#e0dd35", "#e8e8e8", "#2d2d2d", "#810bbc", "#cc009f", "#010f77", "#004c04", "#ff9400", "#a80000"];
function start(){
	document.getElementById("start").style.display = "none";
	document.getElementById("displaywindow").style.display = "block";
}
function randomiser(a){
	var i,
		j,
		x;
		for(i = a.length; i; i--){
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
}
function codee(){
	randomiser(color);
	code = [];
	for(var i = 4; i <= 7; i++){
		code.push(color[i]);
	}
	console.log(code);
	document.getElementById("codegen").innerHTML = "code generated";
}
function iest(n){	
	if(playerCode.length < 4){
		if(n == "blue"){
			playerCode.push("#00797f");
		}else if(n == "brouwn"){
			playerCode.push("#a84800");
		}else if(n == "green"){
			playerCode.push("#00a84b");
		}else if(n == "yellow"){
			playerCode.push("#e0dd35");
		}else if(n == "white"){
			playerCode.push("#e8e8e8");
		}else if(n == "black"){
			playerCode.push("#2d2d2d");
		}else if(n == "purple"){
			playerCode.push("#810bbc");
		}else if(n == "pink"){
			playerCode.push("#cc009f");
		}else if(n == "darkblue"){
			playerCode.push("#010f77");
		}else if(n == "darkgreen"){
			playerCode.push("#004c04");
		}else if(n == "orange"){
			playerCode.push("#ff9400");
		}else if(n == "red"){
			playerCode.push("#a80000");
		}
	}
	for(var i = 0; i <= 3; i++){
		document.getElementById("pin"+a+"-"+i).style.backgroundColor = playerCode[i];
	}
	if(playerCode.length == 4){	
		for(var i = 0; i <= 3; i++){
			if(playerCode.includes(code[i])){
				keyWhite.push("white");
			}	
		}
		for(var i = 0; i <= 3; i++){
			if(playerCode[i] === code[i]){
				keyBlack.push("black");
				count++;
			}
		}
		
		for(var i = 0; i <= 3; i++){
			document.getElementById("sp"+a+"-"+i).style.backgroundColor = keyWhite[i];
		}
		for(var i = 0; i <= 3; i++){
			document.getElementById("sp"+a+"-"+i).style.backgroundColor = keyBlack[i];		
		}			

		if(a <= 1){
			document.getElementById("mainwindow").style.backgroundColor = "red";
			for(var i = 0; i <= code.length; i++){
				document.getElementById("reveal-"+i).style.backgroundColor = code[i];
			}
		}	
		if(keyBlack.length == 4){
			document.getElementById("mainwindow").style.backgroundColor = "green";
			for(var i = 0; i <= code.length; i++){
				document.getElementById("reveal-"+i).style.backgroundColor = code[i];
			}
		}
		keyWhite = [];
		keyBlack = [];
		playerCode = [];
		a--;
	}

}
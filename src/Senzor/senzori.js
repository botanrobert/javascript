
window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(event){

	var alpha = event.alpha;
	var beta  = event.beta;
	var gamma = event.gamma;

	document.getElementById("a").innerHTML = "alpha =" + alpha.toString();
	document.getElementById("b").innerHTML = "beta =" + beta.toString();
	document.getElementById("g").innerHTML = "gamma =" + gamma.toString();


	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width, canvas.height);

	var raza = 20;
	var centru = {x:canvas.width / 2, y:canvas.height / 2}; //structura
	ctx.beginPath();
	ctx.arc(centru.x + gamma * (canvas.width / 2 - raza) / 90, centru.y + beta * (canvas.height / 2 - raza) / 90, 20, 0, 2 * Math.PI);
	ctx.stroke();
}

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
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0,0,canvas.width, canvas.height);

	var centru = {x:canvas.width / 2, y:canvas.height / 2}; //structura
	var latura_patrat = 50;


	ctx.translate(centru.x, centru.y);
	ctx.rotate(alpha * Math.PI / 180);


	ctx.beginPath();
	ctx.rect(- latura_patrat / 2 * (-beta) * (canvas.width / 2 - latura_patrat * 0.71) / 90, - latura_patrat / 2 * gamma * (canvas.height / 2 - latura_patrat * 0.71) / 90, latura_patrat, latura_patrat);
	ctx.stroke();
}
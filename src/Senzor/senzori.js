
window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(event){

	var alpha = event.alpha;
	var beta  = event.beta;
	var gamma = event.gamma;

	document.getElementById("a").innerHTML = "alpha =" + alpha.toString();
	document.getElementById("b").innerHTML = "beta =" + beta.toString();
	document.getElementById("g").innerHTML = "gamma =" + gamma.toString();

}
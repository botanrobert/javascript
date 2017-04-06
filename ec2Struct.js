//---------------------------------------------------------------------
function citeste(){
	
	var _a = document.getElementById("a").value;
	var _b = document.getElementById("b").value;
    var _c = document.getElementById("c").value;

	
	var coef= {a:_a, b:_b, c:_c}; // structura
	
	return coef;
}

//---------------------------------------------------------------------
function calc_delta(coeficient){
	
	return coeficient.b * coeficient.b - 4 * coeficient.a * coeficient.c;
	
	
}

//---------------------------------------------------------------------
function calc_radacini(coef,delta){

	var x1,x2;

	if(delta >= 0){
			x1 = {real:(-coef.b- Math.sqrt(delta))/(2*coef.a), imaginar:0};
			x2 = {real:(-coef.b + Math.sqrt(delta))/(2*coef.a), imaginar:0};
				
				//document.getElementById("x1").innerHTML = x1_real;
				//document.getElementById("x2").innerHTML = x2_real;
		}
		else{	
			x1 = {real:(-coef.b)/(2*coef.a), imaginar: -Math.sqrt(-delta) / (2*coef.a)};
			x2 = {real:(-coef.b)/(2*coef.a), imaginar: +Math.sqrt(-delta) / (2*coef.a)};
			
		}

	var v = {x1:x1, x2:x2};	
	return v;
}
function rezolva(){
		
		var coef = citeste();
		var delta = calc_delta(coef);
		var radacini = calc_radacini(coef,delta);
		afiseaza(radacini);
		
		
		
	}
//---------------------------------------------------------------------
	
function afiseaza(radacini){
	
	if(radacini.x1.imaginar >= 0)
	document.getElementById("x1").innerHTML = radacini.x1.real.toString() + "+" +radacini.x1.imaginar.toString() + "i";
else
	document.getElementById("x1").innerHTML = radacini.x1.real.toString() + radacini.x1.imaginar.toString() + "i";

	if(radacini.x2.imaginar>=0)
	document.getElementById("x2").innerHTML = radacinix2.real.toString() + "+" + radacini.x2.imaginar.toString() + "i";
else
	document.getElementById("x2").innerHTML = radacini.x2.real.toString() + radacini.x2.imaginar.toString() + "i";
}
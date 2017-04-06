//---------------------------------------------------------------------
function citeste(){
	
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

	
	var coef=[a,b,c];
	
	return coef;
}

//---------------------------------------------------------------------
function calc_delta(coeficient){
	
	return coeficient[1] * coeficient[1] - 4 * coeficient[0] * coeficient[2];
	
	
}

//---------------------------------------------------------------------
function calc_radacini(coef,delta){
	var x1_real,x1_imaginar,x2_real,x2_imaginar;
	if(delta >= 0){
			x1_real = (-coef [1]- Math.sqrt(delta))/(2*coef[0]);
			x1_imaginar = 0;
			x2_real = (-coef[1] + Math.sqrt(delta))/(2*coef[0]);
			x2_imaginar = 0;
				
				//document.getElementById("x1").innerHTML = x1_real;
				//document.getElementById("x2").innerHTML = x2_real;
		}
		else{	
			x1_real = (-coef[1])/(2*coef[0]);
			x1_imaginar = -Math.sqrt(-delta) / (2*coef[0]);
			x2_real = (-coef[1])/(2*coef[0]);
			x2_imaginar = +Math.sqrt(-delta) / (2*coef[0]);
			
		}
	return [x1_real,x1_imaginar,x2_real,x2_imaginar];
}
function rezolva(){
		
		var coef = citeste();
		var delta = calc_delta(coef);
		var radacini = calc_radacini(coef,delta);
		afiseaza(radacini);
		
		
		
	}
//---------------------------------------------------------------------
	
function afiseaza(radacini){
	
	if(radacini[1] >= 0)
	document.getElementById("x1").innerHTML = radacini[0].toString() + "+" +radacini[1].toString() + "i";
else
	document.getElementById("x1").innerHTML = radacini[0].toString() + radacini[1].toString() + "i";

	if(radacini[3]>=0)
	document.getElementById("x2").innerHTML = radacini[2].toString() + "+" + radacini[3].toString() + "i";
else
	document.getElementById("x2").innerHTML = radacini[2].toString() + radacini[3].toString() + "i";
}
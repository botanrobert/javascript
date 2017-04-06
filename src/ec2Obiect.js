

//---------------------------------------------------------------------
function calc_delta(coeficient){
	
	return coeficient.b * coeficient.b - 4 * coeficient.a * coeficient.c;
	
	
}

//---------------------------------------------------------------------

function ec2(){

	this.citeste = function(){
		this.a = document.getElementById("a").value;
		this.b = document.getElementById("b").value;
		this.c = document.getElementById("c").value;
	}

	this.rezolva = function(){

		var delta = calc_delta(this);
		
		if(delta >= 0){
			this.x1 = {real:(-this.b- Math.sqrt(delta))/(2*this.a), imaginar:0};
			this.x2 = {real:(-this.b + Math.sqrt(delta))/(2*this.a), imaginar:0};
				
				//document.getElementById("x1").innerHTML = x1_real;
				//document.getElementById("x2").innerHTML = x2_real;
		}
		else{	
			this.x1 = {real:(-this.b)/(2*this.a), imaginar: -Math.sqrt(-delta) / (2*this.a)};
			this.x2 = {real:(-this.b)/(2*this.a), imaginar: +Math.sqrt(-delta) / (2*this.a)};
			
		}
	}

	this.afiseaza = function(){
		if(this.x1.imaginar >= 0)
			document.getElementById("x1").innerHTML = this.x1.real.toString() + "+" +this.x1.imaginar.toString() + "i";
		else
			document.getElementById("x1").innerHTML = this.x1.real.toString() + this.x1.imaginar.toString() + "i";

		if(this.x2.imaginar>=0)
			document.getElementById("x2").innerHTML = this.x2.real.toString() + "+" + this.x2.imaginar.toString() + "i";
		else
			document.getElementById("x2").innerHTML = this.x2.real.toString() + this.x2.imaginar.toString() + "i";

	}

}

function rezolva(){
		
		var e = new ec2();
		e.citeste();
		e.rezolva();
		e.afiseaza();

		
	}

	




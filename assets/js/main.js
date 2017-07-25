
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var numAsientos ;
function redirect(event){
	numAsientos = event.target.textContent;
    document.getElementById("mostrar").innerHTML = "<br>"+"<strong>"+"Asiento n° : "+"</strong>" +(event.target.textContent);
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}

   var N = 32; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
  }

function reservar(){
	this.asiento = parseInt(numAsientos);
	this.nombre = document.getElementById("name").value;
	this.address= document.getElementById("address").value;
	this.dni = document.getElementById("dni").value;
	document.getElementById("mostrarNombre").innerHTML="<strong>Nombre del pasajero: </strong>"+this.nombre+" "+this.address+
				"<br> <strong>Número de DNI : </strong>"+this.dni + 
				"<br><strong>Asiento Reservado : </strong>"+this.asiento + "<br>";
	asientos[asiento - 1]={
		nombre:nombre,
		apellido:address,
		dni:dni
	}
	//console.log(asientos);
}

function listar(){
	html="<table>";
	for(var i=0; i<=asientos.length; i++){
		if(asientos[i]!= undefined){
			html+="<tr><td>"+asientos[i].nombre+"</td>"+
					"<td>"+asientos[i].apellido+"</td></tr>";
		}
	}
	html+="</table>";
	document.getElementById("listar").innerHTML=html;
}

function buscar(dni){
	this.dni = document.getElementById("buscarDni").value;

	for(var i in asientos){
		 if(asientos[i] != undefined && asientos[i].dni==this.dni){          
		 var asiento = parseInt(i)+1;          
		 var nombreBuscado =asientos[i].nombre;          
		 var apellidoBuscado=asientos[i].apellido; 
		 var dniBuscado=asientos[i].dni;       
		document.getElementById("pasajeroBuscado").innerHTML= "<strong>Pasajero: </strong>"+ nombreBuscado+" "+apellidoBuscado +"<br>"+
															"<strong>Número de DNI: </strong>"+ dniBuscado+"<br>"
															 +"<strong>Asiento número : </strong>" + asiento;
	}
}
}
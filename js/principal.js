/*-----------------------------------------------------------Carga inicial-----------------------------------------------------------*/
var oAcademia = new Academia();
//TODO
/*---------------------------------------------------------Fin Carga inicial---------------------------------------------------------*/

/*-----------------------------------------------------------Eventos-----------------------------------------------------------*/
//TODO

var altaAlu =document.querySelectorAll('.dropdown-menu')[0].children[0].children[0];
altaAlu.addEventListener("click",mostrarAltaAlumno,false);





/*-----------------------------------------------------------Fin Eventos-----------------------------------------------------------*/

/*-----------------------------------------------------------Funciones gr�ficas-----------------------------------------------------------*/
function mostrarAltaAlumno(oEvento) {

	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget) { //el objetivo del evento al que le has registrado el evento es el mismo

		var oFormu = document.getElementById("forAltAlu");
		oFormu.style.display = "block";


	}
}

function ocultarAltaAlumno()
{
	var oFormu = document.getElementById("forAltAlu");
	oFormu.txtDni.value="";
	oFormu.txtNombre.value="";
	oFormu.txtApellidos.value="";
	oFormu.display="none";
}
/*-----------------------------------------------------------Fin Funciones gr�ficas-----------------------------------------------------------*/

/*-----------------------------------------------------------Alta Alumno-----------------------------------------------------------*/
function altaAlumno(oEvento){
	var oE = oEvento || window.event;
	var oForm = document.getElementById("forAltAlu");
	if(validaciones(oForm))
	{
		var sDni = oForm.txtDni.value.trim();
		var sNombre = oForm.txtNombre.value.trim();
		var sApellidos = oForm.txtApellidos.value.trim();
		oAcademia.altaAlumno(sDni,sNombre,sApellidos);
	}
}
/*-----------------------------------------------------------Fin Alta Alumno-----------------------------------------------------------*/

/*-----------------------------------------------------------Auxiliares-----------------------------------------------------------*/
function validaciones(oForm){
	//TODO
	return false;
}
/*-----------------------------------------------------------Fin Auxiliares-----------------------------------------------------------*/
/*-----------------------------------------------------------Carga inicial-----------------------------------------------------------*/
var oAcademia = new Academia();
//TODO
/*---------------------------------------------------------Fin Carga inicial---------------------------------------------------------*/

/*-----------------------------------------------------------Eventos-----------------------------------------------------------*/
//TODO

var altaAlu =document.querySelectorAll('.dropdown-menu')[0].children[0].children[0];
altaAlu.addEventListener("click",mostrarAltaAlumno,false);

var formAltAlu = document.forAltAlu.enviar;
formAltAlu.addEventListener("click",altaAlumno,false);	



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
function altaAlumno(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.getElementById("forAltAlu");
	if(validaciones(oForm))
	{
		var sDni = oForm.txtDni.value.trim();
		var sNombre = oForm.txtNombre.value.trim();
		var sApellidos = oForm.txtApellidos.value.trim();
		oAcademia.altaAlumno(sDni,sNombre,sApellidos);
	}
	else
	{
		mensajeError();
	}
}
/*-----------------------------------------------------------Fin Alta Alumno-----------------------------------------------------------*/

/*-----------------------------------------------------------Auxiliares-----------------------------------------------------------*/
function validaciones(oForm)
{
	//TODO
	return false;
}

function mensajeError()
{
	var sError="";
	
	
	
	
	
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": false,
	  "progressBar": false,
	  "positionClass": "toast-bottom-full-width",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
	
	Command: toastr["error"]("Error",sError)
}
/*-----------------------------------------------------------Fin Auxiliares-----------------------------------------------------------*/
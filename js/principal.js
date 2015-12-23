/*-----------------------------------------------------------Carga inicial-----------------------------------------------------------*/
var oAcademia = new Academia();
//TODO
/*---------------------------------------------------------Fin Carga inicial---------------------------------------------------------*/

/*-----------------------------------------------------------Eventos-----------------------------------------------------------*/
//TODO

var altaAlu =document.querySelectorAll('.dropdown-menu')[0].children[0].children[0];
altaAlu.addEventListener("click",mostrarAltaAlumno,false);

var modiAlu =document.querySelectorAll('.dropdown-menu')[0].children[1].children[0];
modiAlu.addEventListener("click",mostrarModi,false);


var bajaAlu =document.querySelectorAll('.dropdown-menu')[0].children[3].children[0];
bajaAlu.addEventListener("click",mostrarBaja,false);

var formAltAlu = document.forAltAlu.enviar;
formAltAlu.addEventListener("click",altaAlumno,false);	



/*-----------------------------------------------------------Fin Eventos-----------------------------------------------------------*/

/*-----------------------------------------------------------Funciones gráficas-----------------------------------------------------------*/
function mostrarAltaAlumno(oEvento) {
	ocultarFormularios();
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)   //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forAltAlu");
		oFormu.style.display = "block";
	}
}

function mostrarModi(oEvento) {
	ocultarFormularios();
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forAluMod");
		oFormu.style.display = "block";
	}
}

function mostrarBaja(oEvento) {
	ocultarFormularios();
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forBajAlum");
		oFormu.style.display = "block";
	}
}

function ocultarAltaAlumno()
{
	var oFormu = document.getElementById("forAltAlu");
	oFormu.txtDni.value="";
	oFormu.txtNombre.value="";
	oFormu.txtApellidos.value="";
	oFormu.style.display="none";
}

function ocultarFormularios()
{
	ocultarAltaAlumno();
	var oCapaMod = document.getElementById("forAluMod");
	oCapaMod.style.display="none";

	var oCapaBaj = document.getElementById("forBajAlum");
	oCapaBaj.style.display="none";


}
/*-----------------------------------------------------------Fin Funciones gráficas-----------------------------------------------------------*/

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
		mensajeError(oForm);
	}
}
/*-----------------------------------------------------------Fin Alta Alumno-----------------------------------------------------------*/

/*-----------------------------------------------------------Auxiliares-----------------------------------------------------------*/
function validaciones(oForm)
{
	var bValido = true;
	for(var i=0;i<oForm.elements.length-1;i++)
	{
		if(oForm.elements[i].value.trim()=="")
			bValido=false;
	}
	return bValido;
}

function mensajeError(oForm)
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
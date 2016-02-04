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


var altaPro =document.querySelectorAll('.dropdown-menu')[1].children[0].children[0];
altaPro.addEventListener("click",mostrarAltaPro,false);

var modiPro =document.querySelectorAll('.dropdown-menu')[1].children[1].children[0];
modiPro.addEventListener("click",mostrarModProf,false);


var bajaPro =document.querySelectorAll('.dropdown-menu')[1].children[3].children[0];
bajaPro.addEventListener("click",mostrarBajaProf,false);


var matricular =document.getElementById('menuMatricular');
matricular.addEventListener("click",mostrarMatricular,false);


var formAltAlu = document.forAltAlu.enviar;
formAltAlu.addEventListener("click",altaAlumno,false);



var forAltPro = document.forAltaPro.enviarPro;
forAltPro.addEventListener("click",altaProfesor,false);



var forMatricular = document.matricular.enviar;
forMatricular.addEventListener("click",altaMatricular,false);






var mostrarAlum =document.querySelectorAll('.dropdown-menu')[2].children[0].children[0];
mostrarAlum.addEventListener("click",mostrarTablaAlum,false);

var mostrarProf =document.querySelectorAll('.dropdown-menu')[2].children[1].children[0];
mostrarProf.addEventListener("click",mostrarTablaProf,false);

document.forAluMod.slcAlumnos.addEventListener("change",cargarDatos);

document.forAluMod.enviar.addEventListener("click",modificarAlumno);

document.forBajAlum.slcAlumnos.addEventListener("change",cargarDatos);

document.forBajAlum.enviar.addEventListener("click",eliminarAlumno);

document.forModPro.slcProfesores.addEventListener("change",cargarDatosProf);

document.forModPro.enviar.addEventListener("click",modificarProfesor);

document.forBajPro.slcProfesores.addEventListener("change",cargarDatosProf);

document.forBajPro.enviar.addEventListener("click",eliminarProfesor);

/*-----------------------------------------------------------Fin Eventos-----------------------------------------------------------*/

/*-----------------------------------------------------------Funciones gráficas-----------------------------------------------------------*/
function mostrarAltaAlumno(oEvento) {
	vaciarElemento(document.getElementById("mostrarTablas"));
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
    vaciarElemento(document.getElementById("mostrarTablas"));
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forAluMod");
		oFormu.style.display = "block";
		var element=document.forAluMod.slcAlumnos;
		cargarAlumnos(element);
		if ("createEvent" in document) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("change", false, true);
			element.dispatchEvent(evt);
		}
		else
			element.fireEvent("onchange");
	}
}

function mostrarBaja(oEvento) {
	ocultarFormularios();
    vaciarElemento(document.getElementById("mostrarTablas"));
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forBajAlum");
		oFormu.style.display = "block";
		if(oAcademia.arrayAlumnos.length==0)
		{
			vaciarElemento(document.forBajAlum.slcAlumnos);
			document.forBajAlum.enviar.disabled=true;
			document.forBajAlum.txtNombre.value="";
			document.forBajAlum.txtApellidos.value="";
			document.forBajAlum.txtDni.value="";
		}
		else
		{
			document.forBajAlum.enviar.disabled=false;
			var element=document.forBajAlum.slcAlumnos;
			cargarAlumnos(element);
			if ("createEvent" in document) {
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("change", false, true);
				element.dispatchEvent(evt);
			}
			else
				element.fireEvent("onchange");
		}
	}
}


function mostrarAltaPro(oEvento) {
	ocultarFormularios();
    vaciarElemento(document.getElementById("mostrarTablas"));
	cargarSelctIdiomasProfesor();
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forAltaPro");
		oFormu.style.display = "block";
	}
}



function mostrarModProf(oEvento) {
	ocultarFormularios();
    vaciarElemento(document.getElementById("mostrarTablas"));
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forModPro");
		oFormu.style.display = "block";
		var element=document.forModPro.slcProfesores;
		cargarProfesores(element);
		if ("createEvent" in document) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("change", false, true);
			element.dispatchEvent(evt);
		}
		else
			element.fireEvent("onchange");
	}
}


function mostrarBajaProf(oEvento) {
	ocultarFormularios();
    vaciarElemento(document.getElementById("mostrarTablas"));
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oFormu = document.getElementById("forBajPro");
		oFormu.style.display = "block";
		if(oAcademia.arrayProfesores.length==0)
		{
			vaciarElemento(document.forBajPro.slcProfesores);
			document.forBajPro.enviar.disabled=true;
			document.forBajPro.txtNombre.value="";
			document.forBajPro.txtApellidos.value="";
			document.forBajPro.txtDni.value="";
			document.forBajPro.txtIdioma.value="";
		}
		else
		{
			document.forBajAlum.enviar.disabled=false;
			var element=document.forBajPro.slcProfesores;
			cargarProfesores(element);
			if ("createEvent" in document) {
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("change", false, true);
				element.dispatchEvent(evt);
			}
			else
				element.fireEvent("onchange");
		}
	}
}


function mostrarMatricular(oEvento){

    vaciarElemento(document.getElementById("mostrarTablas"));
	ocultarFormularios();

	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		if(oAcademia.arrayAlumnos.length==0)
			mensajeError("No hay alumnos dados de alta");	
		else
		{
			var oFormu = document.getElementById("matricular");
			oFormu.style.display = "block";
			cargarSelct();
			document.getElementById("matricular").sIdiomas.addEventListener("change",cargarProfesor,false);
			cargarDni();
			cargarProfesor();
		}
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

	var oCapaAltAlu = document.getElementById("forAltAlu");
	oCapaAltAlu.style.display="none";

	var oCapaAltPro = document.getElementById("forAltaPro");
	oCapaAltPro.style.display="none";


	var oCapaModProf = document.getElementById("forModPro");
	oCapaModProf.style.display="none";


	var oCapaBajaProf = document.getElementById("forBajPro");
	oCapaBajaProf.style.display="none";


	var oCapaMatricular = document.getElementById("matricular");
	oCapaMatricular.style.display="none";




}
/*-----------------------------------------------------------Fin Funciones gráficas-----------------------------------------------------------*/

/*-----------------------------------------------------------Alta Alumno-----------------------------------------------------------*/
function altaAlumno(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.getElementById("forAltAlu");




	if(validar(oE)) {

		var sDni = oForm.txtDni.value.trim();
		var sNombre = oForm.txtNombre.value.trim();
		var sApellidos = oForm.txtApellidos.value.trim();
		var oAlumno = new Alumno(sDni.toUpperCase(), sNombre, sApellidos);
		oAcademia.altaAlumno(oAlumno);
		ocultarFormularios();
		mensajeExito("Alumno Añadido");
	}

}


function altaProfesor(oEvento)
{
	var oE = oEvento || window.event;
	var oForm = document.getElementById("forAltaPro");




	if(validarProf(oE)) {

		var sDni = oForm.txtDni.value.trim();
		var sNombre = oForm.txtNombre.value.trim();
		var sApellidos = oForm.txtApellidos.value.trim();
		var sCurso=oForm.sIdiomasP.value;
		var oProfesor = new Profesor(sDni.toUpperCase(), sNombre, sApellidos,sCurso);
		oAcademia.altaProfesor(oProfesor);
		ocultarFormularios();
		mensajeExito("Profesor Añadido");
	}

}



function altaMatricular(oEvento){

	var oE = oEvento || window.event;
	var oForm = document.getElementById("matricular");


	var sDni=oForm.sDni.value;
	var sID=oForm.sIdiomas.value;
	var sPro=oForm.sProfesor.value;


	var oMatricula= new Matricula(sDni,sID,sPro);
	oAcademia.matricular(oMatricula);
	ocultarFormularios();
	mensajeExito("Alumno Matriculado");



}




function mostrarTablaAlum(oEvento){

	ocultarFormularios();
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oCapa = document.getElementById("mostrarTablas");
		oCapa.style.display = "block";
		vaciarElemento(oCapa);
		oCapa.appendChild(oAcademia.tablaListadoAlumnos());
	}


}

function mostrarTablaProf(oEvento){

	ocultarFormularios();
	var oE = oEvento || window.event;     // Guarda el Objeto que ha disparado el evento
	if (oE.target == oE.currentTarget)  //el objetivo del evento al que le has registrado el evento es el mismo
	{
		var oCapa = document.getElementById("mostrarTablas");
		oCapa.style.display = "block";
		vaciarElemento(oCapa);
		oCapa.appendChild(oAcademia.tablaListadoProfesores());
	}


}


function vaciarElemento(oCapa){

	while(oCapa.children.length>0){

	oCapa.removeChild(oCapa.children[0]);



	}




}








/*-----------------------------------------------------------Fin Alta Alumno-----------------------------------------------------------*/

/*-----------------------------------------------------------Alta Profesor-----------------------------------------------------------*/






/*-----------------------------------------------------------Fin Alta Profesor -----------------------------------------------------------*/

/*-----------------------------------------------------------Auxiliares-----------------------------------------------------------*/
function validar(oE){
	var bValido = true;
	var sErrores = "";  //se almacenan aqui todos los errores

	//Validaciones

	//Campo nombre
	var sNombre = document.forAltAlu.txtNombre.value.trim(); //sin espacios por delante ni por detras
	//Campo corregido con trim
	document.forAltAlu.txtNombre.value=document.forAltAlu.txtNombre.value.trim();

	var oExpReg = /^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,40}$/;

	if(oExpReg.test(sNombre) == false){
		if(bValido){  //Si es el primero en fallar,coge el foco
			bValido = false;
			//Este camo obtiene el foco
			document.forAltAlu.txtNombre.focus();
		}

		sErrores += "Nombre incorrecto<br>";

		//Marcar error
		document.forAltAlu.txtNombre.className = "form-control error";
	}else{
		//Desmarcar el error
		document.forAltAlu.txtNombre.className = "form-control";
	}



	//Campo Apellidos
	var sApellido = document.forAltAlu.txtApellidos.value.trim(); //sin espacios por delante ni por detras
	//Campo corregido con trim
	document.forAltAlu.txtApellidos.value=document.forAltAlu.txtApellidos.value.trim();

	var oExpReg2 = /^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,60}$/;

	if(oExpReg2.test(sApellido) == false){
		if(bValido){  //Si es el primero en fallar,coge el foco
			bValido = false;
			//Este camo obtiene el foco
			document.forAltAlu.txtApellidos.focus();
		}

		sErrores += "Apellido incorrecto<br>";

		//Marcar error
		document.forAltAlu.txtApellidos.className = "form-control error";
	}else{
		//Desmarcar el error
		document.forAltAlu.txtApellidos.className = "form-control";
	}

	//Campo DNI

	var sDni = document.forAltAlu.txtDni.value.trim(); //sin espacios por delante ni por detras
	//Campo corregido con trim
	document.forAltAlu.txtDni.value=document.forAltAlu.txtDni.value.trim();

	var oExpReg3 = /^\d{8}[a-zA-Z]$/;

	if(oExpReg3.test(sDni) == false){
		if(bValido){  //Si es el primero en fallar,coge el foco
			bValido = false;
			//Este camo obtiene el foco
			document.forAltAlu.txtDni.focus();
		}

		sErrores += "DNI incorrecto<br>";

		//Marcar error
		document.forAltAlu.txtDni.className = "form-control error";
	}else{
		//Desmarcar el error
		document.forAltAlu.txtDni.className = "form-control";
	}


	//Resultado
	if(bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		mensajeError(sErrores);
	}

	return bValido;
}



function validarProf(oE){
	var bValido = true;
	var sErrores = "";  //se almacenan aqui todos los errores

	//Validaciones



	//Campo nombre
	var sNombre = document.forAltaPro.txtNombre.value.trim(); //sin espacios por delante ni por detras
	//Campo corregido con trim
	document.forAltaPro.txtNombre.value=document.forAltaPro.txtNombre.value.trim();

	var oExpReg = /^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,40}$/;

	if(oExpReg.test(sNombre) == false){
		if(bValido){  //Si es el primero en fallar,coge el foco
			bValido = false;
			//Este camo obtiene el foco
			document.forAltAlu.txtNombre.focus();
		}

		sErrores += "Nombre incorrecto<br>";

		//Marcar error
		document.forAltaPro.txtNombre.className = "form-control error";
	}else{
		//Desmarcar el error
		document.forAltaPro.txtNombre.className = "form-control";
	}



	//Campo Apellidos
	var sApellido = document.forAltaPro.txtApellidos.value.trim(); //sin espacios por delante ni por detras
	//Campo corregido con trim
	document.forAltaPro.txtApellidos.value=document.forAltaPro.txtApellidos.value.trim();

	var oExpReg2 = /^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,60}$/;

	if(oExpReg2.test(sApellido) == false){
		if(bValido){  //Si es el primero en fallar,coge el foco
			bValido = false;
			//Este camo obtiene el foco
			document.forAltaPro.txtApellidos.focus();
		}

		sErrores += "Apellido incorrecto<br>";

		//Marcar error
		document.forAltaPro.txtApellidos.className = "form-control error";
	}else{
		//Desmarcar el error
		document.forAltaPro.txtApellidos.className = "form-control";
	}

	//Campo DNI

	var sDni = document.forAltaPro.txtDni.value.trim(); //sin espacios por delante ni por detras
	//Campo corregido con trim
	document.forAltaPro.txtDni.value=document.forAltaPro.txtDni.value.trim();

	var oExpReg3 = /^\d{8}[a-zA-Z]$/;

	if(oExpReg3.test(sDni) == false){
		if(bValido){  //Si es el primero en fallar,coge el foco
			bValido = false;
			//Este camo obtiene el foco
			document.forAltaPro.txtDni.focus();
		}

		sErrores += "DNI incorrecto<br>";

		//Marcar error
		document.forAltaPro.txtDni.className = "form-control error";
	}else{
		//Desmarcar el error
		document.forAltaPro.txtDni.className = "form-control";
	}


	//Resultado
	if(bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		mensajeError(sErrores);
	}

	return bValido;
}




function validaciones(oForm)
{
	var bValido=true;
	for(var i=1;i<oForm.elements.length-2;i++)
	{
		if(oForm.elements[i].value.trim()=="")
		{
			bValido=false;
		}
	}
	return bValido;
}

function mensajeError(sTexto)
{

	
	
	
	
	
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
	};
	
	Command: toastr["error"](sTexto);
}
function mensajeExito(sTexto)
{






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
	};

	Command: toastr["success"](sTexto);
}



/*-----------------------------------------------------------Fin Auxiliares-----------------------------------------------------------*/

oAcademia.altaAlumno(new Alumno("49898786X","Antonio","Sanchez"));
oAcademia.altaAlumno(new Alumno("49898886X","Sergio","Lopez"));
oAcademia.altaAlumno(new Alumno("49891186X","Maria","Perez"));
oAcademia.altaProfesor(new Profesor("20506080F","Pepe","Lupo","Inglés"));




function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else // code for IE5 and IE6
	{
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",filename,false);

	xhttp.send();

	return xhttp.responseXML;
}

var oXMLidiomas = loadXMLDoc("idiomas.xml");





function cargarSelct (){

	var oIdiomas=oXMLidiomas.getElementsByTagName("idioma");

	var oSelect=document.querySelector("#sIdiomas");

	borrarTodosOption(oSelect);


	for(var i=0;i<oIdiomas.length;i++){

		var sNombre=oIdiomas[i].querySelector("nombre").textContent;
		var oOption=document.createElement("OPTION");
		oOption.value=sNombre;
		var oTexto =document.createTextNode(sNombre);
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

	}

}

function cargarSelctIdiomasProfesor (){

	var oIdiomas=oXMLidiomas.getElementsByTagName("idioma");

	var oSelect=document.querySelector("#sIdiomasP");

	borrarTodosOption(oSelect);


	for(var i=0;i<oIdiomas.length;i++){

		var sNombre=oIdiomas[i].querySelector("nombre").textContent;
		var oOption=document.createElement("OPTION");
		oOption.value=sNombre;
		var oTexto =document.createTextNode(sNombre);
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);

	}

}

function cargarProfesor (){


	var oSelect=document.querySelector("#sProfesor");

	borrarTodosOption(oSelect);

	var iCont=0;
	for(var i=0;i<oAcademia.arrayProfesores.length;i++){
		var sIdioma=document.getElementById("matricular").sIdiomas.value;
		if(oAcademia.arrayProfesores[i].curso==sIdioma){
			var sNombre=oAcademia.arrayProfesores[i].Nombre;
			var oOption=document.createElement("OPTION");
			oOption.value=sNombre;
			var oTexto =document.createTextNode(sNombre);
			oOption.appendChild(oTexto);
			oSelect.appendChild(oOption);
			iCont++;
		}
	}

	if(iCont==0){
		var sNombre="No hay profesores para ese idioma";
		var oOption=document.createElement("OPTION");
		oOption.value="0";
		var oTexto =document.createTextNode(sNombre);
		oOption.appendChild(oTexto);
		oSelect.appendChild(oOption);
		document.getElementById("matricular").enviar.disabled=true;
	}else{
		document.getElementById("matricular").enviar.disabled=false;
	}





}



function cargarDni() {



	var oSelect=document.querySelector("#sDni");

	borrarTodosOption(oSelect);


	for (var i=0;i<oAcademia.arrayAlumnos.length;i++){

		if(oAcademia.arrayAlumnos[i].idMatricula=="") {

			var sdni = oAcademia.arrayAlumnos[i].DNI;
			var sNombre = oAcademia.arrayAlumnos[i].Nombre;
			var sTexto = sdni + " - " + sNombre;
			var oOption = document.createElement("OPTION");
			oOption.value = sdni;
			var oTexto = document.createTextNode(sTexto);
			oOption.appendChild(oTexto);
			oSelect.appendChild(oOption);

		}




	}



}





function borrarTodosOption(oSelect){


	var oOption=oSelect.getElementsByTagName("option");

	while (oOption.length>0){

		oOption[0].parentNode.removeChild(oOption[0]);

	}

}


function cargarAlumnos(oSelect)
{
    vaciarElemento(oSelect);
    for(var i=0;i<oAcademia.arrayAlumnos.length;i++)
    {
        var oOption=document.createElement("option");
        var sDni=oAcademia.arrayAlumnos[i].DNI;
        var sNombre=oAcademia.arrayAlumnos[i].Nombre;
        oOption.value=i;
        oOption.appendChild(document.createTextNode(sDni+" - "+sNombre));
        oSelect.appendChild(oOption);
    }
}
function cargarDatos(oEvento)
{
    var oE = window.event||oEvento;
    var iAluSel=oE.target.value;
    //console.log(oE.target);
    oE.target.parentNode.parentNode.parentNode.parentNode.txtNombre.value=oAcademia.arrayAlumnos[iAluSel].Nombre;
    oE.target.parentNode.parentNode.parentNode.parentNode.txtApellidos.value=oAcademia.arrayAlumnos[iAluSel].Apellidos;
    oE.target.parentNode.parentNode.parentNode.parentNode.txtDni.value=oAcademia.arrayAlumnos[iAluSel].DNI;
}

function modificarAlumno()
{
    var bValido=true;
    var sErrores="";
    var sNombre=document.forAluMod.txtNombre.value.trim();
    var oRegExp=/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,40}$/;
    if(!oRegExp.test(sNombre)){
        if(bValido)
        {
            bValido = false;
            document.forAluMod.txtNombre.focus();
        }
        sErrores += "Nombre incorrecto<br>";
        document.forAluMod.txtNombre.className = "form-control error";
    }else
    {
        document.forAluMod.txtNombre.className = "form-control";
    }
    var sApellidos=document.forAluMod.txtApellidos.value.trim();

    oRegExp=/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,60}$/;
    if(!oRegExp.test(sApellidos)){
        if(bValido)
        {
            bValido = false;
            document.forAluMod.txtApellidos.focus();
        }
        sErrores += "Apellido incorrecto<br>";
        document.forAluMod.txtApellidos.className = "form-control error";
    }else
    {
        document.forAluMod.txtApellidos.className = "form-control";
    }
    if(bValido)
    {
        var iAluSel=document.forAluMod.slcAlumnos.value;
        oAcademia.arrayAlumnos[iAluSel].Nombre=document.forAluMod.txtNombre.value;
        oAcademia.arrayAlumnos[iAluSel].Apellidos=document.forAluMod.txtApellidos.value;
        ocultarFormularios();
        mensajeExito("Alumno modificado correctamente");
    }
    else
    {
        mensajeError(sErrores);
    }
}

function eliminarAlumno()
{
    var iAluSel=document.forBajAlum.slcAlumnos.value;
    oAcademia.arrayAlumnos.splice(iAluSel,1);
    ocultarFormularios();
    mensajeExito("Alumno dado de baja con éxito");
}

function cargarProfesores(oSelect)
{
	vaciarElemento(oSelect);
    for(var i=0;i<oAcademia.arrayProfesores.length;i++)
    {
        var oOption=document.createElement("option");
        var sDni=oAcademia.arrayProfesores[i].DNI;
        var sNombre=oAcademia.arrayProfesores[i].Nombre;
        oOption.value=i;
        oOption.appendChild(document.createTextNode(sDni+" - "+sNombre));
        oSelect.appendChild(oOption);
    }
}

function cargarDatosProf(oEvento)
{
    var oE = window.event||oEvento;
    var iProfSel=oE.target.value;
    //console.log(oE.target);
    oE.target.parentNode.parentNode.parentNode.parentNode.txtNombre.value=oAcademia.arrayProfesores[iProfSel].Nombre;
    oE.target.parentNode.parentNode.parentNode.parentNode.txtApellidos.value=oAcademia.arrayProfesores[iProfSel].Apellidos;
    oE.target.parentNode.parentNode.parentNode.parentNode.txtDni.value=oAcademia.arrayProfesores[iProfSel].DNI;
	oE.target.parentNode.parentNode.parentNode.parentNode.txtIdioma.value=oAcademia.arrayProfesores[iProfSel].curso;
}

function modificarProfesor()
{
    var bValido=true;
    var sErrores="";
    var sNombre=document.forModPro.txtNombre.value.trim();
    var oRegExp=/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,40}$/;
    if(!oRegExp.test(sNombre)){
        if(bValido)
        {
            bValido = false;
            document.forModPro.txtNombre.focus();
        }
        sErrores += "Nombre incorrecto<br>";
        document.forModPro.txtNombre.className = "form-control error";
    }else
    {
        document.forModPro.txtNombre.className = "form-control";
    }
    var sApellidos=document.forModPro.txtApellidos.value.trim();

    oRegExp=/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]{3,60}$/;
    if(!oRegExp.test(sApellidos)){
        if(bValido)
        {
            bValido = false;
            document.forModPro.txtApellidos.focus();
        }
        sErrores += "Apellido incorrecto<br>";
        document.forModPro.txtApellidos.className = "form-control error";
    }else
    {
        document.forModPro.txtApellidos.className = "form-control";
    }
    if(bValido)
    {
        var iProfSel=document.forModPro.slcProfesores.value;
        oAcademia.arrayProfesores[iProfSel].Nombre=document.forModPro.txtNombre.value;
        oAcademia.arrayProfesores[iProfSel].Apellidos=document.forModPro.txtApellidos.value;
        ocultarFormularios();
        mensajeExito("Profesor modificado correctamente");
    }
    else
    {
        mensajeError(sErrores);
    }
}

function eliminarProfesor()
{
    var iProfSel=document.forBajPro.slcProfesores.value;
    oAcademia.arrayProfesores.splice(iProfSel,1);
    ocultarFormularios();
    mensajeExito("Profesor dado de baja con éxito");
}
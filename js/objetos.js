/*----------------------------------Persona---------------------------------------*/
function Persona(sDNI,sNombre,sApellidos)
{
	this.DNI=sDNI;
	this.Nombre=sNombre;
	this.Apellidos=sApellidos;
}

/*--------------------------------Fin Persona-------------------------------------*/


/*---------------------------------Alumno--------------------------------------*/
function Alumno(sDNI,sNombre,sApellidos)
{
	Persona.apply(this,[sDNI,sNombre,sApellidos]);
	this.idMatricula="";
}

Alumno.prototype=Object.create(Persona.prototype);
Alumno.prototype.constructor= Alumno;


/*-------------------------------Fin Alumno------------------------------------*/



/*-------------------------------Matricula------------------------------------*/

function Matricula(sDNI,sId,sProfesor)
{
	this.DNI=sDNI;
	this.idiomas=sId;
	this.profesor=sProfesor;

}




/*-------------------------------Fin Matricula------------------------------------*/




/*---------------------------------Profesor--------------------------------------*/

function Profesor(sDNI,sNombre,sApellidos,sIdioma)
{
	Persona.apply(this,[sDNI,sNombre,sApellidos]);
	this.curso=sIdioma;
}

Profesor.prototype=Object.create(Persona.prototype);
Profesor.prototype.constructor= Profesor;


/*---------------------------------Fin Profesor--------------------------------------*/

/*---------------------------------Academia-----------------------------------*/
function Academia(){
	this.arrayAlumnos=new Array();
	this.arrayProfesores=new Array();
	this.arrayMatriculas=new Array();
}

Academia.prototype.altaAlumno=function (oAlum) {
	this.arrayAlumnos.push(oAlum);
}

Academia.prototype.altaProfesor=function (oProf){
		this.arrayProfesores.push(oProf);

}

Academia.prototype.matricular=function (oMatricula) {
	this.arrayMatriculas.push(oMatricula);


	for(i=0;i<this.arrayAlumnos.length;i++){// Recorro todo el array de alumnos

		if(this.arrayAlumnos[i].DNI==oMatricula.DNI)//Comparo el DNI que me han dado con el DNI del alumno del array

			this.arrayAlumnos[i].idMatricula=oMatricula.idiomas;// Meto en la variable el alumno con el mismo dni


	}


// todo si no hay alumnos

}



/*-------------------------------Tablas Listados------------------------------*/





Academia.prototype.tablaListadoAlumnos=function(){

	var oTabla=document.createElement("TABLE");
	oTabla.setAttribute("class","table");
	var oCabezera=oTabla.createTHead();
	var oLineaCabezera=oCabezera.insertRow(0);

	var oCelda=oLineaCabezera.insertCell(0);
	var oTexto=document.createTextNode("NOMBRE");
	oCelda.appendChild(oTexto);



	oCelda=oLineaCabezera.insertCell(1);
	oTexto=document.createTextNode("APELLIDOS");
	oCelda.appendChild(oTexto);



	oCelda=oLineaCabezera.insertCell(2);
	oTexto=document.createTextNode("DNI");
	oCelda.appendChild(oTexto);

	oCelda=oLineaCabezera.insertCell(3);
	oTexto=document.createTextNode("MATRICULADO");
	oCelda.appendChild(oTexto);

	var oTBody =document.createElement("TBODY");
	oTabla.appendChild(oTBody);
	for(var i=0;i<this.arrayAlumnos.length;i++){

		var oLinea=oTBody.insertRow(-1);

		var oCelda=oLinea.insertCell(0);
		var oTexto=document.createTextNode(this.arrayAlumnos[i].Nombre);
		oCelda.appendChild(oTexto);



		oCelda=oLinea.insertCell(1);
		oTexto=document.createTextNode(this.arrayAlumnos[i].Apellidos);
		oCelda.appendChild(oTexto);



		oCelda=oLinea.insertCell(2);
		oTexto=document.createTextNode(this.arrayAlumnos[i].DNI);
		oCelda.appendChild(oTexto);

		oCelda=oLinea.insertCell(3);
		var sMatr;
		if(this.arrayAlumnos[i].idMatricula==""){
			sMatr="NO";
		}else{
			sMatr="SI";
		}
		oTexto=document.createTextNode(sMatr);
		oCelda.appendChild(oTexto);


	}



return(oTabla);


}

Academia.prototype.tablaListadoProfesores=function(){

	var oTabla=document.createElement("TABLE");
	oTabla.setAttribute("class","table");
	var oCabezera=oTabla.createTHead();
	var oLineaCabezera=oCabezera.insertRow(0);

	var oCelda=oLineaCabezera.insertCell(0);
	var oTexto=document.createTextNode("NOMBRE");
	oCelda.appendChild(oTexto);



	oCelda=oLineaCabezera.insertCell(1);
	oTexto=document.createTextNode("APELLIDOS");
	oCelda.appendChild(oTexto);



	oCelda=oLineaCabezera.insertCell(2);
	oTexto=document.createTextNode("DNI");
	oCelda.appendChild(oTexto);

	oCelda=oLineaCabezera.insertCell(3);
	oTexto=document.createTextNode("CURSO");
	oCelda.appendChild(oTexto);

	var oTBody =document.createElement("TBODY");
	oTabla.appendChild(oTBody);
	for(var i=0;i<this.arrayProfesores.length;i++){

		var oLinea=oTBody.insertRow(-1);

		var oCelda=oLinea.insertCell(0);
		var oTexto=document.createTextNode(this.arrayProfesores[i].Nombre);
		oCelda.appendChild(oTexto);



		oCelda=oLinea.insertCell(1);
		oTexto=document.createTextNode(this.arrayProfesores[i].Apellidos);
		oCelda.appendChild(oTexto);



		oCelda=oLinea.insertCell(2);
		oTexto=document.createTextNode(this.arrayProfesores[i].DNI);
		oCelda.appendChild(oTexto);

		oCelda=oLinea.insertCell(3);

		oTexto=document.createTextNode(this.arrayProfesores[i].curso);
		oCelda.appendChild(oTexto);


	}



	return(oTabla);


}






/*-------------------------------Fin Tablas Listado ------------------------------*/



Academia.prototype.buscarAlumno=function(sNif){ //lo devuelve cuando lo llama el metodo como en el metodo comprar.

	var i;
	var oAlumno=null;

	for(i=0;i<this.arrayAlumnos.length;i++){// Recorro todo el array de alumnos

		if(this.arrayAlumnos[i].DNI==sNif)//Comparo el DNI que me han dado con el DNI del alumno del array

			oAlumno=this.arrayAlumnos[i];// Meto en la variable el alumno con el mismo dni


	}


	return oAlumno; // si es nulo lo ha encontrado y si no es nulo es que lo ha encontrado y te devuelve el alumno entero


};

/*-------------------------------Fin Academia---------------------------------*/
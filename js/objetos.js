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
	Vehiculo.apply(this,[sDNI,sNombre,sApellidos]);
	this.idMatricula=-1;
}

/*-------------------------------Fin Alumno------------------------------------*/

/*---------------------------------Academia-----------------------------------*/
function Academia(){
	this.arrayAlumnos=new Array();
	this.arrayProfesores=new Array();
	this.arrayLibros=new Array();
	this.arrayIdiomas=new Array();
}

Academia.prototype.altaAlumno=function (oAlum){
	this.arrayAlumnos.push(oAlum);
}
/*-------------------------------Fin Academia---------------------------------*/
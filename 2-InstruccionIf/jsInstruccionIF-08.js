/*Comentarios
Tobias Escobar
Ejercicio 8*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	
		if(edad >= 18 && estadoCivil == "Soltero"){
			alert("Es soltero y no es menor.");
		}
}
/*Comentarios
Tobias Escobar
Ejercicio 7 IF*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

		if(edad <= 17 && estadoCivil != "Soltero"){
			alert("Es muy pequeño para no ser soltero.");
		}
}
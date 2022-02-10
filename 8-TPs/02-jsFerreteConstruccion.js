/*Comentarios
Tobias Escobar
Trabajo practico 2*/
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoDelTerreno;
    let anchoDelTerreno;
    let perimetro;
    let alambre;
    let mensajeAMostrar;

    largoDelTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoDelTerreno = parseFloat(document.getElementById("txtIdAncho").value); 

    perimetro = (largoDelTerreno + anchoDelTerreno) * 2;

    alambre = perimetro * 3;

    mensajeAMostrar = "Se necesita comprar " + alambre + " metros de alambre";

    alert(mensajeAMostrar);
}   

function Circulo () 
{
    let radio; 
    let alambre;
    let mensajeAMostrar;

    const PI = 3.14 

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    alambre = radio * (2 * PI).toFixed(2); 

    mensajeAMostrar = "Se necesita comprar " + alambre + " metros de alambre";

    alert(mensajeAMostrar);

}
function Materiales () 
{
	let largoDelTerreno;
    let anchoDelTerreno;
    let area;
    let bolsasDeCemento;
    let bolsasDeCal;

    largoDelTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoDelTerreno = parseInt(document.getElementById("txtIdAncho").value); 

    area = largoDelTerreno * anchoDelTerreno;

    bolsasDeCemento = area * 2;
    bolsasDeCal = area * 3;

    mensajeAMostrar = "Se necesita usar " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal"; 

    alert(mensajeAMostrar); 
}
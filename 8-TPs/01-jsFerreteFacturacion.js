/*Comentarios
Tobias Escobar
Trabajo practico 1*/
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    let mensaje;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precio1 + precio2 + precio3;
    resultado = resultado.toFixed(2); 
    mensaje = ("La suma es $" + resultado); 

    alert(mensaje); 
}

function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    let promedio;
    let mensaje;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precio1 + precio2 + precio3;

    promedio = resultado / 3; 
    promedio = promedio.toFixed(2); 

    mensaje = ("El promedio es $" + resultado); 

    alert(mensaje); 
}
function PrecioFinal () 
{
	
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    let iva;
    let precioFinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precio1 + precio2 + precio3;
    
    iva = resultado * 21 / 100;  
    
    precioFinal = resultado + iva; 
    precioFinal = precioFinal.toFixed(2);

    mensaje = ("El precio final de los productos incluyendo el iva es de $" + precioFinal); 

    alert(mensaje);
}
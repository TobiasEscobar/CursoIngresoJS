/*Comentarios
Tobias Escobar
Ejercicio 7*/ 
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    let numero1;
    let numero2;
    let resultado;	
	
    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = "La suma es " + (numero1 + numero2); 

    alert(resultado);	
}

function restar()
{
    let numero1;
    let numero2;
    let resultado;

    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = "La resta es " + (numero1 - numero2);

    alert(resultado);
}

function multiplicar()
{ 
    let numero1;
    let numero2;
    let mresultado;

    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = "La muliplicacion es " + (numero1 * numero2); 

    alert(resultado);
}

function dividir()
{
    let numero1;
    let numero2;
    let resultado;

    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = "La division es " + (numero1 / numero2); 

    alert(resultado);
}
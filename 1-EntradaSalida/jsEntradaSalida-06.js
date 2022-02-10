/*Comentarios
Tobias Escobar
Ejercicio 6*/
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

   let numero1;
   let numero2;
   let numeroParciado1;
   let numeroParciado2;
   let mensajeAmostrar;

   numero1 = document.getElementById("txtIdNumeroUno").value;
   numero2 = document.getElementById("txtIdNumeroDos").value;

   numeroParciado1 = parseInt(numero1);
   numeroParciado2 = parseInt(numero2);

   mensajeAmostrar = "La suma es " + (numeroParciado1 + numeroParciado2); 

   alert(mensajeAmostrar);
}
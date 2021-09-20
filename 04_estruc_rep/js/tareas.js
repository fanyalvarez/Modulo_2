console.log("-----Ejercicio 1-----")

let anaconda = "anaconda"
//output: true
let belzeebub = "belzeebub"
//output: true
let koder = "koder"
//"output: false
let cerveza = "cerveza"
//output: false


console.log("-----Ejercicio 2 OK-----")
/*Pedir al usuario usuario un numero entre 1 y 10
  Imprimir la tabla de multiplicar de ese número
	p.ej.
	3 x 1 = 3
	3 x 2 = 6*/

//let numero = prompt("Inserta el numero de la tabla de multiplicar deseas consultar");
let numero = "2"
for (i = 1; i <= 10; i++) {
	console.log(numero + "x" + i + "=" + ((numero * i)))
}



console.log("-----Ejercicio 3-----")
/*Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero*/

//let table= Number (prompt("Ingrese un numero del 10 al 100"))
let table= Number(12)

if (table >= 10 && table <= 100) {
	for (let i = 1; i <= table; i++) {
		// console.log(table*i)
		if (i % 2 === 0) {
			console.log(i)
		}
	}
}



console.log("-----Ejercicio 4  ok-----")
/*Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
let cadena = prompt("introduzca un número")*/

let numeros = ("1234")
let numerosLength = numeros.length
let resultnumeros = ""

//if (condition) {
	

console.log (resultnumeros)

console.log("-----Ejercicio 5-----")
/*Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********          */
let dato = ("*")
let result = ""

for (i = 0; i < 10; i++) {

	if (i < 10 ) {
		result += "*"
	}
	console.log(result)
}

console.log("-----Ejercicio 6-----")
/*Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168*/



console.log("-----Ejercicio 7-----")
/*Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders	
output: helloKoders*/






console.log("-----Ejercicio 8-----")

//Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores//
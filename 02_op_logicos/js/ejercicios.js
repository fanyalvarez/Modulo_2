//EJERCICIOS XD..... 



console.log("------ejercicio 1-----")
	//Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números
let numero1 = prompt("Ingresa un numero")
let numero2 = prompt("Ingresa otro numero")
//let funcion = prompt("Que funcion deseas realizar?")
	numero1 = Number(numero1)
	numero2	= Number(numero2)

let resultadoSuma= numero1 + numero2
	console.log(resultadoSuma)

let resultadoResta= numero1 - numero2
	console.log(resultadoResta)	

let resultadoDivision= numero1 / numero2
	console.log(resultadoDivision)

let resultadoMultimplicacion= numero1 * numero2
	console.log(resultadoMultimplicacion)


console.log("------ejercicio 2-----")	
//Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.
/*let numero2_1 = prompt("Ingresa un numero")
let numero2_2 = prompt("Ingresa ot
ro numero")
	numero2_1 = Number(numero2_1)
	numero2_2	= Number(numero2_2)
*/
let resulComp = numero1 > numero2
	console.log(resulComp)


console.log("------ejercicio 3-----")
//Pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto.

let letra1 = prompt("Ingresa una letra")
let letra2 = prompt("Ingresa otra letra")

	if (letra1 < letra2) {
		console.log(`La primera letra ${letra1} esta antes de la segunda letra dentro del alfabeto`)
	} else {
		console.log(`La segunda letra ${letra2} esta antes de la primera letra dentro del alfabeto`)
	} 

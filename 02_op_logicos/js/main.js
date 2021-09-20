//1-SEPT

var greeting = "Hola Koders!!"
console.log(greeting)

//console.error("Esto es un error e imprime una alerta de que es un error")

console.warn("Esto es warning e imprimir una alerta de atencion")

// metodos de interactaur con el usuario

///alert("abre una ventana de mensaje")

//prompt("lanza un mensaje y podemos acceder a la inf pero nos regresa un string")
//  rergresa un STRING
//let acceder = prompt("con let que es una variable podemos acceder a la info")
//console.log (acceder) 


// OPERADORES 

console.log  ("------OPERADORES ARITMETICOS")
/* 
	...+
	..-
	...*
	.../
	...%
	...()
*/

let operation = 5+3-10*3
	console.log(operation)

let number123 = 1
	number123 += 10
//	number -= 10
//	number *= 10
//	number /= 10
	console.log(number123)

console.log("-----OPERADORES RACIONALES")
/* 
	... <     >
	...<=    >=
	... ==    ===
	....!=    !== (diferente)
*/

console.log(8 <  9)
console.log(8 >  9)
console.log(8 <= 9)
console.log(8 <= 9)

let string1 = "hola"
let string2 = "hola koder"
	console.log(string1 > string2) //resultado es un buleano

console.log	 ("----OPERADORES DE ASIGNACION")
/*
	... =  ASIGNAR VALOR A UNA VARIABLE
	... ==  COMPARACION DE VALORES
	... === COMPARACION DE TIPO DE DATTO Y DE VALOR
*/
 console.log(7 == 7)   //comparacion de los valore-resultado es true
 console.log("7" == 7) //comparacion de los valore-resultado es true
 console.log("7" === 7)//comparacion de los valore y tipo -resultado es false

/*

	....+=
*/

let number1 = 1
	//number1 = number1 + 5
	number1 += 10
	number1	+  10
	// los dos arrojan 11 ya que es lo mismo
	number1 *= 10
	number1 /=  2

	console.log(number1)
	
console.log("----OPERADORES DE ICREMENTO | DECREMENTO")

let number2 = 2
	number2++
	//number2--
	console.log(number2) 

let number3 = 2
	++number3
	console.log(number3)



console.log("----switch-----")
//es como el for, infinito y siempre es necesario colocar el brak

let today = 4

switch(today){
	case 0:
		console.log("es domingo")
		break;
	case 1:
		console.log("es lunes")
		break;	
	default:
		console.log("dia invalido")
		break;
}



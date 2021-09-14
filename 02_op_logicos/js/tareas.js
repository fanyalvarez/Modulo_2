//-----TAREAS-----

console.log("------Tarea 1-----")
//Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

let nombre = prompt("Ingresa tu nombre")
let peso = prompt("ingresa tu peso en kg")
	peso = Number(peso)	

let Luna= (peso * 0.165)
	console.log (`Hola ${nombre} tu peso en la Luna seria de ${Luna} kg`)

let Marte= (peso*0.378)
	console.log (`Hola ${nombre} tu peso en la Marte seria de ${Marte} kg`)

let Jupiter= (peso*2.527)
	console.log (`Hola ${nombre} tu peso en la Jupiter seria de ${Jupiter} kg`)
	

//preguntar como puedo redondear un resultado 
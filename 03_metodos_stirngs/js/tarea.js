
console.log ("----Ejercicio 1 OK ----")
/*   Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"*/

    let nombre = ("Ingresa tu nombre")
    let apellido = ("Ingresa tu apellido")

	let nombreCom= nombre.toLowerCase()+" "+ apellido.toUpperCase()
	console.log (nombreCom)



console.log ("----Ejercicio 2 OK ----")
/*    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre*/
//let nombreCompleto = prompt ("Ingresa tu nombre completo")
	console.log (nombreCom.length)



console.log ("----Ejercicio 3 OK----")
/*Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.*/
let vocales = nombreCom.match(/[aeiou]/gi)  // g es global e i no importa si es min o may 
	console.log (vocales)	



console.log ("----Ejercicio 4 OK----")
/*    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario*/
let text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
let newText = text.replace("estudiante", "Koder");
console.log (newText)



console.log ("----Ejercicio 5 OK----")
/*    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"*/

let palabra1 =("la palabra")
let palabra2 =("otra palabra")

if (palabra1.length > palabra2.length) {
    console.log (`la ${palabra1} es mas larga que ${palabra2}`)
} else {
    console.log  (`la ${palabra2} es mas larga que ${palabra1}`)
}



console.log ("---With Funtcion- NO---")

function comparacion(palabra1,palabra2) {

    let palabra1Length = palabra1.length
    let palabra2Length = palabra2.length
    
    if (palabra1Length > palabra2Length) {
        console.log (`la ${palabra1} es mas larga que ${palabra2}`)
    } else {
        console.log  (`la ${palabra2} es mas larga que ${palabra1}`)
    }
return  comparacion
}



console.log ("----Ejercicio 6 OK----")
/*
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
let frase = ("Programación Javascript")
let separar = frase.split(" ")

let compar = separar[0].length > separar[1].length ? `${separar[0]}`: `${separar[1]}`
console.log (compar)



console.log ("----Ejercicio 7  OK preguntar porq me sale undefine----")
//Deducir:
let kodemia = "kodemia"// duda porq me sale undefined
//output: "aimedok"
let kodemiaLength = kodemia.length
let resultKodemia = ""

for (let index = 0; index < kodemiaLength; index++) {
    if (index %2 === 0 ) {
        resultKodemia += kodemia.charAt(index).toUpperCase()
        
    } else {
        resultKodemia += kodemia.charAt(index).toLowerCase()
    }
}

console.log (resultKodemia)





let veryLarge = "a very large string"
//output: "A VeRy lArGe sTrInG" 

let veryLargeLength = veryLarge.length
let resultVeryLarge = ""

for (let index = 0; index < veryLargeLength; index++) {
    if (index %2 === 0 ) {
        resultVeryLarge += veryLarge.charAt(index).toUpperCase()
    } else {
        resultVeryLarge += veryLarge.charAt(index).toLowerCase()
    }
}
console.log(resultVeryLarge)




let abcd = "abcdefg"
//output: "AbCdEfG"
let abcdLength = abcd.length
let resultAbcd  = ""

for (let index = 0; index < abcdLength; index++) {
   if (index %2 === 0 ) {
       resultAbcd += abcd.charAt(index).toUpperCase()
   } else{
        resultAbcd += abcd.charAt(index).toLowerCase()
    }
}
console.log(resultAbcd)




console.log ("----Ejercicio 8 OK----")
/*Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
 hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método charAt():
return 'cat'.charAt(1) // devuelve "a" */


let algunTexto = ("hola")
let primerDato = algunTexto.charAt(0)
console.log(primerDato)

if (primerDato.match(/[aeiou]/gi)) {
    console.log( "el texto comienza con una vocal")
} else if (primerDato.match(/[1234567890]/gi)) {
    console.log( "el texto comienza con un numero")
} else if (primerDato.match(/[BCDFGHJKLMNÑPQRSTVWXYZ]/gi)) {
    console.log( "el texto comienza con una consonante")
} else if (primerDato.match(/[{}()/?!@#$%^&*]/gi)) {
    console.log( "el texto comienza con un caracter especial")
} else   {
    console.log( "no hay dato")
}
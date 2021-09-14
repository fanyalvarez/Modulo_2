
console.log ("----Ejercicio 1 OK ----")
/*
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"
*/
let nombre = prompt("Ingresa tu nombre")
let apellido = prompt("Ingresa tu apellido")

	let nombreCom= nombre.toLowerCase()+" "+ apellido.toUpperCase()
	console.log (nombreCom)




console.log ("----Ejercicio 2 OK ----")
/*
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
//let nombreCompleto = prompt ("Ingresa tu nombre completo")
	console.log (nombreCom.length)




console.log ("----Ejercicio 3 OK----")
/*
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
let vocales = nombreCom.match(/[aeiou]/gi)  // g es global e i no importa si es min o may 
	console.log (vocales)	




console.log ("----Ejercicio 4 OK----")
/*
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
let text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
let newText = text.replace("estudiante", "Koder");



console.log ("----Ejercicio 5----")
/*
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/




console.log ("----Ejercicio 6----")
/*
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/



console.log ("----Ejercicio 7----")
/*
Deducir:
input: "kodemia"
output: "aimedok"
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
*/
let minusculas = ("a very large string")
let mayusculas = ("a very large string")




console.log ("----Ejercicio 8----")
/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial



 hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método charAt():

return 'cat'.charAt(1) // devuelve "a"

*/


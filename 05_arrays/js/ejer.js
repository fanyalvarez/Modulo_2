console.log ("-----ejercicio1----")
/*Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.
Ejemplo:
input   
   - Emi de Leon
   - Elias Herrera
   - Armando Rios
output: 
    koder 1: Emi de Leon
    koder 2: Elias Herrera
    koder 3: Armando Rios*/
let cantidad =prompt("Numero de Koders");
let MyArray =[]
function lista(x){
	for (i=0; i<x; i++){
		let nombre =prompt("Ingresa el nombre");
		MyArray.push(nombre);
		console.log ( `Koder ${i+1}: ${nombre}`);
	}
}
lista (cantidad)

/*A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado*/
let buscar= prompt("que numero de koder quieres buscar")
console.log (MyArray[buscar-1])

/* imprimir la lista de koders en orden alfabetico descendiente*/

//let listaOrdenada = MyArray.sort()
//console.log (`${listaOrdenada}`)
MyArray.sort()
console.log(MyArray)


/*Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [   "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)	]"*/




/*Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"*/
let posicion = ("1")
let nuevoKoder = ("Fanny Alvarez")

MyArray.splice(posicion,0,nuevoKoder)
console.log(MyArray)

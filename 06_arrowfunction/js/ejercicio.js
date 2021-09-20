/*
Ejercicio
- Funcion que me regrese un numero aleatorio desde 0 hasta array.length
- Funcion que reciba el indice para imprimir el nombre
*/
function findLongestWord(str) {
	var pp = str.split(" ");
	palabra_mas_grande = ""
	pp.forEach(function(palabra){

	if (palabra.length > palabra_mas_grande.length){
		 palabra_mas_grande = palabra
	 };
	});
	return palabra_mas_grande;
  }
  console.log(findLongestWord("hola como estas ?"));
let arrayPersons = [
	{
		name: "Alice", age: 25, voted: true, gender: "mujer"
	},
	{
		name: "Jenifer", age: 26, voted: false, gender: "mujer"
	},
	{
		name: "Bruno", age: 48, voted: false, gender: "hombre"
	},
	{
		name: "Jon", age: 22, voted: true, gender: "hombre"
	},
	{
		name: "Brian", age: 20, voted: false, gender: "hombre"
	},
	{
		name: "Luis", age: 38, voted: true, gender: "hombre"
	},
	{
		name: "David", age: 29, voted: true, gender: "hombre"
	},
	{
		name: "Ximena", age: 40, voted: false, gender: "mujer"
	},
	{
		name: "Paulet", age: 37, voted: false, gender: "mujer"
	},
	{
		name: "Albert", age: 45, voted: true, gender: "hombre"
	},
	{
		name: "Mike", age: 22, voted: false, gender: "hombre"
	},
	{
		name: "Tami", age: 35, voted: true, gender: "hombre"
	},
	{
		name: "Mari", age: 28, voted: true, gender: "mujer"
	},
	{
		name: "Mireya", age: 18, voted: true, gender: "mujer"
	},
	{
		name: "Tamara", age: 18, voted: true, gender: "mujer"
	},
]

//name: "Tamara", age: 18, voted: true, gender: "mujer"
//Usar reduce para obtener la siguiente informacion
//----------------------------------------------------------
console.log("------Un array con aquellas personas que votaron  ok---")
const listVoted = arrayPersons => {
	let votaron = arrayPersons.reduce((accum, dato) => {
		return dato.voted
			? [...accum, dato]
			: accum
	}, [])
	return votaron
}
let listaDeVotantes = listVoted(arrayPersons)
console.log(listaDeVotantes)

//----------------------------------------------------------
console.log("------un array con aquellos votantes que votaron y que son menores a 30 años--------")
const listVotedMenor = arrayPersons => {
	let votaron = arrayPersons.reduce((accum, dato) => {
		return dato.voted && dato.age < 30
			? [...accum, dato]
			: accum
	}, [])
	return votaron
}
console.log(listVotedMenor(arrayPersons))


//----------------------------------------------------------
console.log("-----la edad promedio de todos los votantes   ok---")
const promedioVoted = listaDeVotantes.reduce((accum, edad) =>
	accum + edad.age / listaDeVotantes.length, 0)
console.log(`La edad promedio de los votantes fue de ${promedioVoted}`)

//----------------------------------------------------------

console.log("-----la edad promedio de los no votantes-----------")

const listaDeNoVoted = arrayPersons =>{
	let noVotaron = arrayPersons.reduce((accum, dato)=>{
		return !dato.voted
		?[...accum, dato]
		: accum
	},[])
	return noVotaron
}
let listaDeNoVotantes =(listaDeNoVoted(arrayPersons))
//console.log (listaDeNoVotantes)
const promedioNoVoted = listaDeNoVotantes.reduce((accum, edad)=>
	accum + edad.age / listaDeNoVotantes.length,0)
console.log (`La edad promedio de los votantes fue de ${promedioNoVoted}`)


//----------------------------------------------------------------------------------
console.log("------el porcentaje de votantes vs no votante---")
let porcentVoted = (listaDeVotantes.length/arrayPersons.length)*100
let porcentNoVoted = (listaDeNoVotantes.length/arrayPersons.length)*100
// comproabacion     let global	= porcentVoted + porcentNoVoted  console.log(global)
console.log(`la estadistica de los votantes fue de ${porcentVoted}% vs los no votantes del ${porcentNoVoted}%`)


//----------------------------------------------------------
console.log("------el procentaje de mujeres que votaron  ok---")
const listMujeres = listaDeVotantes => {
	let mujeres = listaDeVotantes.reduce((accum, genero) => {
		return genero.gender === "mujer"
			? [...accum, genero]
			: accum
	}, [])
	return mujeres
}
let mujeresVotantes = listMujeres(listaDeVotantes)
	//console.log(mujeresVotantes)
let porcentajeMujeres = (mujeresVotantes.length / listaDeVotantes.length) * 100
console.log(`El porcentaje de mujeres votante fue de ${porcentajeMujeres}`)

//----------------------------------------------------------
console.log("------el porcentaje de los hombres que votaron   ok---")
const filterHombres = genero => genero.gender === "hombre"
let hombresVotantes = listaDeVotantes.filter(filterHombres)
	//console.log(hombresVotantes)
let porcentajeHombres = ((hombresVotantes.length / listaDeVotantes.length) * 100)
	console.log(`El porcentaje de hombres votante fue de ${porcentajeHombres}`)

//comprobacion
//console.log(porcentajeHombres + porcentajeMujeres)
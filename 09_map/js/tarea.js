/*Ejercicio:*/
const songsData = [
	{
		name: "¿Dónde jugarán los niños?",
		band: "Maná",
		releaseYear: "1992",
		statistics: {
			likes: 20000,
			reproductions: 8000
		},
	},
	{
		name: "La muralla verde",
		band: "Enanitos Verdes",
		releaseYear: "1986",
		statistics: {
			likes: 21000,
			reproductions: 19000
		},
	},
	{
		name: "Te Ví En Un Tren",
		band: "Enanitos Verdes",
		releaseYear: "1987",
		statistics: {
			likes: 20000,
			reproductions: 23490
		},
	},
	{
		name: "Mariposa Traicionera",
		band: "Maná",
		releaseYear: "2002",
		statistics: {
			likes: 12000,
			reproductions: 25690
		},
	},
	{
		name: "Rayando el Sol",
		band: "Maná",
		releaseYear: "1990",
		statistics: {
			likes: 12000,
			reproductions: 18000
		},
	},
	{
		name: "La celula que explota",
		band: "Jaguares",
		releaseYear: "1999",
		statistics: {
			likes: 12000,
			reproductions: 23421
		},
	},
	{
		name: "No dejes que...",
		band: "Jaguares",
		releaseYear: "1999",
		statistics: {
			likes: 12345,
			reproductions: 10000
		},
	}
]



// Agrupar el nombres de la bandas, que no esten repetidas

let bandasAll = songsData.map((bandas, index) => {
	return bandas.band
})
const dataArr = new Set(bandasAll)

let result = [...dataArr]
console.log(bandasAll)
console.log(result)


// Agrupar las canciones por banda
//const getNames = arrayNames =>{

let jaguaresAccum = " "
let enanitosAccum = " "
let manaAccum = " "

songsData.forEach((nameObject) => {
	//console.log(nameObject)
	let bandas = nameObject.band
	let names = nameObject.name
	switch (bandas) {
		case "Maná":
			manaAccum += names
			break;

		case "Jaguares":
			jaguaresAccum += names
			break;

		case "Enanitos Verdes":
			enanitosAccum += names
			break;
		default:
			break;
	}
})

console.log("Canciones de Maná", manaAccum)
console.log("Canciones de Jaguares", jaguaresAccum)
console.log("Canciones de Enanitos Verdes", enanitosAccum)

// La cancion con más reproducciones
var reproTop = songsData.map((reproducciones, index) => {
	return parseInt(reproducciones.statistics.reproductions)
})
let repMayor = 0
for (i = 0; i < reproTop.length; i++) {
	if (reproTop[i] > repMayor) {
		repMayor = reproTop[i]
	}
}
//console.log(repMayor)
let cancionTop = " "
songsData.forEach((nameObject)=>{
	let cancion= nameObject.name
	let reprod = nameObject.statistics.reproductions
	switch (reprod) {
		case (repMayor):
			cancionTop += cancion
			break;
		default:
			break;
	}
})
console.log(`La cancion top es${cancionTop} con ${repMayor} reproducciones`)



// La cancion con más likes
let likesTop = songsData.map((like)=>{
	return parseInt(like.statistics.likes)
})//console.log(likesTop)
let likesMayor = 0
for (i = 0; i < likesTop.length; i++) {
	if (likesTop[i]> likesMayor) {
		likesMayor = likesTop[i]
	}
}//console.log(likesMayor)

let mayorLikes = " "
songsData.forEach((nameObject)=>{
	let cancion = nameObject.name
	let likes = nameObject.statistics.likes
	switch (likes) {
		case (likesMayor):
			mayorLikes += cancion
			break;
		default:
			break;
	}
})
console.log(`La cancion con mas likes es${mayorLikes} con ${likesMayor} likes`)
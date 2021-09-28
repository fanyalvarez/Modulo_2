
let resultListaBandas = " "


for (let index = 0; index < bandas.length; index++) {
	if (bandas.match(/[resultListaBandas]/gi)) {
	resultListaBandas.push()				
	}
}
console.log(resultListaBandas)


//let bandArray=bandasAll //bandas
let bandas = ["Jaguares", "Enanitos Verdes", "Maná"]
 resultado = bandasAll.find(artistas => artistas === bandas[0])
console.log(resultado)

let bandasList=""
 function getBands (bands) {
	let bandas = ["Jaguares", "Enanitos Verdes", "Maná"]
	resultado = bandasAll.find(artistas => artistas === bandas[0])
   console.log(resultado)
   return bands+=bandasList
 }
 console.log(bandasList)

 console.log(bandasAll.filter(buscar))
 let bandas = ["Jaguares", "Enanitos Verdes", "Maná"]
 function buscar(bandasAll) {
	 
	 return bandasAll === bandas
 }



 let data = songsData.map((bandas, index) => {
	return bandas.band
})
const dataArr = new Set(data)

let result = [...dataArr]

console.log(result)


console.log ("---el procentaje de mujeres que votaron---")
const getDataMujeres = (mujer, dataMujeres) => {

	return dataMujeres.filter((genero)=> mujer ?
	mujer.gender === "mujer")
}
const dataMujeres = listaDeVotantes.filter ((accum, genero)=>
accum + genero.gender,"mujer")

console.log(dataMujeres)



var fechaDeNacimiento = new Date('1995-08-11');
var hoy = new Date();
console.log(parseInt((hoy - fechaDeNacimiento) / (1000*60*60*24*365)));
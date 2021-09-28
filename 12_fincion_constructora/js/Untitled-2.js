/*Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
- Prototipo de tipo koder*/
const kodersCollection = [
	{
		name: 'Javier',
		lastName: 'López',
		birthday: '1996/06/24',
		generation: 9,
		bootcamp: 'JavaScript',
		scores: [
			{
				module: 'Frontend',
				score: 90
			},
			{
				module: 'Backend',
				score: 80
			},
			{
				module: 'Cloud',
				score: 80
			},
		]
	},
	{
		name: 'Ale',
		lastName: 'Paez',
		birthday: '1998/05/12',
		generation: 1,
		bootcamp: 'Python',
		scores: [
			{
				module: 'Frontend',
				score: 90
			},
			{
				module: 'Backend',
				score: 100
			},
			{
				module: 'Cloud',
				score: 100
			},
		]
	},
	{
		name: 'Juan Pablo',
		lastName: 'Sánchez',
		birthday: '1994/10/26',
		generation: 10,
		bootcamp: 'JavaScript',
		scores: [
			{
				module: 'Frontend',
				score: 100
			},
			{
				module: 'Backend',
				score: 95
			},
			{
				module: 'Cloud',
				score: 80
			},
		]
	},
	{
		name: 'Oscar',
		lastName: 'Ruiz',
		birthday: '1996/06/24',
		generation: 1,
		bootcamp: 'Python',
		scores: [
			{
				module: 'Frontend',
				score: 98
			},
			{
				module: 'Backend',
				score: 100
			},
			{
				module: 'Cloud',
				score: 70
			},
		]
	},
	{
		name: 'Mauro',
		lastName: 'López',
		birthday: '1996/06/24',
		generation: 9,
		bootcamp: 'JavaScript',
		scores: [
			{
				module: 'Frontend',
				score: 80
			},
			{
				module: 'Backend',
				score: 90
			},
			{
				module: 'Cloud',
				score: 100
			},
		]
	}
]

const koders = kodersCollection.map((person) => {
	let persona = new Koder(person)
	console.log(`El koder ${persona.name}`)
	console.log(`tiene la edad de ${persona.edad()} años`)
	console.log(`cursando el bootcamp de ${persona.bootcampJs()}`)
	console.log(`con un promedio de ${persona.score()}`)
	return persona
})

function Koder({ name, lastName, birthday, scores, generation, bootcamp }) {
	this.name = name,
		this.lastName = lastName,
		this.birthday = birthday,
		this.scores = scores,
		this.bootcamp = bootcamp,
		this.generation = generation,
//Obtener la edad a partir de la fecha de nacimiento
		this.edad = function () {
			let [año, mes, dia] = this.birthday.split("/")
			return 2021-año
		}
//Obtener promedio de sus scores
	this.score = function () {
		let average = this.scores.reduce((accum, score) => {
			return accum + score.score
		}, 0)
		return average / this.scores.length
	}
//Colección de Koder que pertenezcan a JavaScript
//Colección de Koder que pertenezcan a Python
	this.bootcampJs = function () {
		let javaScript = this.bootcamp === "JavaScript"
		return javaScript
	? "JavaScript"
	: "Python"
	}
}
console.log(koders)




console.log(`El koder ${persona.name}`)
console.log(`tiene la edad de ${persona.edad()} años`)
console.log(`con un promedio de ${persona.score()}`)
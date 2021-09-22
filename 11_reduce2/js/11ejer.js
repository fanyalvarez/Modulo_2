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

// agrupar la scanciones por bandas

const stringToCameCase = string => {
	let stringToCameCase = string.split(" ").//reduce((accum, word, index =>{
		console.log(word)
		let newString = word.toLoweCase()

		return index !== 0
			? accum + word.charAt(0).toUpperCase() + word.slice(1) 
			:accum + newString
			
	
}
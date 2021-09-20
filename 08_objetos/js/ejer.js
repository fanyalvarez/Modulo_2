let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]
/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]
*/
//metodo for
const getArrayWithObject = (arrayMentors) => {
	let newArraymentors = []
	for (let i=0; i<arrayMentors.length; i++){
		
	let name=arrayMentors[i][0]
	let lastName=arrayMentors[i][1]

	let mentorObject = {name, lastName}
	newArraymentors.push (mentorObject)
}
	return newArraymentors
}
let otherArrayMentors = getArrayWithObject(dataArray)
console.log(otherArrayMentors)
//metodo foreach
dataArray.forEach((name, index) => {
    console.log(`el nombre es: ${name} en la posicion ${index}`)
})




//metodo foreach

let arrayMentors = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
]

arrayMentors.forEach((mentor, index)=> {
    console.log(mentor.name)
    console.log(index)
})
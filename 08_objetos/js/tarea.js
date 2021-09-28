let mentorsArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 8
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    }
]


//- Obtener el score promedio de cada materia (HTML, CSS, JS)


const getAverageAsignatures = arrayMentors => {

    let htmlAcum = 0
    let cssAcum = 0
    let jsAcum = 0
    let mentorQty = arrayMentors.length

    arrayMentors.forEach((mentorObject, index) => {
        // console.log (mentorObject) acceder a cada mentor
        mentorObject.scores.forEach((scoreMentor) => {
            // console.log (scoreMentor) accede a cada scores
            let signature = scoreMentor.signature
            let score = scoreMentor.score

            switch (signature) {
                case "HTML":
                    htmlAcum += score
                    break;
                case "CSS":
                    cssAcum += score
                    break;
                case "JS":
                    jsAcum += score
                    break;

                default:
                    break;
            }
        })
    })
    console.log("Acum html", htmlAcum)
    console.log("Acum css", cssAcum)
    console.log("Acum js", jsAcum)

    let avgHtml = htmlAcum / mentorQty
    let avgCss = cssAcum / mentorQty
    let avgJs = jsAcum / mentorQty
    // console.log("aver html",avgHtml) ya no son necesarios porque los coloque en un object
    // console.log("aver css",avgCss)
    // console.log("aver js",avgJs)

    let objetoAverage = { avgHtml, avgCss, avgJs }
    return objetoAverage
}
// getAverageAsignatures(mentorsArray) es la misma de abajo pero ahora la tengo que llmar
let avgAsignatures = getAverageAsignatures(mentorsArray)
console.log(avgAsignatures)



//- Obtener el promedio indivual de cada mentor
const getAverForMentor = scoresArray => {
    let acumMentor = 0
   let scoresQty = scoresArray.length
    scoresArray.forEach((scoreMentor) => {
        let valueScore = scoreMentor.score
        acumMentor += valueScore
    })
    let avgMentor = acumMentor / scoresQty
    return avgMentor
}


//- Crear un array de string con la siguiente forma: "Mi nombre es {name} y mi promedio es {promedio}" tomo informacion de la anterior const

const getAvgMentors = arrayMentors => {
    let arrayAverageMentors = []
    arrayMentors.forEach((mentor) => {
        let avg = getAverForMentor(mentor.scores)
        let objectMentor = {
            name: mentor.name,
            average: avg
        }
        arrayAverageMentors.push(objectMentor)
        //console.log ( `Mi nombre es ${mentor.name} y mi promedio es  ${avg}` )
    })
    return arrayAverageMentors
}
let avgMentors = getAvgMentors(mentorsArray)
console.log(avgMentors)



//- Crear un array de string con la siguiente forma: "Mi nombre es {name} y mi promedio es {promedio}" 
let arrayStringsMentor = []

avgMentors.forEach((mentor) => {
    let { name, average } = mentor
    arrayStringsMentor.push(`Mi nombre es ${name} y mi promedio es  ${average}`)
})

console.log(arrayStringsMentor)

//- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
let arrayMentorsTop = []

avgMentors.forEach((mentor) => {
    mentor.average >= 9.5 ? arrayMentorsTop.push(mentor) : null
})
console.log(arrayMentorsTop)
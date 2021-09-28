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



let headersArray = [
    "Mentor",
    "HTML",
    "CSS",
    "JS",
    'Promedio'
]


let dataTable = document.createElement("table")
const printTable = () => {

    let dataHeader = document.createElement("thead")
    let headerRow = document.createElement("tr")

    headersArray.forEach(header => {
        let head = document.createElement("th")
        let headText = document.createTextNode(header)
        head.appendChild(headText)
        headerRow.appendChild(head)
    })

    dataHeader.appendChild(headerRow)
    dataTable.appendChild(dataHeader)
    document.body.appendChild(dataTable)

    let dataTableBody = document.createElement("tbody")

    mentorsArray.forEach(mentor => {
        let itemRow = document.createElement("tr")

        let nameTd = document.createElement("td")
        let htmlTd = document.createElement("td")
        let cssTd = document.createElement("td")
        let jsTd = document.createElement("td")
        let promTd = document.createElement('td')

        let nameText = document.createTextNode(mentor.name)
        let htmlText = document.createTextNode(mentor.scores[0].score)
        let cssText = document.createTextNode(mentor.scores[1].score)
        let jsText = document.createTextNode(mentor.scores[2].score)
        let promText = document.createTextNode((mentor.scores[0].score + mentor.scores[1].score + mentor.scores[2].score) / 3)

        nameTd.appendChild(nameText)
        htmlTd.appendChild(htmlText)
        cssTd.appendChild(cssText)
        jsTd.appendChild(jsText)
        promTd.appendChild(promText)

        itemRow.appendChild(nameTd)
        itemRow.appendChild(htmlTd)
        itemRow.appendChild(cssTd)
        itemRow.appendChild(jsTd)
        itemRow.appendChild(promTd)

        dataTableBody.appendChild(itemRow)

    })
    let promGen = document.createElement("p")
    let promGenText = document.createTextNode('El promedio total es: ')
    document.body.appendChild(promGenText)

    dataTable.appendChild(dataTableBody)
}
printTable()
dataTable.setAttribute("border", "1")
let h1 = document.createElement("h1")
let text = document.createTextNode("Hola Mundo")

// elemento.appendChild(child)
h1.appendChild(text)
console.log(h1)
document.body.appendChild(h1)

let namesArray = [
    "Elias",
    "Pao",
    "Nan",
    "Adolfo"
]

let article = document.createElement("article")

let ul = document.createElement("ul")
namesArray.forEach(name => {
    let li = document.createElement("li")
    let text = document.createTextNode(name)

    li.appendChild(text)
    ul.appendChild(li)
})

article.appendChild(ul)

document.body.appendChild(article)

let footer = document.createElement("footer")

let p = document.createElement("p")
let textDerechos = document.createTextNode("Todos los derechos reservados")

p.appendChild(textDerechos)
// <p>Todos los .....</p>

// <footer></footer>
footer.appendChild(p)
document.body.appendChild(footer)


// 

let mentorsArray = [
    {
        name: "Fernanda",
        mail: "fernanda@kodemia.mx",
        phone: "9671686557",
        avg: 9
    },
    {
        name: "Alfred",
        mail: "alfred@kodemia.mx",
        phone: "5523452345",
        avg: 10
    },
    {
        name: "Angel",
        mail: "angle@kodemia.mx",
        phone: "5541686557",
        avg: 10
    }
]

const getAgvGeneral = (arrayMentors) => {
    return arrayMentors.reduce((accum, mentor) => accum + mentor.avg, 0) / arrayMentors.length
}

const printTable = () => {
    let headersTable = ["Nombre", "E-mail", "Phone"]
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let headerRow = document.createElement("tr")

    headersTable.forEach(title => {
        let headTd = document.createElement("td")
        let textHead = document.createTextNode(title)
        headTd.appendChild(textHead)
        headerRow.appendChild(headTd)
    })
    thead.appendChild(headerRow)
    table.appendChild(thead)


    let tbody = document.createElement("tbody")


    mentorsArray.forEach(mentor => {
        // let trMentor = document.createElement("tr")
        // let nameTd = document.createElement("td")
        // let mailTd = document.createElement("td")
        // let phoneTd = document.createElement("td")

        // let nameText = document.createTextNode(mentor.name)
        // let mailText = document.createTextNode(mentor.mail)
        // let phoneText = document.createTextNode(mentor.phone)

        // nameTd.appendChild(nameText)
        // mailTd.appendChild(mailText)
        // phoneTd.appendChild(phoneText)

        // trMentor.appendChild(nameTd)
        // trMentor.appendChild(mailTd)
        // trMentor.appendChild(phoneTd)

        // tbody.appendChild(trMentor)
        tbody.innerHTML += `
            <tr>
                <td>${mentor.name}</td>
                <td>${mentor.mail}</td>
                <td>${mentor.phone}</td>
            </tr>
        `
    })
    table.appendChild(tbody)
    // console.log(table.innerHTML)
    // let saludo = "Hola Koders!!"
    // table.innerHTML = `<p>${saludo}</p>`
    // table.textContent = "<p>Hola Koders</p>"
    document.body.appendChild(table)

    let phrase = document.createElement("p")
    let textAvg = document.createTextNode(`El promedio general es: ${getAgvGeneral(mentorsArray).toFixed(1)}`)

    phrase.appendChild(textAvg)
    document.body.appendChild(phrase)
}
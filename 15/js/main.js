

let btnGuardar = document.getElementById("btnGuardar")
let inputName = document.getElementById("inputName") 
let inputLastName = document.getElementById("inputLastName") 
 
let kodersArray =[
	{"name": "Fany", "lastName": "Alvarez"}, 
	{"name": "Rebeca", "lastName": "Castro"}
] 

btnGuardar.addEventListener("click",()=>{ 
	let name = inputName.value 
	let lastName = inputLastName.value 
	let koder = {name, lastName} 
	kodersArray.push(koder)
}) 

console.log(kodersArray)





const KodersTable = (kodersArray) => {
    let tableBody = document.querySelector("tbody")
    tableBody.innerHTML = ""
    kodersArray.forEach((koder, index) =>{
        let koderRow = document.createElement("tr")
        tableBody.appendChild(koderRow)

        koderRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(index))

        koderRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(koder.name))

        koderRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(koder.lastName))

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn", "btn-warning")
        deleteBtn.textContent = "Delete"
        deleteBtn.dataset.koderIndex=index

		
        deleteBtn.addEventListener("click", event =>{
            
			let index = Number(event.target.dataset.koderIndex)
            kodersArray.splice(index,1)
            KodersTable(kodersArray)
        })

        koderRow
        .appendChild(document.createElement("td"))
        .appendChild(deleteBtn)
    })
	
}

KodersTable(kodersArray)
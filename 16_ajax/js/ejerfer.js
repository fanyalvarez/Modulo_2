let btnDecrementar = document.getElementById("btn-restar")
let btnIncrementar = document.getElementById("btn-sumar")
let counter = document.getElementById("counter")

let number = 0


// btnDecrementar.addEventListener("click", () => {
//     console.log("click decrementar")
//     // number -= 1
//     number--
//     console.log(number)
//     counter.textContent = number
// })

// btnIncrementar.addEventListener("click", ()=> {
//     number++
//     console.log(number)
//     counter.textContent = number
// })

// let buttons = document.querySelectorAll(".btn-test")
// console.log(buttons)

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (event)=> {
//         console.log("clicked..")
//         console.log(event)
//         console.log(event.target) // elemento - button
//         console.log(event.target.id)
//         let id = event.target.id
//         id === "btn-restar"
//             ? number--
//             : number++
//         counter.textContent = number
//     })
// })

let kodersArray = [
    {
        name: "Emi",
        lastName:  "de León"
    },
    {
        name: "Clau", 
        lastName: "Rodriguez"
    },
    {
        name: "Fanny", 
        lastName: "Alvarez"
    }
]



document.getElementById("btn-agregar").addEventListener("click", (event)=> {
//   event.preventDefault()
  let newKoder = {}
  document.querySelectorAll("form#added-koders input").forEach((input) => {
    //   console.log(input.name, input.value)
      newKoder[input.name] = input.value
    //   console.log(newKoder)
  })
  kodersArray.push(newKoder)
  console.log(kodersArray)
  printTable()
})


const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}

const removeKoder = (event) => {
    // console.log("Eliminando... jeje")
    // Eliminar del array
    let positionKoder = event.target.dataset.koderIndex
    kodersArray.splice(positionKoder, 1)
    // console.log(kodersArray)
    printTable()
}

const printTable = () => {
    let tBody = document.getElementById("list-koders")

    // tBody.innerHTML = ""

    // 
    // console.log(tBody.children)

    // mientras tBody tanga elementos va a eliminar el ultimo hijo
    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild)
    }

    kodersArray.forEach((koder, index) => {
        let {name, lastName} = koder
        let tr = document.createElement("tr")

        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.setAttribute("data-koder-index", index)

        button.addEventListener("click", removeKoder)

        tdButton.appendChild(button)

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)

        tBody.appendChild(tr)
    })
}

printTable()


let products = [];
const getProducts = () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let products = JSON.parse(xhr.responseText);
      console.log(products);
      // console.log(Object.keys(products)); */

      products = Object.keys(products).map((key) => {
        let product = products[key];
        //console.log(key);
        //console.log(product);
        return { ...product, id: key };
      });
      //printProducts(products);
      console.log(products);
    }
    //console.log(products);
  });
  xhr.open(
    "GET",
    ` https://dataninja-97039-default-rtdb.firebaseio.com/productos.json`
  );
  xhr.send();
};

/* let allProducts = arrayProducts.forEach((acc, product) => {
  let {name, description, price, id, sizes, image} = product
  )
}
console.log(allProducts) */

const printProducts = (arrayProducts) => {
  let list = document.querySelector("#list-products");

  let allProducts = arrayProducts.reduce((acc, product) => {
    let { name, description, price, id, sizes, image } = product;

    let cardProduct = `
      <div class="col-12 col-md-6 d-flex justify-content-center my-3">
        <article class="card-anime">
          <header class="card-anime-header d-flex justify-content-between mb-2">
            <img class="img-munko" src="${image}" alt="${name}">
            <div class="sizes-munkos d-flex flex-column justify-content-between">
              <div class="large d-flex align-items-center">
                <img src="./assets/size-l.svg" alt="">
                <p><span>G</span>rande</p>
              </div>
              <div class="medium d-flex align-items-center">
                <img src="./assets/size-l.svg" alt="">
                <p><span>M</span>ediano</p>
              </div>
              <div class="small d-flex align-items-center">
                <img src="./assets/size-l.svg" alt="">
                <p><span>P</span>equeño</p>
              </div>
            </div>
          </header>
          <section class="card-anime-body">
            <h3>${name}</h3>
            <p>${description}</p>
            <h4>$${price}.00 <span>MXN</span> </h4>
          </section>
          <footer class="card-anime-footer d-flex justify-content-between mt-4">
            <div class="heart">
              <i class="far fa-heart"></i>
            </div>
            <button data-product-id="${id}" class="btn btn-primary">Agregar <i class="fas fa-cart-plus"></i></button>
          </footer>
        </article>
      </div>
      `;
    return acc + cardProduct;
  }, "");
  console.log(allProducts);
  list.innerHTML = allProducts;
};

getProducts();

/*function card() {
  arrayProducts.forEach((getProducts) => {
    let cardName = document.querySelector("#name-card").appendChild(`${name}`);
  });
  return card;
}
console.log();

const createNode = (typeElement, text) => {
  let node = document.createElement(typeElement);
  node.textContent = text;
  // let textNode = document.createTextNode(text)
  // node.appendChild(textNode)
  return node;
};


*/
// <div id="one">one</div>
var d1 = document.getElementById("name-card");
d1.insertAdjacentHTML("afterend", '<"hola"');

// En este punto, la nueva estructura es:
// <div id="one">one</div><div id="two">two</div>

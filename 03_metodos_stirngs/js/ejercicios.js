
 console.log("----Ejercicio 1----")
/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/
let saludo = ("Hola me llamo Fernanda Palacios. Hola Otra vez")

let buscar = saludo.match(/hola/gi)

console.log (`la palabra a buscar es hola y el numero de coincidencias de ${buscar.length}`)



console.log ("----Ejercicio 2----")
/*  Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30*/

function operaciones(numero1,numero2,operacion) {

    let resultado

    switch (operacion) {
        case "suma":
           // let suma = numero1 + numero2
           resultado = numero1 + numero2              
            break;

        case "resta":
           // let resta = numero1 - numero2            
           resultado = numero1 - numero2 
            break;
        
        case "division":
             // let division = numero1 / numero2 
             resultado = numero1 / numero2            
               break;
        
        case "multiplicacion":
              //  let multiplicacion = numero1 * numero2            
              resultado = numero1 * numero2 
                break;  

        default:
            resultado= "no existe operacion"
            break;
    }

    return `el resultado de la operacion ${operacion} es de ${resultado}`
}
let operacionSelecion = prompt("ingresa la operacion requerida")
let numero1 = parseInt(prompt("ingresa el numero 1"))
let numero2 = parseInt(prompt("ingresa el numero 2"))

console.log (operaciones (numero1, numero2, operacionSelecion))
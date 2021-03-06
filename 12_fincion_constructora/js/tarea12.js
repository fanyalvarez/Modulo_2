/*Pr谩ctica:
Generar una colecci贸n de Objetos de tipo Product que tenga las siguientes propiedades:
	nombre
	description
	precio de costo
	clasificaci贸n
	porcentaje de Ganancia
	precio de venta
	precios de los ultimos 6 meses en una colecci贸n [23,12,45,56,12,10]
	Cantidad vendidas en la ultima semana
	Fecha de Caducidad
    
馃挮 De igual forma es necesario realizar lo siguientes calculos por cada Producto:

- Calcular el precio de Venta y asignarlo a su correspondiente propiedad
- Obtener los di谩s restantes para que caduque el producto
- Obtener el promedio de precio de los ultimos 6 meses

馃挮 Una vez obtenido la colleci贸n de Productos obtener lo siguiente:
- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 d铆as proximas a caducar
Happy Koding 馃殌*/
const datos = [
	{
		description: "chocolate1",
		costo: 25,
		clasificaci贸n: 10,
		ganancia: 25, //porcentaje
		venta: 50,
		precios: [
			{
				mes: "abril",
				precio: 55,
			},
			{
				mes: "mayo",
				precio: 55,
			},
			{
				mes: "junio",
				precio: 55,
			},
			{
				mes: "julio",
				precio: 55,
			},
			{
				mes: "agosto",
				precio: 55,
			},
			{
				mes: "septiembre",
				precio: 55,
			},
		],
		cantidadVendidas: [
			{
				dia: "lunes",
				cantidad: 20
			},
			{
				dia: 'martes',
				cantidad: 10
			},
			{
				dia: "miercoles",
				cantidad: 14
			},
			{
				dia: "jueves",
				cantidad: 17
			},
			{
				dia: "viernes",
				cantidad: 15
			},
		],// en la ultima semana
		fechaDeCaducidad: "2021-09-27"
	}
]
const prod = datos.map((products) => {
	let productos = new Producto(products)
	console.log(`precio promedio ${productos.precioPromedio()}`)
	console.log(`dias restantes ${productos.diasCaducidad(" ")}`)
	console.log(productos.ventasMayores)
	return productos
})


function Producto({ nombre,description,costo,
	clasificaci贸n,
	ganancia, //porcentaje
	venta,
	precios, //de los ultimos 6 meses en una colecci贸n [23,12,45,56,12,10]
	cantidadVendidas,// en la ultima semana
	fechaDeCaducidad, }) {
	this.nombre = nombre
	this.description = description
	this.costo = costo
	this.clasificaci贸n = clasificaci贸n
	this.ganancia = ganancia
	this.venta = venta
	this.precios = precios
	this.cantidadVendidas = cantidadVendidas
	this.fechaDeCaducidad = fechaDeCaducidad


// Calcular el precio de Venta y asignarlo a su correspondiente propiedad

// Obtener los di谩s restantes para que caduque el producto
	this.diasCaducidad = function () {
		let diff = (new Date().getTime()) - (new Date(this.fechaDeCaducidad).getTime())
		return (parseInt(diff / (1000 * 60 * 60 * 24)*-1))
	}

// Obtener el promedio de precio de los ultimos 6 meses
	this.precioPromedio = function () {
		let average = this.precios.reduce((accum, precio) => {
			return accum + precio.precio
		}, 0)
		return average / this.precios.length
	}

// Una vez obtenido la colleci贸n de Productos obtener lo siguiente:

// Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
	this.ventasMayores = function () {
		let mayores = this.cantidadVendidas.reduce((accum, cantidad) => {
			return cantidad.cantidad 
				? [...accum, cantidad]
				: accum
		},"")
		return (mayores)
	}
// Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
// Los productos que se encuentren a menos de 15 d铆as proximas a caducar
}	
console.log(Producto)

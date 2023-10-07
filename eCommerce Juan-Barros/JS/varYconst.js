
//Const de acceso al dom

const btnAbrirLogin = document.querySelector("#btnLogin")
const btnCerrarLogin = document.querySelector("#btnCerrarLogin")
const userLog = document.querySelector("#user")
const passLog = document.querySelector("#pass")
const btnLogIn = document.querySelector("#btnIngresar")
const btnEliminarDatos = document.querySelector("#eliminarDatos")
const btnMostrarMacetas = document.querySelector("#btnMacetas")
const btnMostrarHerramientas = document.querySelector("#btnHerramientas")
const btnMostrarPlantas = document.querySelector("#btnPlantas")
const btnMostrarTodo = document.querySelector("#btnMostrarTodo")
const mainProductos = document.querySelector("#galeriaProductos")
const busquedaProductos = document.querySelector("#buscadorProductos")
const btnCarrito = document.querySelector("#carrito")
const galeriaCarrito = document.querySelector(".galeriaCarrito")
const vaciarCarro = document.querySelector("#vaciarCarro")
const btnAgregarCarrito = document.querySelectorAll(".btn.btn-success.btnComprar")
const btnFinalizarCompra = document.querySelector("a#confirmarCompra")
const sumaCarro = document.querySelector("#sumaCarro")

let imgMaceta = "../multimedia/productos/maceta.jpg"

// cons de Mockapi

const urlMockApi = "https://63613d9767d3b7a0a6c1dc43.mockapi.io/Inventario"

//mi carrito

const carrito = []

// Variables

let inventarioProductos = []


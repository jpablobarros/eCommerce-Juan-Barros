//Recupero carro si es que existe

const recuperarCarrito = () =>{
    if(localStorage.getItem("carrito")){
        let carroRecuperado = JSON.parse(localStorage.getItem("carrito"))
        carroRecuperado.forEach(productos => carrito.push(productos))
    }
}


//Evento para mostrar y ocultar la ventana de login del header agregando o quitando la clase visibilidad

btnAbrirLogin.addEventListener("click", ()=>{
    asideLogin.classList.remove("visibilidad")
})

btnCerrarLogin.addEventListener("click", () =>{
    asideLogin.classList.add("visibilidad")
})

// Creacion de Template Literals para la galeria principal

const creacionCartas = (producto)=>{
    return `<div class="card" style="width: 18rem;">
                <div class="imgProducto card-img-top"><img src="${producto.imagen}"></div>   
                    <div class="card-body">                    
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="precio">$ ${producto.precio}</p>
                    <button class="btn btn-success btnComprar" id="${producto.titulo}" title="Click para agregar ${producto.titulo} al carrito">Comprar</button>
                </div>
            </div>`         
}

//Muestro mi inventario con async-await 

const mostrarInventario = async () =>{

    let miHtml = ""
    let botonesProductos = true
    try {
        const rptaServidor = await fetch(urlMockApi)
            inventarioProductos = await rptaServidor.json()
            inventarioProductos.forEach(producto => miHtml += creacionCartas(producto))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'pero que agradable sujeto... ¡Rompio mi codigo!',
            })
            botonesProductos = false
    }finally{
        mainProductos.innerHTML = miHtml
            btnProductos()
        }
    }


// Filtros de productos

//Input tipo search para buscar productos


const filtroUsuario = () =>{
    mainProductos.innerHTML = ""
    const inputUser = busquedaProductos.value.toLowerCase()
    const prodFiltrados = inventarioProductos.filter((prdto) => prdto.nombre.includes(inputUser))
        prodFiltrados.forEach(producto => {
            mainProductos.innerHTML += creacionCartas(producto)
        })
        busquedaProductos.addEventListener("keyup", filtroUsuario)      
}


// Filtros por botones

const filtradoPorBotones = () =>{
    const filtroMacetas = () =>{
        mainProductos.innerHTML= ""
        const arrMacetas = inventarioProductos.filter((producto) => producto.categoria === "Maceta");
        arrMacetas.forEach(producto =>{
            mainProductos.innerHTML += creacionCartas(producto)

        }
    )}
    const filtroHerramientas = () =>{
        mainProductos.innerHTML= ""
        const arrHerramientas = inventarioProductos.filter((producto) => producto.categoria === "Herramienta");
        arrHerramientas.forEach(producto =>{
            mainProductos.innerHTML += creacionCartas(producto)
            btnProductos()
        }
    )}
    const filtroPlantas = () =>{
        mainProductos.innerHTML= ""
        const arrPlantas = inventarioProductos.filter((producto) => producto.categoria === "Planta");
        arrPlantas.forEach(producto =>{
            mainProductos.innerHTML += creacionCartas(producto)
            btnProductos()
        }
    )}
    const filtroTodos = () =>{
        mainProductos.innerHTML= ""
        inventarioProductos.forEach(producto =>{
            mainProductos.innerHTML += creacionCartas(producto)
            btnProductos()
        }
    )}
    btnMostrarTodo.addEventListener("click", () =>{
        mainProductos.innerHTML= ""
        inventarioProductos.forEach(producto =>{
            mainProductos.innerHTML += creacionCartas(producto)
            btnProductos()
        })
    })
    btnMostrarMacetas.addEventListener("click", filtroMacetas)
    btnMostrarHerramientas.addEventListener("click", filtroHerramientas)
    btnMostrarPlantas.addEventListener("click", filtroPlantas)
    btnMostrarTodo.addEventListener("click", filtroTodos)
}

//Botones de compra de cada producto

const btnProductos = () =>{
    const btnAgregarCarrito = document.querySelectorAll(".btn.btn-success.btnComprar")
    btnAgregarCarrito.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            agregarProdCarrito(btn.id)
            Toastify({
                text: "Agregaste " +  btn.id + " al carrito",
                duration: 1500,
                gravity: "bottom",
                className: "noti",
                }).showToast();      
        })
    }
)}

//Agregar al carrito

function agregarProdCarrito(producto){
    let productosAgregados = inventarioProductos.find(prod => prod.titulo === producto)
    productosAgregados !== undefined &&
        carrito.push(productosAgregados)
        guardarCarro()
}

//Guardar carrito

const guardarCarro = () =>{
    carrito.length > 0 &&
        localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Crear usuario nuevo y lo guardo en local storage

function crearUsuario() {
    const usuario = userLog.value
    const contra = passLog.value
    btnLogIn.addEventListener("click", () => {
        localStorage.setItem("nombre", usuario)
        localStorage.setItem("clave", contra)
        Swal.fire({
            icon: 'success',
            title: usuario,
            text: 'Bienvenid@, tus credenciales ya se guardaron en localStorage, ya puedes cerrar esta notificacion',
        })
    })
}

//Elimino todos los datos guardados del usuario

btnEliminarDatos.addEventListener("click", () => {
    localStorage.removeItem("nombre")
    localStorage.removeItem("clave")
})

//eventos para crear usuarios

userLog.addEventListener("keyup", crearUsuario)
passLog.addEventListener("keyup", crearUsuario)


//llamo funciones
recuperarCarrito()
filtroUsuario()
mostrarInventario()
filtradoPorBotones()
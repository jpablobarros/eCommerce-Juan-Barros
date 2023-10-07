
//Traigo desde local storage el carrito


const recuperarCarrito = () =>{
    if(localStorage.getItem("carrito")){
        let carroRecuperado = JSON.parse(localStorage.getItem("carrito"))
        carroRecuperado.forEach(productos => carrito.push(productos))
    }
}


//Aqui creo el template para crear las tablas del carrito

const crearCarrito = () =>{
    let tablaCarrito = ""
    carrito.forEach(producto  =>{
        tablaCarrito += `<tr>
                            <th class="imgCarrito scope="row"><img src="${producto.imagen}"></th>
                            <td>${producto.titulo}</td>
                            <td>${producto.stock}</td>
                            <td>$ ${producto.precio}</td>
                        </tr>`
                        
    })
    galeriaCarrito.innerHTML = tablaCarrito
    let montoTotal = carrito.reduce((acc, producto)=> acc + producto.precio, 0 )
    let montoTotalConvertido = montoTotal.toString()
        sumaCarro.innerHTML += "$" + " " + montoTotalConvertido
}


//Boton para finalizar compra, con Sweet alert y lo direcciono al inicio usando operador and

const finalCompra = () => {
    carrito.length > 0 &&
        Swal.fire({
            title: 'Desea confirmar la operacion?',
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({showConfirmButton: false,title:"Gracias por su compra!", icon: "success",})
                localStorage.clear(carrito)
                const recargar = () => {
                    location.href = "index.html"}
                const tiempo = setTimeout(recargar, 2000)
            } 
    })
}

btnFinalizarCompra.addEventListener("click",finalCompra) 



//Boton para vaciar el carro

vaciarCarro.addEventListener("click", ()=>{

    localStorage.removeItem("carrito")
    location.reload()
})

//llamo las funciones

recuperarCarrito()
crearCarrito()
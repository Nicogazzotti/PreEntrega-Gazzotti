const contTbody=document.querySelector("tbody")
const precioTotal=document.getElementById("precio_total")
const btnVaciar=document.getElementById("vaciar_carrito")
const confCompra=document.getElementById("confirmar_compra")
let total=0

const cargarCarrito=()=>{
    contTbody.innerHTML=""
    let sumaPrecios=0

    if (carrito.length>0){
        carrito.forEach((car)=>{
            const contTr=document.createElement("tr")        
            contTr.innerHTML=`<tr>
                                <td class="td">${car.gusto}</td>  <td>${car.tamaño}</td> <td>$${car.precio}</td> <td class="cant_check"><p>${car.cantidad}</p></td> <td><button class="button_carrito" id="${car.id}">X</button></td>
                            </tr>`
            contTbody.appendChild(contTr)
            
            sumaPrecios+=(car.precio)*car.cantidad
            const btnCarrito=document.getElementById(`${car.id}`)
            btnCarrito.addEventListener("click", ()=>{
                eliminarCarrito(btnCarrito.id)
            })
        })
        
    }
    const carl= (carrito.length>0) ? true:false
    carl ? precioTotal.innerHTML= "El total del carrito es $"+sumaPrecios : precioTotal.innerHTML="No existen elementos en el carrito"
    total=sumaPrecios
    storageCarrito()
    
}

const eliminarCarrito=(pizzaId)=>{
    const res=carrito.find((p)=>p.id===parseInt(pizzaId))
    if(res.cantidad>1){
        res.cantidad-=1
    }
    else{
        const ind=carrito.indexOf(res)
        carrito.splice(ind,1)
    }
    cargarCarrito()
}

btnVaciar.addEventListener("click",()=>{
    if(carrito.length>0){
    carrito.length=0
    cargarCarrito()
    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha vaciado el carrito correctamente',
        showConfirmButton: false,
        timer: 1000
    })
    }
})

confCompra.addEventListener("click",()=>{
    if(carrito.length>0){
        Swal.fire({
            icon: 'success',
            title: 'Muchas gracias por realizar tu compra!!',
            text: 'Usted ha pagado el total de '+total+'$' ,    
        })
        localStorage.removeItem("carrito")
        carrito.length=0
        cargarCarrito()

        
    }
})
recCarrito()
cargarCarrito()



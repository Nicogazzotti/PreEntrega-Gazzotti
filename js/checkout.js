const contTbody=document.querySelector("tbody")
const precioTotal=document.getElementById("precio_total")
const btnVaciar=document.getElementById("vaciar_carrito")

btnVaciar.addEventListener("click",()=>{
    carrito.length=0
    cargarCarrito()
})
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
    if(carrito.length>0){
        precioTotal.innerHTML= "El total del carrito es $"+sumaPrecios
    }
    else{
        precioTotal.innerHTML=""
    }
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

recCarrito()
cargarCarrito()



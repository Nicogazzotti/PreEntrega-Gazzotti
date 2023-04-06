const contTbody=document.querySelector("tbody")
const precioTotal=document.getElementById("precio_total")
console.log(contTbody)
let sumaPrecios=0
const cargarCarrito=()=>{
    if (carrito.length>0){
        carrito.forEach((car)=>{
            const contTr=document.createElement("tr")        
            contTr.innerHTML=`<tr>
                                <td>${car.gusto}</td>  <td>${car.tamaño}</td> <td>$${car.precio}</td> <td><button class="button_carrito" id="${car.id}">Eliminar</button></td>
                            </tr>`
            contTbody.appendChild(contTr)
            
            sumaPrecios+=car.precio
            console.log(sumaPrecios)


        })
    }
    if(carrito.length>0){
        precioTotal.innerHTML= "El total del carrito es $"+sumaPrecios
    }
}

recCarrito()
cargarCarrito()


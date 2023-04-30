const carrito=[]
const storageCarrito=()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
}

const recCarrito=()=>{
        const carritoStorage= JSON.parse(localStorage.getItem("carrito"))
        carritoStorage!==null && carrito.push(...carritoStorage) //spread operator
}





const carrito=[]
const storageCarrito=()=>{
    if(carrito.length>0){
        localStorage.setItem("pizzas",JSON.stringify(carrito))
    }
}

const recCarrito=()=>{
    const carritoStorage= JSON.parse(localStorage.getItem("pizzas"))
    if(carritoStorage!== null){
        carrito.push(...carritoStorage) //spread operator
    }
}
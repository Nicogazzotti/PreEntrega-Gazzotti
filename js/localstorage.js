

const carrito=[]
const storageCarrito=()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
}

const recCarrito=()=>{
        const carritoStorage= JSON.parse(localStorage.getItem("carrito"))
        carritoStorage!==null && carrito.push(...carritoStorage) //spread operator
}

const storagePizzas=()=>{
    localStorage.setItem("pizzas",JSON.stringify(pizzas))
}

const recPizzas=()=>{
    const pizzaStorage= JSON.parse(localStorage.getItem("pizzas"))
    pizzaStorage!==null && pizzas.splice(0,pizzas.length)  && pizzas.push(...pizzaStorage)

}



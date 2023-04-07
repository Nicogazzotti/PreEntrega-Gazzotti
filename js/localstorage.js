

const carrito=[]
const storageCarrito=()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
}

const recCarrito=()=>{
        const carritoStorage= JSON.parse(localStorage.getItem("carrito"))
        if(carritoStorage!==null){
            carrito.push(...carritoStorage) //spread operator
        }
        

}

const storagePizzas=()=>{
    localStorage.setItem("pizzas",JSON.stringify(arPizzas))
}

const recPizza=()=>{
    const pizzaStorage= JSON.parse(localStorage.getItem("pizzas"))
    if(pizzaStorage!==null){
        arPizzas.splice(0,arPizzas.length)
        arPizzas.push(...pizzaStorage)
    }
}



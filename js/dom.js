const tituloArriba=document.getElementById("titulo_contarriba");
const tituloAbajo=document.getElementById("titulo_contabajo");
const contArriba=document.getElementById("cont_pizzasGrandes");
const contAbajo=document.getElementById("cont_pizzasChicas");
const btnCarrito=document.querySelector("div.carrito");
const buscar=document.getElementById("buscar_pizza")
const pizzas=[]
const URL = 'js/pizzas.json'
tituloArriba.innerHTML="Pizzas Grandes"
tituloAbajo.innerHTML="Pizzas Chicas"

btnCarrito.addEventListener("click",()=>location.href= "paginas/checkout.html")

async function obtenerPizzas(){ 
    try{
        const response= await fetch(URL)
        const data= await response.json()
            pizzas.length==0 && pizzas.push(...data)
            cargarPizzas(pizzas)
    }catch(error){
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error',    
        })
    }
}
const cargarPizzas= (arrayP)=>{
    contArriba.innerHTML=""
    contAbajo.innerHTML=""
    if(arrayP.length>0){
        arrayP.forEach((pizza) => {
            const cont=document.createElement("div")
            cont.innerHTML= `<div class="producto">
                                <div class="img">
                                    <img src="${pizza.imagen}" alt="sin imagen">
                                </div>
                                <h3>${pizza.gusto}</h3>
                                <ul class="cont_cat">
                                    <li>${pizza.tamaño}</li>
                                </ul>
                                <h4>$${pizza.precio}</h4>
                                <button class="button_productos" id="${pizza.id}">Añadir</button>
                            </div>`
            const tam= (pizza.tamaño==="Pizza grande") ? true:false
            tam ? contArriba.appendChild(cont): contAbajo.appendChild(cont)
            
            const btnTarjetas=document.getElementById(`${pizza.id}`)
            
            btnTarjetas.addEventListener("click", ()=>{
                evtClickBt(pizza.id)
                
            })
        });  
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error para subir las pizzas',    
        })
    }
    
    
    
}

const evtClickBt=(pizzaId)=>{
    const repite=carrito.some((pizza)=>pizza.id===pizzaId)
    if(repite){
        const ress=carrito.find((pizza)=>pizza.id===pizzaId)
        ress.cantidad+=1
    }
    else{
        const res=pizzas.find((pizza)=> pizza.id===pizzaId)
        carrito.push(res)
        console.log(carrito)
        

    }

    storageCarrito()
}

buscar.addEventListener("search",()=>{
    const filter=pizzas.filter(p=>p.gusto.toLowerCase().includes(buscar.value.toLowerCase()))
    filter.length>0 && cargarPizzas(filter)
})


obtenerPizzas()
recCarrito()

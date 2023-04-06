
const tituloArriba=document.getElementById("titulo_contarriba");
const tituloAbajo=document.getElementById("titulo_contabajo");

const contArriba=document.getElementById("cont_pizzasGrandes");
const contAbajo=document.getElementById("cont_pizzasChicas");
const btnCarrito=document.querySelector("div.carrito");
console.log(btnCarrito)
tituloArriba.innerHTML="Pizzas Grandes"
tituloAbajo.innerHTML="Pizzas Chicas"

btnCarrito.addEventListener("click",()=>location.href= "paginas/checkout.html")


const cargarPizzas= (arrayP)=>{
    if(arrayP.length>0){
        arrayP.forEach((pizza) => {
            const cont=document.createElement("div")
            cont.innerHTML= `<div class="producto">
                                <div class="img">
                                    <img src="${pizza.imagen}" alt="">
                                </div>
                                <h3>${pizza.gusto}</h3>
                                <ul class="cont_cat">
                                    <li>${pizza.tamaño}</li>
                                </ul>
                                <h4>$${pizza.precio}</h4>
                                <button class="button_productos" id="${pizza.id}">Añadir</button>
                            </div>`
            if (pizza.tamaño=="Pizza grande"){
                contArriba.appendChild(cont)
            }
            else{
                contAbajo.appendChild(cont)
            }

            const btnTarjetas=document.getElementById(`${pizza.id}`)

            btnTarjetas.addEventListener("click", ()=>{
                evtClickBt(pizza.id)
            })
        });
    }
    else{
        tituloArriba.innerHTML="Error"
        tituloAbajo.innerHTML="Error"
    }
    
}

const evtClickBt=(pizzaId)=>{
    const res=arPizzas.find((pizza)=> pizza.id===pizzaId)
    carrito.push(res)
    storageCarrito()
}

cargarPizzas(arPizzas)
recCarrito()

const tituloArriba=document.getElementById("titulo_contarriba");
const tituloAbajo=document.getElementById("titulo_contabajo");

const contArriba=document.getElementById("cont_pizzasGrandes");
const contAbajo=document.getElementById("cont_pizzasChicas");
const btnCarrito=document.querySelector("div.carrito");
const agregarPizza=document.getElementById("agregar_pizza")
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
    // fetch(URL)
    //     .then((response)=>{return response.json()
    //     })
    //     .then((data)=>{pizzas.length==0 && pizzas.push(...data)})
    //     .then(()=>{cargarPizzas(pizzas)})
    //     .then(()=>console.log(pizzas))
        
    //     .catch()
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


agregarPizza.addEventListener("click",()=>{
    const id=(pizzas[pizzas.length-1].id)+1
    let imagen=prompt("Ingrese el link de su imagen(Ejemplo: pizzafugazzeta.jpg")
    
    while(imagen===null || imagen=== undefined || imagen===""){
        imagen=prompt("No es valido. Ingrese el link de su imagen(Ejemplo: pizzafugazzeta.jpg")
    }
    
    let gusto=prompt("Ingrese el gusto de su pizza")
    while(gusto===null || gusto=== undefined || gusto===""){
        gusto=prompt("No es valido. Ingrese el gusto de su pizza")
    }
    let tipoP=prompt('Ingrese "1" si quiere pizza chica o "2" si quiere pizza grande')
    while ((tipoP != 1 ) && (tipoP != 2)){
        tipoP=prompt('No es valido, Ingrese "1" si quiere pizza chica o "2" si quiere pizza grande ')
    }
    let tamañoP=""
    if (tipoP==1){
        tamañoP="Pizza chica"
    }else{
        tamañoP="Pizza grande"
    }
    let precio=parseInt(prompt("Ingrese el precio de su pizza"))
    while(precio===0 || precio ===null || isNaN(precio) ){
        precio=parseInt(prompt("El precio ingresado no es valido. VUelva a ingresar el precio de su pizza"))
    }

    pizzas.push({id:id,imagen:"img/"+imagen,gusto:gusto,tamaño:tamañoP,precio:precio,cantidad:1})
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se subio correctamente la pizza',
        showConfirmButton: false,
        timer: 1500
    })
    cargarPizzas(pizzas)
    storagePizzas()

    // .push({id:id,imagen:"img/"+imagen,gusto:gusto,tamaño:tamañoP,precio:precio,cantidad:1})
    // const newPost={
    //     id:id,
    //     imagen:"img/"+imagen,
    //     gusto:gusto,
    //     tamaño:tamañoP,
    //     precio:precio,
    //     cantidad:1
    // }
    // fetch(URL),{
    //     method: 'POST',
    //     body:JSON.stringify(newPost),
    //     headers:{
    //         "Content-type":"application/json"
    //     }   
    // }
    
    
    // fetch(URL)
    //     method:"POST",
    //     body: JSON.stringify
    // COMO PUEDO HACER UN METODO POST AL ARCHIVO JSON CON LA PIZZA AGREGADA AL MENU. Y sino hacer un storage solo de lo agregado y sino sacar lo de agregar una pizza.
    
})

obtenerPizzas()
recPizzas()
recCarrito()

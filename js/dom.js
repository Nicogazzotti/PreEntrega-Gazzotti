
const tituloArriba=document.getElementById("titulo_contarriba");
const tituloAbajo=document.getElementById("titulo_contabajo");

const contArriba=document.getElementById("cont_pizzasGrandes");
const contAbajo=document.getElementById("cont_pizzasChicas");



tituloArriba.innerHTML="Pizzas Grandes"
tituloAbajo.innerHTML="Pizzas Chicas"

const cargarPizzas= (arrayP)=>{
    if (arrayP.length>0){
        arrayP.forEach((pizza)=>{
            
            if (pizza.tamaño=="Pizza grande"){
                contArriba.innerHTML += cargaHTML(pizza);
            }
            else{
                contAbajo.innerHTML +=cargaHTML(pizza);
            }
        });
    }
    else{
        tituloArriba.innerHTML="Error"
        tituloAbajo.innerHTML="Error"
    }
}
cargarPizzas(arPizzas);

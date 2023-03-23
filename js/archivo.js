
let cantidad=Cantidadpizzas()
const pizzas=[]
let sumaprecios=0
for (let i=1; i<cantidad+1 && i<5+1; i++){
    let tamañoPizza=TipoPizza(i)
    let precio=Precio(tamañoPizza)
    if (i==1){
        console.log("El precio individual de la pizza "+tamañoPizza+" es de "+ precio)
    }
    
    let gustoPizza= GustoPizza(i)
    
    pizzas.push({nropizza:i, gusto:gustoPizza.toLowerCase(), tamaño:tamañoPizza, precio: precio })
    sumaprecios+=precio
    if (cantidad==i){
        Imprimir(cantidad,sumaprecios,pizzas)
    }


}

function Cantidadpizzas(){
    let cantidad=parseInt(prompt('Ingrese la cantidad de pizzas que va a pedir'))
    while(cantidad===0 || cantidad ===null || isNaN(cantidad) ){
        cantidad=parseInt(prompt('El valor ingresado no es valido, Ingrese nuevamente la cantidad de pizzas que va a pedir'))
    }
    
    return cantidad
}

function TipoPizza(i){
    let tipoP=prompt('Para la pizza ' + i+ ': Ingrese "1" si quiere pizza chica o "2" si quiere pizza grande')

    while ((tipoP != 1 ) && (tipoP != 2)){
        tipoP=prompt('No es valido, Ingrese "1" si quiere pizza chica o "2" si quiere pizza grande ')
    }
    let tamañoP=""
    if (tipoP==1){
        tamañoP="chica"
    }else{
        tamañoP="grande"
    }
    return tamañoP
}

function Precio(tamP){
    let precio=0

    if (tamP=="chica"){
        precio=1300;
    } 
    else{
        precio=2000;
    }
    return precio
}
function GustoPizza(i){
    let gustoPizza= prompt("Ingrese que gusto quiere para la pizza " + i +" (Solo disponible hasta 5 pizzas o las que se pidan ). Los gustos disponibles son napolitana, muzzarella, fugazzeta, cuatro quesos y calabresa.")
    while(gustoPizza.toLowerCase()!="napolitana" && gustoPizza.toLowerCase()!="muzzarella" && gustoPizza.toLowerCase()!="fugazzeta" && gustoPizza.toLowerCase()!="cuatro quesos" && gustoPizza.toLowerCase()!="calabresa"){
        gustoPizza= prompt("El gusto ingresado es incorrecto. Por favor vuelva a ingresar que gusto quiere para la pizza " + i +" (Solo disponible hasta 5 pizzas o las que se pidan ). Los gustos disponibles son napolitana, muzzarella, fugazzeta, cuatro quesos y calabresa.")
    }
    return gustoPizza
}
function Imprimir(can,tot,pizzas){
    pizzas.forEach((pizza)=>{console.log("Para la pizza "+ pizza.nropizza+" usted va a ordenar una "+pizza.gusto+" "+ pizza.tamaño+ " y vale "+pizza.precio)})
    

    if (can==1){
        console.log("Su pedido es de " +can+" pizza y vale "+tot)
    }
    else{
        console.log("Su pedido es de " +can+" pizzas y vale "+tot)
    }
    // console.log(pizzas.join(","))
    
}
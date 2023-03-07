let tipoPizza= prompt('Ingrese "1" si quiere pizza chica o "2" si quiere pizza grande')

while ((tipoPizza != 1 ) && (tipoPizza != 2)){
    tipoPizza=prompt('No es valido, Ingrese "1" si quiere pizza pequeña o "2" si quiere pizza grande ')
}
let tamañoPizza=""
if (tipoPizza==1){
    tamañoPizza="chica"
}else{
    tamañoPizza="grande"
}
console.log("Usted va a ordenar el tipo de pizza "+tamañoPizza)
let precio=Precio(tamañoPizza)

console.log("El precio individual de la pizza "+tamañoPizza+" es de "+ precio)

let cantidad=parseInt(prompt('Ingrese la cantidad de pizzas que va a pedir'))
while(cantidad==0 || cantidad==null){
    cantidad=parseInt(prompt('El valor ingresado no es valido, Ingrese nuevamente la cantidad de pizzas que va a pedir'))
}
if (cantidad==1){
    console.log("Usted va a pedir "+cantidad+" pizza")
}
else{
    console.log("Usted va a pedir "+cantidad+" pizzas")
}


for (let i=1; i<cantidad+1 && i<4+1; i++){
    let gustoPizza= prompt("Ingrese que gusto quiere para la pizza " + i +" (Solo disponible hasta las primeras 4 pizzas o las que se pidan ). Los gustos disponibles son napolitana, muzzarella, fugazzeta, cuatro quesos y calabresa.")

    console.log('La pizza ' + i + ' es de '+gustoPizza)
}

Total(precio,cantidad)

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
function Total(p,can){
    let total=p*can
    Imprimir(can,total)
}
function Imprimir(can,tot){
    if (can==1){
        console.log("Su pedido es de " +can+" pizza y vale "+tot)
    }
    else{
        console.log("Su pedido es de " +can+" pizzas y vale "+tot)
    }
    
}
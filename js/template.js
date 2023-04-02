const cargaHTML= (pizza)=>{
    return `<div class="producto">
                <div class="img">
                    <img src="${pizza.imagen}" alt="">
                </div>
                <h3>${pizza.gusto}</h3>
                <ul class="cont_cat">
                    <li>${pizza.tamaño}</li>
                </ul>
                <a href=""><button id="${pizza.id}">$${pizza.precio}</button></a>
            </div>`

}
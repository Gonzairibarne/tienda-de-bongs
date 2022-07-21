// Inventario de DropBongs


let nombre = prompt("ingresa tu nombre de usuario")


class Productos{
 
    constructor(producto, stock, precio){
        this.titulo = producto;
        this.stock = stock;
        this.precio = precio;
    }

}


const bong1 = new Productos("Bong Hongos", 10, 7.000 );

const bong2 = new Productos("Bong Rosse", 10, 7.900 );

const bong3 = new Productos("Bong minis", 10, 4.500 );

const bong4 = new Productos("Bong Merce", 10, 8.000 );

const bong5 = new Productos("Bong Universo", 10, 20.000 );

const bong6 = new Productos("Bong Frutillas", 10, 18.000 );

const bong7 = new Productos("Bong Silicona Love", 10, 3.500 );

const bong8 = new Productos("Bong Rich", 10, 15.000 );

const inventario = [bong1, bong2, bong3, bong4, bong5, bong6, bong7, bong8]

boton1 = document.getElementById("bong1")
boton2 = document.getElementById("bong2")
boton3 = document.getElementById("bong3")
boton4 = document.getElementById("bong4")
boton5 = document.getElementById("bong5")
boton6 = document.getElementById("bong6")
boton7 = document.getElementById("bong7")
boton8 = document.getElementById("bong8")

const botones = [ boton1, boton2, boton3, boton4, boton5, boton6, boton7, boton8 ]

let contadorDeCarrito = 0

function agregarAlCarrito(){

    contadorDeCarrito = contadorDeCarrito + 1;

    document.getElementById("contador__carrito").textContent = contadorDeCarrito;
    alert(nombre +" agrego un producto");
    console.log(contadorDeCarrito);
}
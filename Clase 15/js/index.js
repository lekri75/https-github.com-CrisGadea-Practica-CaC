
// let nombre = "Cristian";

// let apellido = "Gadea";

// var edad = 25;



// Creamos una funcion que imprime por consola del navegador nombre completo,
// recibiendo como parámetro el nombre y el apellido
// function mostrarNombreCompleto (nombre1, apellido1) {
//     var nombreCompleto = nombre1 + " " + apellido1;

//     console.log(nombreCompleto);
// }

// Para ejecutar la funcion que imprime un nombre completo, la llamamos

//mostrarNombreCompleto(nombre, apellido);


// ------------------------------------------- //

// Sobreescribimos los valores de las variables para ejecutar nuevamente la funcion
// nombre = "Jose";

// apellido = "Doe";

//mostrarNombreCompleto(nombre, apellido);

// nombre = "Cristian";


// Estructuras

// Condicionales

/*
if (nombre == "Cristian" && edad >= 18) {
    console.log("Bienvenido Cristian, ya sos mayor de edad");
} else {
    console.log("Bienvenido " + nombre + ", esperaba un Cristian mayor");
}
*/

// Estructura Iterativa (Bucle)

//variale++;  => incrementar el valor de la variable en +1


// Bucle for => Repite un codigo tantas veces como le indiquemos en la validacion
// for (let numero = 1; numero <= 10; numero++) {
//     console.log(numero);
// }

// Limpiamos el localStorage
localStorage.clear();

/* 
---------------  Lista de productos a mostrar en la página  -------------------
    * Array [] de productos ( de formato JSON {} )  // JSON: JavaScript Object Notation
*/

const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        img: "./img/notebook.webp",
        precio: 1000,
        descripcion: "lorem insump 1",
        stock: 10
    },
    {
        id: 2,
        nombre: "Producto 2",
        img: "./img/notebook.webp",
        precio: 2000,
        descripcion: "lorem insump 2",
        stock: 20
    },
    {
        id: 3,
        nombre: "Producto 3",
        img: "./img/notebook.webp",
        precio: 3000,
        descripcion: "lorem insump 3",
        stock: 30
    },
    {
        id: 4,
        nombre: "Producto 4",
        img: "./img/notebook.webp",
        precio: 4000,
        descripcion: "lorem insump 4",
        stock: 40
    },
    {
        id: 5,
        nombre: "Producto 5",
        img: "./img/notebook.webp",
        precio: 5000,
        descripcion: "lorem insump 5",
        stock: 50
    }
];

// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(productos);

// Guardamos en el localstorage el array JSON convertido de productos
localStorage.setItem("productos", productosEnStorage);


let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));

let carrito = [];

const generarCards = (productos) => {
    // Obtenemos el div que contendra las cards de productos
    let cards = document.getElementById("products");

    let total = 0;
    productos.forEach( producto => {
        
        total += producto.precio;  // total = total + producto.precio;

        // Creamos la etiqueta Card
        let cardProductos = document.createElement("div");
        cardProductos.className = "card m-3";

        let card = `
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">
                    ${producto.descripcion}
                </p>
                <p class="card-text">
                    ${producto.precio}
                </p>
                <a class="btn btn-primary" id="cart${producto.id}">Agregar al Carrito</a>
            </div>
        `;
    
        cardProductos.innerHTML = card;
        cards.appendChild(cardProductos);

        let productCard = document.getElementById("cart" + producto.id);

        productCard.addEventListener("click", (evento)=>{
            evento.preventDefault();
            carrito.push(producto);
        });


    });

    localStorage.setItem("precioTotal",total);
    
}


generarCards(productos);


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});



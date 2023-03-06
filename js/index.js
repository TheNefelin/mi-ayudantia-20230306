import { Sucursal, Categoria, Producto } from "../class/Api.js";
import { renderSelect } from "../component/renderSelect.js";

window.onload = () => {
    prueba1()

}

function prueba1() {
    const prueba = new Sucursal().getSucursal()
    prueba.then(e => console.log(e));

    Promise.all([
        new Sucursal().getSucursal(),
        new Categoria().getCategoria(),
        new Producto().getProducto()
    ]).then(arr => {
        const contenedor = document.querySelector(".contenedor");
        contenedor.appendChild(renderSelect(arr[0]));
    });    

    // Promise.all([
    //     fetch("https://slifer.bsite.net/td-sucursal").then(d => d.json()),
    //     fetch("https://slifer.bsite.net/td-categoria").then(d => d.json()),
    //     fetch("https://slifer.bsite.net/td-producto").then(d => d.json())
    // ]).then(arr => {
    //     console.log(arr[0])
    //     console.log(arr[1])
    //     console.log(arr[2])
    // });

    // const res1 = fetch("https://slifer.bsite.net/td-sucursal")
    //     .then(d => d.json())
    //     .then(data => console.log(data));

    // const res2 = fetch("https://slifer.bsite.net/td-categoria")
    //     .then(d => d.json())
    //     .then(data => console.log(data));      
 
    // const res3 = fetch("https://slifer.bsite.net/td-producto")
    //     .then(d => d.json())
    //     .then(data => console.log(data));  
    
    // sucursal()
    // categoria()
    // producto()
}

async function sucursal() {
    const res = await fetch("https://slifer.bsite.net/td-sucursal")
    const data = await res.json();
    console.log(data);
}

async function categoria() {
    const res = await fetch("https://slifer.bsite.net/td-categoria")
    const data = await res.json();
    console.log(data);
}

async function producto() {
    const res = await fetch("https://slifer.bsite.net/td-producto")
    const data = await res.json();
    console.log(data);
}


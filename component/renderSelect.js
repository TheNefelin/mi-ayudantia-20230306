export function renderSelect(arr) {
    const select = document.createElement("select");
    select.classList.add("sucursal");

    arr.forEach(e => {
        const op = document.createElement("option");
        op.value = e.id;
        op.innerText = e.nombre;

        select.appendChild(op);
    });

    
    return select;
}
const input_nombre_conductor = document.getElementById("nombre_conductor");
const input_edad_conductor = document.getElementById("edad_conductor");
const input_seguro = document.getElementById("seguro");
const input_carnet = document.getElementById("carnet");
const input_tcarnet = document.getElementById("tcarnet");

let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];

function guardar_ed() {
    let nombre = input_nombre_conductor.value;
    let edad = input_edad_conductor.value;
    let seguro = input_seguro.value;
    let carnet = input_carnet.value;
    let tcarnet = input_tcarnet.value;

    if (nombre == "" || edad == "" || seguro == "" || carnet == "" || tcarnet == "") {
        alert("Completa todos los campos");
        return;
    }
    if (edad <= 0) {
        alert("Edad no válida");
        return;
    }if (edad < 18) {
        alert("Edad no válida, debe ser mayor a 18");
        return;
    }

    let conductor = {
        nombre: nombre,
        edad: edad,
        seguro: seguro,
        carnet: carnet,
        tcarnet: tcarnet
    };

    lista_ed.push(conductor);
    localStorage.setItem("lista_ed", JSON.stringify(lista_ed));
    alert("CONDUCTOR GUARDADO");

    input_nombre_conductor.value = "";
    input_edad_conductor.value = "";
    input_seguro.value = "";
    input_carnet.value = "";
    input_tcarnet.value = "";
}

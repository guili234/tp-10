const input_marca = document.getElementById("marca");
const input_modelo = document.getElementById("modelo");
const input_patente = document.getElementById("patente");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];

function guardar_db() {
    let marca = input_marca.value;
    let modelo = input_modelo.value;
    let patente = input_patente.value;

    if (marca == "" || modelo == "" || patente == "") {
        alert("Completa todos los campos");
        return;
    }

    let vehiculo = {
        marca: marca,
        modelo: modelo,
        patente: patente.toUpperCase(),
        conductores: []
    };

    lista_db.push(vehiculo);
    localStorage.setItem("lista_db", JSON.stringify(lista_db));
    alert("VEHÍCULO GUARDADO");

    input_marca.value = "";
    input_modelo.value = "";
    input_patente.value = "";
}

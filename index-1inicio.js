const div_resultados_crinicio = document.getElementById("div_resultados_crinicio");
const div_resultados_vlinicio = document.getElementById("div_resultados_vlinicio");

let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];
let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];

mostrar_ultimo_conductor(lista_ed);
mostrar_ultimo_vehiculo(lista_db);

function mostrar_ultimo_conductor(lista) {
    if (lista.length == 0) {
        div_resultados_crinicio.innerHTML = "<h3>NO HAY CONDUCTORES</h3>";
        return;
    }

    let conductor = lista[lista.length - 1];

    div_resultados_crinicio.innerHTML = "<h2>Último conductor registrado</h2>";
    div_resultados_crinicio.innerHTML += "<h3>Nombre: " + conductor.nombre + "</h3>";
    div_resultados_crinicio.innerHTML += "<h4>Edad: " + conductor.edad + "</h4>";
    div_resultados_crinicio.innerHTML += "<h4>Seguro: " + conductor.seguro + "</h4>";
    div_resultados_crinicio.innerHTML += "<h4>Carnet: " + conductor.carnet + " (" + conductor.tipo_carnet + ")</h4>";
}

function mostrar_ultimo_vehiculo(lista) {
    if (lista.length == 0) {
        div_resultados_vlinicio.innerHTML = "<h3>NO HAY VEHÍCULOS</h3>";
        return;
    }

    let vehiculo = lista[lista.length - 1];

    div_resultados_vlinicio.innerHTML = "<h2>Último vehículo registrado</h2>";
    div_resultados_vlinicio.innerHTML += "<h3>Marca: " + vehiculo.marca + "</h3>";
    div_resultados_vlinicio.innerHTML += "<h4>Modelo: " + vehiculo.modelo + "</h4>";
    div_resultados_vlinicio.innerHTML += "<h4>Patente: " + vehiculo.patente + "</h4>";
    div_resultados_vlinicio.innerHTML += "<h4>Conductores: " + vehiculo.conductores + "</h4>";
}

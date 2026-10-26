const div_resultados_db = document.getElementById("resultados_db");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];
mostrar_lista_db(lista_db);

function mostrar_lista_db(lista) {
    div_resultados_db.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let vehiculo = lista[i];
        div_resultados_db.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultados_db.innerHTML += "<h2>Marca: " + vehiculo.marca + "</h2>";
        div_resultados_db.innerHTML += "<h3>Modelo: " + vehiculo.modelo + "</h3>";
        div_resultados_db.innerHTML += "<h3>Patente: " + vehiculo.patente + "</h3>";
        div_resultados_db.innerHTML += "<h3>Conductores: " + vehiculo.conductores + "</h3>";
        div_resultados_db.innerHTML += "<label for='conductor" + i + "'>Conductor nuevo </label>";
        div_resultados_db.innerHTML += "<input type='text' id='conductor" + i + "'>";
        div_resultados_db.innerHTML += "<button class='agregar_conductor' type='button' onclick='agregar_conductor(" + i + ")'>AGREGAR CONDUCTOR</button>";
        div_resultados_db.innerHTML += "<hr>";
    }
}

function agregar_conductor(index) {
    let nombre = document.getElementById("conductor" + index).value;

    if (nombre == "") {
        alert("Escribe el nombre de un conductor");
        return;
    }

    let conductores = JSON.parse(localStorage.getItem("lista_ed")) || [];
    let nombre_registrado = "";
    for (let j = 0; j < conductores.length; j++) {
        if (conductores[j].nombre.toLowerCase() == nombre.toLowerCase()) {
            nombre_registrado = conductores[j].nombre;
        }
    }
    if (nombre_registrado == "") {
        alert("Ese conductor no está registrado");
        return;
    }

    lista_db[index].conductores.push(nombre_registrado);
    localStorage.setItem("lista_db", JSON.stringify(lista_db));
    mostrar_lista_db(lista_db);
}

function borrar_db() {
    lista_db = [];
    localStorage.removeItem("lista_db");
    div_resultados_db.innerHTML = "";
    alert("VEHÍCULOS BORRADOS");
}

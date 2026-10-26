const div_resultados_ed = document.getElementById("div_resultados_ed");

let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];
mostrar_lista_ed(lista_ed);

function mostrar_lista_ed(lista) {
    div_resultados_ed.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let conductor = lista[i];
        div_resultados_ed.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultados_ed.innerHTML += "<h2>Nombre: " + conductor.nombre + "</h2>";
        div_resultados_ed.innerHTML += "<h3>Edad: " + conductor.edad + "</h3>";
        div_resultados_ed.innerHTML += "<h3>Seguro: " + conductor.seguro + "</h3>";
        div_resultados_ed.innerHTML += "<h3>Carnet: " + conductor.carnet + "</h3>";
        div_resultados_ed.innerHTML += "<h3>Tipo de carnet: " + conductor.tipo_carnet + "</h3>";
        div_resultados_ed.innerHTML += "<hr>";
    }
}

function borrar_ed() {
    lista_ed = [];
    localStorage.removeItem("lista_ed");
    div_resultados_ed.innerHTML = "";
    alert("CONDUCTORES BORRADOS");
}

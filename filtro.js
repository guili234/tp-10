const div_resultado_personas = document.getElementById("div_resultados_edinicio");
const div_resultado_autos = document.getElementById("div_resultados_dbinicio");

let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];
let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];

function filtrar_A1(){
    if(lista_ed.length === 0){
        div_resultado_personas.innerHTML = "no hay personas"
    }else{
        div_resultado_personas.innerHTML = ""
        for(let i = 0; i < lista_ed.length; i++){
            let persona = lista_ed[i];
            if (persona["tcarnet"] === "A1" && persona["tcarnet"] === "a1"){
                div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
                div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
                div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
                div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"
        }
    }
    }
    if(lista_db.length === 0){
        div_resultado_autos.innerHTML = "no hay autos"
    }else{
        div_resultado_autos.innerHTML = ""
        for(let i = 0; i < lista_db.length; i++){
            let auto = lista_db[i];
            if (auto["tcarnet"] === "A1"){
                div_resultado_autos.innerHTML += "<h2>marca:" + auto["nombre"] + "</h2>"
                div_resultado_autos.innerHTML += "<h2>modelo:" + auto["modelo"] + "</h2>"
                div_resultado_autos.innerHTML += "<p>tipo de carnet:" + auto["tcarnet"] + "</p>"
                div_resultado_autos.innerHTML += "<p>patente:" + auto["patente"] + "</p>"
            }
        }
    }
}

function filtrar_A2(){
    if(lista_ed.length === 0){
        div_resultado_personas.innerHTML = "no hay personas"
    }else{
        div_resultado_personas.innerHTML = ""
        for(let i = 0; i < lista_ed.length; i++){
            let persona = lista_ed[i];
            if (persona["tcarnet"] === "A2"){
                div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
                div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
                div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
                div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"
        }
    }
    }
    if(lista_db.length === 0){
        div_resultado_autos.innerHTML = "no hay autos"
    }else{
        div_resultado_autos.innerHTML = ""
        for(let i = 0; i < lista_db.length; i++){
            let auto = lista_db[i];
            if (auto["tcarnet"] === "A2"){
                div_resultado_autos.innerHTML += "<h2>marca:" + auto["nombre"] + "</h2>"
                div_resultado_autos.innerHTML += "<h2>modelo:" + auto["modelo"] + "</h2>"
                div_resultado_autos.innerHTML += "<p>tipo de carnet:" + auto["tcarnet"] + "</p>"
                div_resultado_autos.innerHTML += "<p>patente:" + auto["patente"] + "</p>"
            }
        }
    }
}

function filtrar_A3(){
    if(lista_ed.length === 0){
        div_resultado_personas.innerHTML = "no hay personas"
    }else{
        div_resultado_personas.innerHTML = ""
        for(let i = 0; i < lista_ed.length; i++){
            let persona = lista_ed[i];
            if (persona["tcarnet"] === "A3"){
                div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
                div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
                div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
                div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"
        }
    }
    }
    if(lista_db.length === 0){
        div_resultado_autos.innerHTML = "no hay autos"
    }else{
        div_resultado_autos.innerHTML = ""
        for(let i = 0; i < lista_db.length; i++){
            let auto = lista_db[i];
            if (auto["tcarnet"] === "A3"){
                div_resultado_autos.innerHTML += "<h2>marca:" + auto["nombre"] + "</h2>"
                div_resultado_autos.innerHTML += "<h2>modelo:" + auto["modelo"] + "</h2>"
                div_resultado_autos.innerHTML += "<p>tipo de carnet:" + auto["tcarnet"] + "</p>"
                div_resultado_autos.innerHTML += "<p>patente:" + auto["patente"] + "</p>"
            }
        }
    }
}

function filtrar_B1(){
    if(lista_ed.length === 0){
        div_resultado_personas.innerHTML = "no hay personas"
    }else{
        div_resultado_personas.innerHTML = ""
        for(let i = 0; i < lista_ed.length; i++){
            let persona = lista_ed[i];
            if (persona["tcarnet"] === "B1"){
                div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
                div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
                div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
                div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"
        }
    }
    }
    if(lista_db.length === 0){
        div_resultado_autos.innerHTML = "no hay autos"
    }else{
        div_resultado_autos.innerHTML = ""
        for(let i = 0; i < lista_db.length; i++){
            let auto = lista_db[i];
            if (auto["tcarnet"] === "B1"){
                div_resultado_autos.innerHTML += "<h2>marca:" + auto["nombre"] + "</h2>"
                div_resultado_autos.innerHTML += "<h2>modelo:" + auto["modelo"] + "</h2>"
                div_resultado_autos.innerHTML += "<p>tipo de carnet:" + auto["tcarnet"] + "</p>"
                div_resultado_autos.innerHTML += "<p>patente:" + auto["patente"] + "</p>"
            }
        }
    }
}

function filtrar_B2(){
    if(lista_ed.length === 0){
        div_resultado_personas.innerHTML = "no hay personas"
    }else{
        div_resultado_personas.innerHTML = ""
        for(let i = 0; i < lista_ed.length; i++){
            let persona = lista_ed[i];
            if (persona["tcarnet"] === "B2"){
                div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
                div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
                div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
                div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"
        }
    }
    }
    if(lista_db.length === 0){
        div_resultado_autos.innerHTML = "no hay autos"
    }else{
        div_resultado_autos.innerHTML = ""
        for(let i = 0; i < lista_db.length; i++){
            let auto = lista_db[i];
            if (auto["tcarnet"] === "B2"){
                div_resultado_autos.innerHTML += "<h2>marca:" + auto["nombre"] + "</h2>"
                div_resultado_autos.innerHTML += "<h2>modelo:" + auto["modelo"] + "</h2>"
                div_resultado_autos.innerHTML += "<p>tipo de carnet:" + auto["tcarnet"] + "</p>"
                div_resultado_autos.innerHTML += "<p>patente:" + auto["patente"] + "</p>"
            }
        }
    }
}

function filtrar_seguro(){
    if(lista_db.length === 0){
        div_resultado_autos.innerHTML = ""
    for(let i = 0; i < lista_db.length; i++){
        let persona = lista_db [i];
        if (auto["seguro"] === "no"){
            div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
            div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
            div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
            div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"            
        }else{
        div_resultado_autos.innerHTML = ""
        for(let i = 0; i < lista_ed.length; i++){
            let persona = lista_ed[i];
            if (auto["seguro"] === "si"){
                div_resultado_personas.innerHTML += "<h2>nombre:" + persona["nombre"] + "</h2>"
                div_resultado_personas.innerHTML += "<h2>apellido:" + persona["apellido"] + "</h2>"
                div_resultado_personas.innerHTML += "<p>tipo de carnet:" + persona["tcarnet"] + "</p>"
                div_resultado_personas.innerHTML += "<p>seguro:" + persona["seguro"] + "</p>"            }
                }
            }
        }
    }
}

ver_todo();

function ver_todo() {
    mostrar_lista_ed(lista_ed);
    mostrar_lista_db(lista_db);
}

function mostrar_lista_ed(lista_ed) {
    div_resultado_personas.innerHTML = "<h2>CONDUCTORES</h2>";
    if (lista_ed.length == 0) {
        div_resultado_personas.innerHTML += "<h3>NO HAY CONDUCTORES</h3>";
        return;
    }
    for (let i = 0; i < lista_ed.length; i++) {
        let conductor = lista_ed[i];
        div_resultado_personas.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultado_personas.innerHTML += "<h3>Nombre: " + conductor.nombre + "</h3>";
        div_resultado_personas.innerHTML += "<h4>Edad: " + conductor.edad + "</h4>";
        div_resultado_personas.innerHTML += "<h4>Seguro: " + conductor.seguro + "</h4>";
        div_resultado_personas.innerHTML += "<h4>Carnet: " + conductor.carnet + " (" + conductor.tipo_carnet + ")</h4>";
    }
}

function mostrar_lista_db(lista_db) {
    div_resultado_autos.innerHTML = "<h2>VEHÍCULOS</h2>";
    if (lista_db.length == 0) {
        div_resultado_autos.innerHTML += "<h3>NO HAY VEHÍCULOS</h3>";
        return;
    }
    for (let i = 0; i < lista_db.length; i++) {
        let vehiculo = lista_db[i];
        div_resultado_autos.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultado_autos.innerHTML += "<h3>Marca: " + vehiculo.marca + "</h3>";
        div_resultado_autos.innerHTML += "<h4>Modelo: " + vehiculo.modelo + "</h4>";
        div_resultado_autos.innerHTML += "<h4>Patente: " + vehiculo.patente + "</h4>";
        div_resultado_autos.innerHTML += "<h4>Conductores: " + vehiculo.conductores + "</h4>";
    }
}

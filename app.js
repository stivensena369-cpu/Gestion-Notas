const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO"},
    { nombre: "Luis", nota: 2.8, programa: "ADSO"},
    { nombre: "Marta", nota: 3.7, programa: "Diseño Web"},
    { nombre: "Pedro", nota: 1.9, programa: "ADSO"},
    { nombre: "Sofia", nota: 5.0, programa: "Diseño Web"}
];

console.log("Lista de aprendices:");
console.log(aprendices);




//filtrar aprendices aprobados (nota >=3)

const aprobados = aprendices.filter (aprendiz =>
    aprendiz.nota >=3);

    //filtrar aprendices reprobados (nota <3)
    
const reprobados = aprendices.filter (aprendiz =>
    aprendiz.nota <3);

    //mostramos resultamos

    console.log ("Estudiantes aprobados", aprobados);

    console.log ("Estudiantes reprobados", reprobados);


// Calcular el promedio de las notas

const promedio =
aprendices.reduce((acumulador, aprendiz) => acumulador + aprendiz.nota, 0) / aprendices.length;

// Mostrar el promedio

console. log("Promedio general: ");
console. log(promedio);

// Ordenar aprendices de mayor a menor nota

const ordenados = aprendices.sort((a, b) => b.nota - a.nota);

// Mostrar lista ordenada

console.log("Aprendices ordenados por nota: ");

console.log(ordenados);



let opcion = "";

const resultado = document.getElementById("resultado");

function mostrarMenu() {
    opcion = prompt(
        "MENU:\n" +
        "1. Ver aprendices\n" +
        "2. Ver aprobados\n" +
        "3. Ver reprobados\n" +
        "4. Ver promedio\n" +
        "0. Salir"
    );

    switch (opcion) {

        case "1":
            resultado.innerHTML = "<h3>Lista de aprendices</h3>" +
                aprendices.map(a => `${a.nombre} - ${a.nota} - ${a.programa}`).join("<br>");
            break;

        case "2":
            resultado.innerHTML = "<h3>Aprobados</h3>" +
                aprobados.map(a => `${a.nombre} - ${a.nota}`).join("<br>");
            break;

        case "3":
            resultado.innerHTML = "<h3>Reprobados</h3>" +
                reprobados.map(a => `${a.nombre} - ${a.nota}`).join("<br>");
            break;

        case "4":
            resultado.innerHTML = `<h3>Promedio: ${promedio}</h3>`;
            break;

        case "0":
            resultado.innerHTML = "<h3>Saliste del sistema</h3>";
            return;

        default:
            resultado.innerHTML = "<h3>Opción inválida</h3>";
    }

    
}

mostrarMenu();
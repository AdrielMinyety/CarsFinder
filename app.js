// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
// Obtener los Autos del Inventario
function obtenerAutos() {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}
// Datos de busqueda
let datosBusqueda = {
    marca: "",
    year: "",
    puertas: "",
    transmision: "",
    color: "",
    minimo: "",
    maximo: ""
}
// EventListener DOM cargado
document.addEventListener("DOMContentLoaded", (e) => {
    //obtener inventario y contenedor
    let contenedor = document.getElementById("resultado");
    let inventarioAutos = obtenerAutos();
    let template = ``;
    inventarioAutos.forEach(auto => {
        let template = `
        <div class="card col-md-4 p-0 m-2 mx-auto" style="max-width: 250px;">
            <div class="card-header font-weight-bold">
                ${auto.marca} - <span class="font-weight-light">color: </span><span class="text-info">${auto.color}</span>
            </div>
            <div class="card-body font-weight-bold">
                <h5 class="card-title">${auto.modelo} - ${auto.year}</h5>
                <p class="m-0">Puertas: <span class="text-info">${auto.puertas}</span></p>
                <p class="m-0">Transmisión: <span class="text-info">${auto.transmision}</span</p>
            </div>
            <div class="card-footer font-weight-bold text-success">
                $ ${auto.precio}
            </div>
        </div>
        `;
        contenedor.innerHTML += template;
    })
})
// eventListener detectar filtro
const marca = document.querySelector('#marca');
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
const year = document.querySelector('#year');
year.addEventListener('input', e => {
    datosBusqueda.year = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', e => {
    datosBusqueda.puertas = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
const color = document.querySelector('#color');
color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', e => {
    datosBusqueda.minimo = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e => {
    datosBusqueda.maximo = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAutos();
});
//====
// obtener contenedor
let contenedor = document.getElementById("resultado");

function filtrarAutos() {
    // obtener autos
    let resultado = obtenerAutos()
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo);
    
        if(resultado.length) {
            console.table(resultado);
            mostrarResultadosFiltrados(resultado);
        }else {
            contenedor.innerHTML = `
                <div class="alert alert-danger p-2 mx-auto font-weight-bold m-5">
                    No tenemos autos con las caracteristicas que pides
                </div>
            `
        }
}
//====
function mostrarResultadosFiltrados(resultado) {
    // obtener contenedor
    contenedor.innerHTML = "";
    let template = ``;

    resultado.forEach(auto => {
        let template = `
        <div class="card col-md-4 p-0 m-2 mx-auto" style="max-width: 250px;">
            <div class="card-header font-weight-bold">
                ${auto.marca} - <span class="font-weight-light">color: </span><span class="text-info">${auto.color}</span>
            </div>
            <div class="card-body font-weight-bold">
                <h5 class="card-title">${auto.modelo} - ${auto.year}</h5>
                <p class="m-0">Puertas: <span class="text-info">${auto.puertas}</span></p>
                <p class="m-0">Transmisión: <span class="text-info">${auto.transmision}</span</p>
            </div>
            <div class="card-footer font-weight-bold text-success">
                $ ${auto.precio}
            </div>
        </div>
        `;
        contenedor.innerHTML += template;
    })
}
//====== Filtrar datos ==================================
function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}
//====
function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === Number( datosBusqueda.year );
    } else {
        return auto;
    }
}
//====
function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === Number( datosBusqueda.puertas );
    } else {
        return auto;
    }
}
//====
function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}
//====
function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}
//====
function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= Number( datosBusqueda.minimo );
    } else {
        return auto;
    }
}
//====
function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= Number( datosBusqueda.maximo );
    } else {
        return auto;
    }
}


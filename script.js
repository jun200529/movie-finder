const API_KEY = "8dd2a6d8"; // Reemplaza con tu propia clave de API de OMDB

const boton = document.querySelector("#buscar");
const input = document.querySelector("#pelicula");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", buscarPeliculas);

input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        buscarPeliculas();

    }

});

async function buscarPeliculas(){

    const nombrePelicula = input.value.trim();

    if(nombrePelicula === ""){

        alert("Escribe una película");

        return;

    }

    resultado.innerHTML = "<h2>Buscando...</h2>";

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${nombrePelicula}`;

    const respuesta = await fetch(url);

    const datos = await respuesta.json();

    if(datos.Response === "False"){

        resultado.innerHTML = "<h2>No se encontraron resultados.</h2>";

        return;

    }

    datos.Search.sort((a,b)=>Number(b.Year)-Number(a.Year));

    resultado.innerHTML = "";

    for(const pelicula of datos.Search){

        let poster;

        if(pelicula.Poster==="N/A"){

            poster="https://via.placeholder.com/300x450?text=Sin+Imagen";

        }else{

            poster=pelicula.Poster;

        }

        resultado.innerHTML += `

        <div class="tarjeta">

            <img src="${poster}" alt="${pelicula.Title}">

            <h2>${pelicula.Title}</h2>

            <p><strong>Año:</strong> ${pelicula.Year}</p>

            <p><strong>Tipo:</strong> ${pelicula.Type}</p>

        </div>

        `;

    }

}
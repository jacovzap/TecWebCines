var queryParams = window.location.search.split('?');
var cineId = queryParams[1].split('=')[1];
var movieId = queryParams[2].split('=')[1];


function DeleteMovie(event){
    event.preventDefault();
    
    console.log(movieId);
    fetch(`http://localhost:52099/api/cines/${cineId}/movies/${movieId}`,{
        method: 'DELETE'
    });
    window.location.href = `peliculas.html?cineId=${cineId}`;
}

function GoToEditMovie()
{
    window.location.href = `formularioEditMovie.html?cineId=${cineId}?movieId=${movieId}`;
}

window.addEventListener('load', (event) => {


    function fetchGetDatos() {
        const url = `http://localhost:52099/api/cines/${cineId}/movies/${movieId}`;

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    console.log("something wrong happend");
                    return response.json()
                }
            })
            .then((data) => {
                /*var CineHTMLStringMapped = [data].map(p => `<span class="contenido">${p.name}</span>`);
                document.getElementById("titulo").innerHTML = CineHTMLStringMapped;*/
                /*var CineHTMLStringMapped = [data].map(p => `<img class="imageDiv" src="${p.imageLink}" alt="AQUI VA LA PELICULA">`);
                document.getElementById("imagen").innerHTML = CineHTMLStringMapped;*/

                var CineHTMLStringMapped = [data].map(p => ` <div> <h1 class="titulo">${p.name}</h1>
                     <br>
                     <img class="imageDiv" id="imagen" src="${p.imageLink}" alt="AQUI VA LA PELICULA">
             
                     <div class="alineaDerecha">
                       
                         <p class="subtitulos" >
                             <span class="contenido" id="descripcion">${p.descripcion}</span>
                         </p>
                     
                         
                         <p class="subtitulos" >Generos:
                             <span class="contenido" id="genero">${p.genero}</span>
                         </p>
             
                         <p class="subtitulos" >IMDb:
                             <span class="contenido" id="valoracion">${p.valoracion}</span>
                         </p>
             
                         <p class="subtitulos" >Director:
                             <span class="contenido" id="director">${p.director}</span>
                         </p>
              
                     </div>
                 </div>`);
                document.getElementById("detalle").innerHTML = CineHTMLStringMapped;




            });
    }





    fetchGetDatos();
    // document.getElementById('nav-peliculas').addEventListener('click', goToMovies(event));


});
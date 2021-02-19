var queryParams = window.location.search.split('?');
var cineId = queryParams[1].split('=')[1];
var movieId = queryParams[2].split('=')[1];


function regresar(){
    window.location.href = `movieDetalle.html?cineId=${cineId}?movieId=${movieId}`;
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

                var CineHTMLStringMapped = [data].map(p => `
                    <div class="form-group">
                        <label for="name">Nombre de la pelicula</label>
                        <input type="text" class="form-control" id="name" value="${p.name}">
                    </div>
                    <div class="form-group">
                        <label for="URLimage">URL de la imagen</label>
                        <input type="url" class="form-control" id="URLimage" value="${p.imageLink}">
                    </div>
                    <div class="form-group">
                        <label for="valoracion">Valoracion</label>
                        <input type="text" class="form-control" id="valoracion" value="${p.valoracion}">
                    </div>
                    <div class="form-group">
                        <label for="genero">Genero</label>
                        <input type="text" class="form-control" id="genero" value="${p.genero}">
                    </div>
                    <div class="form-group">
                        <label for="director">Director</label>
                        <input type="text" class="form-control" id="director" value="${p.director}">
                    </div>
                    <div class="form-group">
                        <label for="descripcion">Descripcion</label>
                        <input type="text" class="form-control" id="descripcion" value="${p.descripcion}">
                    </div>
        
                 `);
                document.getElementById("formulario").innerHTML = CineHTMLStringMapped;




            });
    }


    function fetchPutMovies(event) {
        
        console.log(event.currentTarget);
        event.preventDefault();
        const url = `http://localhost:52099/api/cines/${cineId}/movies/${movieId}`;


        var data = {
            name: event.currentTarget.name.value,
            imageLink: event.currentTarget.URLimage.value,
            valoracion: parseFloat(event.currentTarget.valoracion.value),
            genero: event.currentTarget.genero.value,
            director: event.currentTarget.director.value,
            descripcion: event.currentTarget.descripcion.value,
            CineId: parseInt(cineId)
        }

        fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify(data)
            
        }).then((response) => {
            if (response.status === 201) {
                console.log("movie modified successfuly");
                

            } else {
                response.text().then((data) => {
                   
                    console.log(data);
                });
            }
        }).catch((response) => {

            
            console.log(data);
        });
        regresar();
    }



    fetchGetDatos();
    // document.getElementById('nav-peliculas').addEventListener('click', goToMovies(event));

    var formCreate = document.getElementById("formFetch");
    if(formCreate)
    {
        formCreate.addEventListener("submit", fetchPutMovies);
    }

});
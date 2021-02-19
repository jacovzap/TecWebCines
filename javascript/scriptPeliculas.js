
    var queryParams = window.location.search.split('?');
    var cineId= queryParams[1].split('=')[1];

function goToCreateMovie(event)
{
        window.location.href = `formulario.html?cineId=${cineId}`;
}

function goToDeleteMovie(event)
{
        window.location.href = `formularioDelete.html?cineId=${cineId}`;
}

function goToMovie(movieId)
{
    window.location.href = `movieDetalle.html?cineId=${cineId}?movieId=${movieId}`;
}


window.addEventListener('load', (event) => {

    var queryParams = window.location.search.split('?');
    var cineId= queryParams[1].split('=')[1];

    async function fetchGetMovies() {
        const url = `http://localhost:52099/api/cines/${cineId}/movies`;
        let response = await fetch(url);

        try {
            if (response.status === 200) {
                let data = await response.json();
                var moviesHTMLStringMapped = data.map(p => `<div class="imagen-port" onclick="goToMovie(${p.id})">                   
                                                                <div class="card" style="width: rem;">
                                                                    <img class="card-img-top" src="${p.imageLink}" alt="Card image cap">
                                                                    <div class="card-body">
                                                                        <p class="letras">${p.name}</p>
                                                                    </div>
                                                                </div>
                                                            </div>`)
                var moviesContent = ` ${moviesHTMLStringMapped.join('')}`;
                document.getElementById("galeriaFetch").innerHTML = moviesContent;
            } else {
                console.log();
                throw new error(await response.text())
            }
        } catch (error) {
            console.error(error);
        }

    }

    fetchGetMovies()

});


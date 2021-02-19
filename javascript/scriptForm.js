var queryParams = window.location.search.split('?');
var cineId= queryParams[1].split('=')[1];


function regresar()
{
    window.location.href = `peliculas.html?cineId=${cineId}`;
}

window.addEventListener('load', (event) => {


    function fetchPostMovies(event) {
        
        console.log(event.currentTarget);
        event.preventDefault();
        const url = `http://localhost:52099/api/cines/${cineId}/movies`;


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
            method: 'POST',
            body: JSON.stringify(data)
            
        }).then((response) => {
            if (response.status === 201) {
                console.log("movie created successfuly");
                

            } else {
                response.text().then((data) => {
                   
                    console.log(data);
                });
            }
        }).catch((response) => {

            
            console.log(data);
        });

        event.currentTarget.name.value = null;
        event.currentTarget.URLimage.value = null;
        event.currentTarget.valoracion.value = null;
        event.currentTarget.genero.value = null;
        event.currentTarget.director.value = null;
        event.currentTarget.descripcion.value = null;
    }


  //DELETE
  function deleteMovie(event)
  {
      //const url=`${baseUrl}/beverages`;
      event.preventDefault();
      let id = event.currentTarget.idDelete.value;
      console.log(id);
      
      fetch(`http://localhost:52099/api/cines/${cineId}/movies/`+id,{
          method: 'DELETE'
         
      }
      
      );
      event.currentTarget.idDelete.value = null;
  };

  











      
    var formCreate = document.getElementById("formFetch");
    if(formCreate)
    {
        formCreate.addEventListener("submit", fetchPostMovies);
    }

    var formDelete = document.getElementById("formFetchDelete")
    if(formDelete)
    {
    formDelete.addEventListener("submit", deleteMovie);
    }
    


});


    var queryParams = window.location.search.split('?');
    var cineId= queryParams[1].split('=')[1];


 
function DeleteCine(event){
    event.preventDefault();
    
    console.log(cineId);
    fetch(`http://localhost:52099/api/cines/${cineId}`,{
        method: 'DELETE'
    });
    window.location.href = `cinesBolivia.html?cineId=${cineId}`;
}

function GoToEditCine(event)
 {
        window.location.href = `formularioEditCine.html?cineId=${cineId}`;
 }

function goToMovies(event)
 {
         window.location.href = `peliculas.html?cineId=${cineId}`;
 }

    
window.addEventListener('load', (event) => {


    function fetchGetDatos() {
           const url = 'http://localhost:52099/api/cines/' + cineId;

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
                    var CineHTMLStringMapped = [data].map(p => `<h3 class="nombreCine">${p.name}</h3>`);
                    document.getElementById("cineName").innerHTML = CineHTMLStringMapped;

                    var departamentoHTMLStringMapped = [data].map(p => `<h2 class="titulo-final">${p.location} - BOLIVIA - 2020</h2>`);
                    document.getElementById("departamento").innerHTML = departamentoHTMLStringMapped;
                });
    }


   
 

    fetchGetDatos();
   // document.getElementById('nav-peliculas').addEventListener('click', goToMovies(event));

    
});

function regresar()
{
    window.location.href = `cinesBolivia.html`;
}

window.addEventListener('load', (event) => {


    function fetchPostCine(event) {
        
        console.log(event.currentTarget);
        event.preventDefault();
        const url = `http://localhost:52099/api/cines/`;


        var data = {
            name: event.currentTarget.name.value,
            imageLink: event.currentTarget.URLimage.value,
        
            location: event.currentTarget.location.value,
     
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

     regresar();
    }


  
  











      
    var formCreate = document.getElementById("formFetch");
    if(formCreate)
    {
        formCreate.addEventListener("submit", fetchPostCine);
    }
    


});

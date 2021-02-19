function goToCines(cineId) {
    window.location.href = `index.html?cineId=${cineId}`;
}

function goToCreateCine() {
    window.location.href = `formularioCreateCine.html`;
}


window.addEventListener('load', (event) => {


    async function fetchGetCines() {
        const url = `http://localhost:52099/api/cines/`;
        let response = await fetch(url);

        try {
            if (response.status === 200) {
                let data = await response.json();
                var moviesHTMLStringMapped = data.map(p => `<div class="imagen-port">
                <div class="card" style="width: rem;">
                    <button type="button" class="boton" onclick="goToCines(${p.id})">
                        <img class="card-img-top" src="${p.imageLink}" alt="Card image cap">
                        <div class="card-body">
                            <p class="letras">${p.name}</p>
                        </div>
                    </button>
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

    fetchGetCines();


});
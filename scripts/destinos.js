const destinos = (places) => {
    showDestinos(places);
}

const showDestinos =  (places) => {
    const favoritesContainer = document.querySelector("#places");
    let aux = [];
    while (places.length!=0) {
        let index = Math.floor(Math.random() * places.length + 0);
        aux.push(places[index])
        places.splice(index, 1);
    }
    aux.forEach((place) => {
        var newPlace = document.createElement('div');
        newPlace.className = "col-lg-4 col-md-6 col-12 p-2";
        newPlace.innerHTML =
            `<div class="place-show shadow px-0 rounded" style="background: url(${place.img})">
                <div class="details text-light px-4 text-center">
                    <h3>${place.name}</h3>
                    <a class="btn btn-success w-50" href="/destino/?d=${place.id}">Ver</a>
                </div>
            </div>`;
        newPlace.id = place.id;
        favoritesContainer.appendChild(newPlace);
    });
}
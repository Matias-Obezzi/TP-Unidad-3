const home = (places) => {
    banner();
    addPlaces(places);
    favorites(places);
}

var change = null;
// const sentenses =[ "travels", "adventure", "passion", "action"]
const sentenses =[ "viajes", "aventura", "pasión", "acción", "emoción"]
var part = 0;
var part_index = 0;
var interval_instace;

const banner = () => {

    // Scroll indicator
    window.onscroll = (e) => {
        let dHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let percentage = (window.scrollY / dHeight) * 100;
        document.querySelector("#progress").style.width = percentage+"%";
    }

    // Search
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains('place')){
            document.querySelector("#search").value = e.target.innerHTML.trim()
        }
    })

    // Stars
    createStar(1,100);
    createStar(2,85);
    createStar(3,70);

    // Change
    change = document.querySelector(".change");
    interval_instace = setInterval(Write, 85);
    Write();
}

const Write = () => {
    var text = sentenses[part].substring(0, part_index + 1);
    change.innerHTML = text;
    part_index++;
    if(text == sentenses[part]){
        clearInterval(interval_instace);
        setTimeout(()=>{
            interval_instace = setInterval(Delete,25);
        }, 1000)
    }
}

const Delete = () => {
    var text = sentenses[part].substring(0, part_index - 1);
    change.innerHTML = text;
    part_index--;
    if(text == ''){
        clearInterval(interval_instace);
        if(part == (sentenses.length-1))
            part = 0;
        else
            part++;
            part_index = 0;
        setTimeout(()=>{
            interval_instace = setInterval(Write,85);
        }, 1000)
    }
}

const createStar = (type, quantity) => {
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    }

    for(let i=0; i<quantity; i++){
        var star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${randomNumber(1,99)}%`;
        star.style.bottom = `${randomNumber(1,99)}%`;
        star.style.animationDuration = `${randomNumber(50,200)}s`;
        document.querySelector('.stars').appendChild(star);
    }
}

const addPlaces = (places) => {
    const placesContainer = document.querySelector("#destinitys");
    places.forEach((place) => {
        var newPlace = document.createElement('a');
        newPlace.setAttribute('href', `./destino/?d=${place.id}`)
        // newPlace.classList.add("mx-2");
        // newPlace.classList.add("place");
        newPlace.className = "mx-2 place"
        newPlace.innerHTML = place.name;
        newPlace.id = place.id;
        placesContainer.appendChild(newPlace);
    });
    // <div class="mx-2 place" data-destiny="1">
    //     Cancún
    // </div>
}

const favorites = (places) => {
    const favoritesContainer = document.querySelector("#favoritesContainer");
    const temp = [];
    let cont = 0;
    while (cont < 3) {
        let index = Math.floor(Math.random() * places.length + 0);
        temp.push(places[index])
        places.splice(index, 1);
        cont ++;
    }
    temp.forEach((place) => {
        var newPlace = document.createElement('div');
        newPlace.className = "col-lg-4 col-md-6 col-12 p-2";
        newPlace.innerHTML =
            `<div class="place-show shadow px-0 rounded" style="background: url(${place.img})">
                <div class="details text-light px-4 text-center">
                    <h3>${place.name}</h3>
                    <a class="btn btn-success w-50" href="./destino/?d=${place.id}">Ver</a>
                </div>
            </div>`;
        newPlace.id = place.id;
        favoritesContainer.appendChild(newPlace);
    });
    // <div class="col-lg-4 col-md-6 col-12 p-2">
    //     <div class="place-show shadow px-0 rounded new-york">
    //         <div class="details text-light px-4 text-center">
    //             <h3>New York</h3>
    //             <button class="btn btn-success w-50">Ver</button>
    //         </div>
    //     </div>
    // </div>
}
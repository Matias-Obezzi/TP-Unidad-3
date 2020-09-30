const destino = (places) => {
    price = Math.floor(Math.random() * 9999 + 1000)
    totalPrice = price;
    loadPlace(places);
    changeName();
    changePeople();
    setForm();
}

var price = 0;
var totalPrice;

const loadPlace = (places) => {
    let placeId = new URLSearchParams(window.location.search).get("d");
    if(!placeId) window.location.replace("/");
    const place = places.filter(p => p.id == placeId)[0];
    document.title = "Travel WORLD - " + place.name
    $("#banner").css("background-image",`linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.10)), url(${place.img})`);
    $("#placeName").html(place.name);
    $("#price").html("$"+price);
    $("#totalPrice").html("$"+ totalPrice)
}

var people = 1;
var name = "";

const changeName = () => {
    document.querySelector("#name").addEventListener("input", (e) => {
        name = e.target.value;
        if(!name) document.querySelector("#submit").setAttribute("disabled",true);
        else document.querySelector("#submit").removeAttribute("disabled")
    })
}

const changePeople = () => {
    document.querySelector("#peopleSelector").addEventListener("change", (e) => {
        people = e.target.value;
        totalPrice = people * price;
        $("#totalPrice").html("$"+ totalPrice)
    })
}

const setForm = () => {
    document.querySelector("#buyForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if(confirm("¿Confirma la comprar?")){
            $('#buy').modal('hide');
            setAlert("Pasajes comprados exitosamente\nGracias por su compra!")
            name = ""
            people = 1;     
        }
    })
}

var timeout=null;
function setAlert(message){
    clearTimeout(timeout);
    let alert = document.getElementById("alert");
    let alertMessage = document.getElementById("alert-message");
    alertMessage.innerHTML = message;
    alert.classList.remove("d-none");
    timeout = setTimeout(()=>{
        alertMessage.innerHTML = '';
        alert.classList.add("d-none");
    }, 4000)
}
const forms = () => {
    setListeners();
}

var email = "";
var password = "";

const setListeners = () => {
    document.querySelector("#email").addEventListener("input", (e) => {
        email = e.target.value;
        isReady();
    })
    document.querySelector("#password").addEventListener("input", (e) => {
        password = e.target.value;
        isReady();
    })
    document.querySelector("#form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Bienvenid@ " + email.split("@")[0] + (
            window.location.pathname.includes("signin") ? "\nGracias por confiar en nosotros!" : "\nHace mucho no te vemos por acá"
        ))
        window.location.replace("../")
    } )
}

const isReady = () => {
    if(
        !email || !email.includes("@") || !email.split("@")[1].includes(".") ||
        !password || password.length<6) document.querySelector("#submit").setAttribute("disabled",true);
    else document.querySelector("#submit").removeAttribute("disabled")
}
// Cuando termina de cargar la pagina, ejecuta la funcion
window.addEventListener("load", () => {
    a(); // prevent del A
    nav(); // set scroll listener to nav
    setNav(); // check if web is home
    scripts(); // switch for scripts load
    if(window.location.hash){
        goToHash() // if hash exists, scroll to element
    }
})

const a = () => {
    $("a").on("click", (e) => {
        let hash = e.target.attributes.href.value;
        if(hash.contains("#")){
            e.preventDefault(); 
            history.pushState(null, null, hash);
            goToHash();
        }
    })
}

const goToHash = () => {
    if(window.location.href){
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - (document.querySelector("#nav").scrollHeight + 24)
        }, 0);
    }
}

const nav = () =>{
    window.addEventListener("scroll", function(e){
        setNav();
    })
}

const setNav = () =>{
    let nav = document.querySelector("#nav");
    let icon = document.querySelector("#icon");
    let progress = document.querySelector("#progress");
    let buttonMenu = document.querySelector("#button-menu");
    if(!document.querySelector("#home") || window.scrollY >= document.querySelector("#home").scrollHeight){
        nav.classList.add("navbar-light");
        nav.classList.remove("navbar-dark");
        buttonMenu.classList.add("invert");
        buttonMenu.querySelector(".navbar-toggler-icon").classList.remove("invert");
        icon.classList.add("invert");
        progress.classList.add("invert");
    }else{
        nav.classList.add("navbar-dark");
        nav.classList.remove("navbar-light")
        buttonMenu.classList.remove("invert");
        buttonMenu.querySelector(".navbar-toggler-icon").classList.add("invert");
        icon.classList.remove("invert");
        progress.classList.remove("invert");
    }
}

const scripts = () => {
    console.log(window.location.pathname)
    switch(window.location.pathname){
        case "/index.html":
        case "/":
            $.getScript('./scripts/home.js', function(e){
                home(places);
            })
            break;
        case "/destino/":
            $.getScript('../scripts/destino.js', function(e){
                destino(places);
            })
            break;
        case "/destinos/":
            $.getScript('../scripts/destinos.js', function(e){
                destinos(places);
            })
            break;
        default:
            // if(!window.location.hash) window.location.replace('/index.html')
    }
}

const places = [
    {
        id: 0,
        name: 'Cancún',
        img: 'https://source.unsplash.com/collection/9599605/1080x1080'
    },
    {
        id: 1,
        name: 'New York',
        img: 'https://source.unsplash.com/collection/2581403/1080x1080'
    },
    {
        id: 2,
        name: 'Dubai',
        img: 'https://source.unsplash.com/collection/892905/1080x1080'
    },
    {
        id: 3,
        name: 'Bahamas',
        img: 'https://source.unsplash.com/collection/9797733/1080x1080'
    },
    {
        id: 4,
        name: 'Cuba',
        img: 'https://source.unsplash.com/collection/538664/1080x1080'
    },
    {
        id: 5,
        name: 'Miami',
        img: 'https://source.unsplash.com/collection/919410/1080x1080'
    },
    {
        id: 6,
        name: 'Tel Aviv',
        img: 'https://source.unsplash.com/collection/4393065/1080x1080'
    },
    {
        id: 7,
        name: 'Egipto',
        img: 'https://source.unsplash.com/collection/4539683/1080x1080'
    },
    {
        id: 8,
        name: 'Francia',
        img: 'https://source.unsplash.com/collection/607756/1080x1080'
    },
    {
        id: 9,
        name: 'Mónaco',
        img: 'https://source.unsplash.com/collection/4695850/1080x1080'
    },
    {
        id: 10,
        name: 'Japón',
        img: 'https://source.unsplash.com/collection/4301459/1080x1080'
    },
    {
        id: 11,
        name: 'Londres',
        img: 'https://source.unsplash.com/collection/485/1080x1080'
    },

]
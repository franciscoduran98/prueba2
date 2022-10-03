const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click', ()=>{
    //Al menu se le agregan las clases, le agrega y le quita spread
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer  ){


        menu.classList.toggle("spread");

        }
})
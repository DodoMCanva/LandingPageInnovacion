let pantallas = document.querySelectorAll('.pantalla');
let pantallaActual = 0;

function mostrarAnuncio(){
    pantallas[pantallaActual].style.opacity = 0;
    pantallas[pantallaActual].style.visibility = 'hidden';

    pantallaActual = (pantallaActual + 1) % pantallas.length;

    pantallas[pantallaActual].style.opacity = 1;
    pantallas[pantallaActual].style.visibility = 'visible';
}

mostrarAnuncio()
setInterval(mostrarAnuncio, 4000)



// Año dinámico en el footer
document.getElementById('y').textContent = new Date().getFullYear();

var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Cambié nexEl a nextEl
        prevEl: ".swiper-button-prev"  // Cambié prevEL a prevEl
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next", // Cambié nexEl a nextEl
        prevEl: ".swiper-button-prev"  // Cambié prevEL a prevEl
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        1024: { // Cambié 0 a 1024 para el tercer breakpoint
            slidesPerView: 3
        },
    }
});

// Carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const elementos3 = document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody'); // Cambié #lista-carrito tbody
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); // Cambié vacair-carrito a #vaciar-carrito

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) { // Cambié clasList a classList
        leerDatosElemento(e.target.parentElement.parentElement);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent, // Cambié precio a .precio
        id: elemento.querySelector('a').getAttribute('data-id'),
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
          ${elemento.titulo}
        </td>
        <td>
        ${elemento.precio}
        </td>
        <td>
          <a href="#" class="borrar" data-id="${elemento.id}">Borrar</a> <!-- Agregué el texto "Borrar" -->
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

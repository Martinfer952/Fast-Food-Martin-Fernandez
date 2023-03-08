/////////////// BOTONES NAV //////////////////
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let btnCerrarCarrito = document.querySelector(".fa-xmark");
btnCerrarCarrito.addEventListener("click", () => {
  shoppingCart.classList.remove("active");
});

let navbar = document.querySelector(".nav-bar");

/*************** MENU BTN***************/
/**************************************/
const menuToggle = document.querySelector(".toggle");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
});

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

/////////////// BOTONES ICONOS SECCION ARME SU COMBO //////////////////
let boxPizzas = document.querySelector(".pizzasContainer");
let boxBurger = document.querySelector(".burgersContainer");
let boxBebidas = document.querySelector(".bebidasContainer");
let btnBurger = document.querySelector("#burger-btn");
let btnPizzas = document.querySelector("#pizza-btn");
let btnBebidas = document.querySelector("#bebidas-btn");

window.onload = () => {
  swiperBucle();
};

document.querySelector("#pizza-btn").onclick = () => {
  boxPizzas.classList.remove("desactive");
  boxBurger.classList.add("desactive");
  boxBebidas.classList.add("desactive");

  btnBurger.classList.remove("color");
  btnPizzas.classList.add("color");
  btnBebidas.classList.remove("color");

  swiperBucle();
};

document.querySelector("#burger-btn").onclick = () => {
  boxPizzas.classList.add("desactive");
  boxBurger.classList.remove("desactive");
  boxBebidas.classList.add("desactive");

  btnBurger.classList.add("color");
  btnPizzas.classList.remove("color");
  btnBebidas.classList.remove("color");

  swiperBucle();
};

document.querySelector("#bebidas-btn").onclick = () => {
  boxPizzas.classList.add("desactive");
  boxBurger.classList.add("desactive");
  boxBebidas.classList.remove("desactive");

  btnBurger.classList.remove("color");
  btnPizzas.classList.remove("color");
  btnBebidas.classList.add("color");

  swiperBucle();
};
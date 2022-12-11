const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const id = document.querySelector('#id');
const parrafo = document.querySelector('.parrafo');
const input = document.querySelector('input');

const pID = document.getElementById('id');
const pClass = document.getElementsByClassName('parrafo');

console.log({
    h1, p, id, parrafo, input
});

h1.innerHTML = "TE AMO FANNY <br> Casemonos"
h1.innerText = "¿Aceptas?"
//console.log(h1.getAttribute('class'));
//console.log(h1.setAttribute = "SÍ ACEPTO...");
h1.classList.add("Boda"); 
h1.classList.remove("class");
//h1.classList.toggle();
//h1.classList.contains();

input.value = "¿Para cuando es la boda";
pID.innerText="";
const img = document.createElement('img');
img.src = 'https://imborrable.com/wp-content/uploads/2022/10/fotos-gratis-de-stock-1.jpg';
pID.append(img);


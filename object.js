//Para crear un array con las propiedades de un objeto.
const obj = {
    nombre: "Estefanny",
    year: 21,
    date: "17-12-2001",
    comidasFavoritas: ["Pechuga", "Tacos dorados de pollo", "Enchiladas suizas"],
    comidasQueNoLeGusta: ["Catsup, Corazón"]
}

let arr = Object.values(obj)
Object.keys(obj)


//---------------------------------------
function conseguirSuscripcion(text){
    let suscription = {
        FREE: "Sólo puedes tomar cursos gratis",
        BASIC: "Puedes tomar casi todos los cursos de Platzi durante un mes",
        EXPERT: "Puedes tomar casi todos los cursos de Platzi durante un año",
        EXPERTDUO: "Puedes tomar TODOS los cursos de Platzi durante un año"
    }
   if(suscription[text.toUpperCase()]){
        console.log(suscription[text.toUpperCase()]);
        return;
   }
   else {
       console.warn("Ese no existe");
   }
}
let form = document.querySelector(".form"); 
let ciudad = document.querySelector("#ciudad"); 
let barcelona = document.querySelector("#barcelona"); 
let madrid = document.querySelector("#madrid"); 
let sevilla = document.querySelector("#sevilla"); 
let valencia = document.querySelector("#valencia"); 
let malaga = document.querySelector("#malaga"); 
let murcia = document.querySelector("#murcia"); 
let bilbao = document.querySelector("#bilbao"); 

let labelNumeroDeNoche = document.querySelector("#labelNumeroDeNoche"); 
let inputNumeroDeNoche = document.querySelector("#inputNumeroDeNoche"); 

let labelNumeroDiaAlquilerCoche = document.querySelector("#labelNumeroDiaAlquilerCoche"); 
let inputNumeroDiaAlquilerCoche = document.querySelector("#inputNumeroDiaAlquilerCoche"); 

let btnCalcularCoste = document.querySelector(".btnCalcularCoste"); 
let price = document.querySelector("#price"); 


function calcularCoste (city, nights, carDays) { 
    const noche = costeHotel(nights); 
    const avion = costeAvion(city, nights); 
    const coche = costeCoche(carDays); 
    return price.innerText = "$ " + noche + avion + coche;
} 

function costeHotel (numeroNochesHotel) {
    let totalCosteHotel = 0; 
    return totalCosteHotel = 140 * numeroNochesHotel;
}

function costeAvion (nombreCiudad, numeroNoches) {  
    let totalCosteAvion = 0;
    if(nombreCiudad === "barcelona") {
        totalCosteAvion = 80;
    } 
    else if(nombreCiudad === "madrid") {
        totalCosteAvion = 90;
    } 
    else if(ciudad.value == "sevilla") {
        totalCosteAvion = 50;
    } 
    else if(nombreCiudad == "valencia") {
        totalCosteAvion = 40;
    } 
    else if(nombreCiudad == "malaga") {
        totalCosteAvion = 45;
    } 
    else if(nombreCiudad == "murcia") {
        totalCosteAvion = 30;
    } 
    else if(nombreCiudad == "bilbao") {
        totalCosteAvion = 70;
    }
    return totalCosteAvion; 
}

function costeCoche(numDiasAlquilerCoche) {
    let descuento = 0;
    let totalCosteCoche = 0; 
    
    return totalCosteCoche = 40 * inputNumeroDiaAlquilerCoche.value;
    
    if(inputNumeroDiaAlquilerCoche.value >= 7) { 
        return descuento = totalCosteCoche - ((totalCosteCoche * 50) / 100); 
    } 
    else if(inputNumeroDiaAlquilerCoche.value >= 3 ) {
        return descuento = totalCosteCoche - ((totalCosteCoche * 20) / 100); 
    }
    
} 


form.addEventListener("submit", (event) => {
    event.preventDefault() 
    const city = event.target.ciudad.value;
    const nights = event.target.numeroDeNoche.value;
    const carDays = event.target.numeroDiaAlquilerCoche.value;

    console.log(calcularCoste(city, nights, carDays)); 

})



// console.log(calcularCoste()); 
// console.log(costeHotel(numeroNochesHotel)); 
// console.log(costeAvion(nombreCiudad, numeroNoches)); 
// console.log(costeCoche(numDiasAlquilerCoche));
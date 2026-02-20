function calcularArea(alto, largo) {
  return alto * largo;
}
console.log(calcularArea(3, 4));

const numeros = [4, 3, 2, 8, 1, 4];

function soloPares(num) {
  num.sort();
  let resultado = [];
  num.forEach((n) => {
    if (n % 2 === 0) {
      resultado.push(n);
    }
  });
  let result = resultado.join("#");
  return result;
}
console.log(soloPares(numeros));


const numeros3 = [3, 5, -1, 0, 4, 2];
const resultat3 = numeros3.filter(n => n >= 0);
console.log(resultat3); // 


const numeros2 = [3, 5, -1, 0, 4, 2];
const resultat2 = [];
let count= 0;
for(let i = 0; i < numeros2.length; i++){
    if(numeros2[i] >= 0){
        resultat2[count] = numeros2[i];
        count++;
    }
}

console.log(resultat2); 

const coches = [
    {
        matricula: "EU1234TGH",
        nombre: "Paola",
        precio: 15700
    },
     {
        matricula: "US2445EDJ",
        nombre: "Jaumito",
        precio: 35700
    },
     {
        matricula: "FD8998UTD",
        nombre: "Marcos",
        precio: 5700
    }
]
function infoCoches(arr){
 coches.forEach(coche => {
    console.log(`Matricula: ${coche.matricula}, Nombre: ${coche.nombre},Precio: ${coche.precio} €`);
 })
}
infoCoches(coches);

const number = [1, "4", "tres"];
const beneficio = 1.6;
function multiplicadorValidos(n){
    n.forEach(num => {
        if(!isNaN(num)){
            console.log(num*beneficio);  
        } else {
            console.error(`${num} no es un numero válido`);
        }
    })
}
multiplicadorValidos(number);




 // 1
const parrafo = document.querySelectorAll("p");
console.log("Número de parrafos = "+parrafo.length);

function mostrarHtml(arr, etiqueta){
    arr.forEach(p => {
        if(etiqueta){
            console.log(p.outerHTML);
        }else{
            console.log(p.innerHTML);
        }   
    });
}
mostrarHtml(parrafo, true);
mostrarHtml(parrafo, false);

// 2
const titulo = document.getElementById("titol");
const iDdoom = titulo.innerHTML.indexOf("D");
const frase = titulo.innerHTML.substring(0,iDdoom);
const doom = titulo.innerHTML.substring(iDdoom);
const tituloFinal = frase + '<i>' + doom + '</i>';
titulo.innerHTML=tituloFinal;

// 3
const nom = 'Tamara';
const missatge = document.getElementById('missatge');
missatge.innerText = `Sóc na ${nom} i he canviat el texte d’aquest missatge`;

// 4
const destacat = document.querySelectorAll(".destacat");   
    destacat.forEach(elemento => {
  elemento.innerHTML = elemento.innerHTML.replace(/[Aa]/g, '-');
});

const llista = document.getElementById("llista");
const segonLi = llista.querySelectorAll("li")[1];
if (segonLi) {
  segonLi.textContent += "- fet";
}


  const tasca = document.getElementById('tasques');
let data = document.getElementById('brut').textContent.split("\n");
let contadas = data.filter(linea => /\[x\]/i.test(linea)).length;
let totales = 0;
let dataedited = data.map(linea => {
  const hecha = linea.substring(0,3);
  const text = linea.substring(3).trim();
  if(text.length != 0){
  
  const li = document.createElement('li');
  const span = document.createElement('span');
  if(hecha.indexOf('x') != -1){
    span.classList.add('fet')
  }else{
    span.classList.add('text')
  }
  span.textContent= text;
  li.append(hecha); // si se quita se elimina el []
  li.append(span);
  tasques.appendChild(li);
  totales++;
}
});
const texarea = document.getElementById('brut').remove();
const resum = document.getElementById('resum');
resum.innerText = `Total: ${totales} | Hechas: ${totales - contadas} | Pendientes: ${totales - contadas}.`;
const h1Element = document.querySelector('h1'); 
const h1Text = h1Element.textContent; 
const index = h1Text.indexOf('L');
const text = h1Text.substring(index);
h1Element.textContent = text; 

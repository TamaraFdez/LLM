const container = document.getElementById('container');
const notasContainer = document.getElementById('notas');
const alumnos = ["Ana", "Luis", "Marta", "Sergio"];

const notasPorAlumno = [
[7, 2, 3, null], // Ana
[10, 9, null, 8], // Luis
[null, 4, 5, 6], // Marta
[3, null, null, 7] // Sergio
];

const ul = document.createElement('ul');

alumnos.forEach(alumno => {
  const li = document.createElement('li');
  li.textContent = alumno; 
  ul.appendChild(li);
});

for (let i = 0; i < notasPorAlumno.length; i++) {
  const alumno = alumnos[i];
  const notasAlumno = notasPorAlumno[i];

  const notasNumericas = notasAlumno.filter(n => n !== null);
  const notasNP = notasAlumno.filter(n => n === null).map(() => "np");

  notasNumericas.sort((a, b) => b - a);

  const notasOrdenadas = [...notasNumericas, ...notasNP];

  const p = document.createElement("p");
  p.textContent = `${alumno}: ${notasOrdenadas}`;
  notasContainer.appendChild(p);
}

container.appendChild(ul);




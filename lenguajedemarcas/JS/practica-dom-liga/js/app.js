

// Ho ficam tot dins lliga per protegir les funcions. 
// Des de la consola, només volem que es puguin executar les funcions de la nostra API:
//    - addEquip
//    - delEquip
//    - addpartit
//    - delPartit
const lliga = (() => {

  // ====== DADES ======
  let equips = [
    { id: 1, nom: "FC Barcelona" },
    { id: 2, nom: "Real Madrid" },
    { id: 3, nom: "RCD Mallorca" },
    { id: 4, nom: "Real Betis" }
  ];

  let partits = [
    { id: 1, localId: 1, visitantId: 2, gl: 2, gv: 0 }
  ];

  // ====== ORDENACIÓ (JA FETA) ======
  function ordenaClassificacio(classificacio) {
    // NO TOCAR
    classificacio.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;

      const dgA = a.gf - a.gc;
      const dgB = b.gf - b.gc;
      if (dgB !== dgA) return dgB - dgA;

      if (b.gf !== a.gf) return b.gf - a.gf;

      return a.nom.localeCompare(b.nom);
    });
  }

  // ====== RENDER ÚNIC ======
  function render() {
    const tbody = document.getElementById("tbodyEquips");
    const ul = document.getElementById("llistaPartits");
    const stats = document.getElementById("stats");

    // Array per gestionar les dades de la classificació
    const classificacio = equips.map(e => ({
      id: e.id,
      nom: e.nom, 
      pj: 0, // partits jugats
      pg: 0, // partits guanyats
      pe: 0, // partits empatats
      pp: 0, // partits perduts
      gf: 0, // gols a favor
      gc: 0, // gols en contra
      pts: 0 // punts
    }));

    // 1) Recórrer "partits" i sumar estadístiques a local i visitant
    // TODO: per cada partit:
    // - trobar els 2 equips dins "classificacio"
    // - pj++
    // - gf/gc
    // - punts i pg/pe/pp segons resultat

    // 2) Ordenació (ja feta)
    ordenaClassificacio(classificacio);

    // 3) Pintar classificació (DOM)
    // TODO:
    // - buidar el tbody
    // - crear tr/td i ficar-los al tbody
    // - tr amb data-idEquip

    // 4) Pintar partits (DOM)
    // TODO:
    // - buidar la ul
    // - crear li per cada partit amb data-idPartit
    // - mostrar "Local gl - gv Visitant"

    // 5) Pintar stats
    // TODO:
    // El que volgueu. Proposta: - nº equips, nº partits, gols totals, líder (classificacio[0])
  }

  // ====== API PÚBLICA (CONSOLA) ======
  function addEquip(nombre) {
    // TODO:
    // - crear equip amb id únic (com vulguis)

    const newEquip = {id: crearID(equips), nom: `${nombre}`}
    // - afegir-lo a l'array d'equips
    equips.push(newEquip);
    console.log(equips);
    render(); // Acaba cridant a render per actualitzar el DOM
  }
  function crearID(llista){
    let id= 0;
    const lista = llista.map(equip => equip.id);
    for(let i = 1; i <15; i++){
      if(!lista.includes(i)){
        id = i;
        break;
      }
    }
    return id;
  }
  function estaEnlista (idEquip){
     const lista = equips.map(equip => equip.id);
     if(!lista.includes(idEquip)){
        return false;
    }
    return true;
  }

  function delEquip(idEquip) {
    // TODO:
    // - eliminar equip d'array d’equips
   
   if(!estaEnlista){
    console.error("El equipo no esta en la lista, prueba otro id");
   }
    
   eliminarIndice(idEquip, equips);
    // - eliminar partits (array partits) on surti idEquip (localId o visitantId)
    for(let i = 0; i < partits.length;i++){
      if(partits[i].localId === idEquip || partits[i].visitantId === idEquip){
        eliminarIndice(i, partits);
      }
    }
    console.log(equips);
    console.log(partits);

    render(); // Acaba cridant a render per actualitzar el DOM
  }
function eliminarIndice(id, lista){
 const indice = lista.findIndex(obj => obj.id === id);
if (indice !== -1) {
  lista.splice(indice, 1); 
}
}
  function addPartit(idLocal, idVisitant, gl, gv) {
    // TODO:
    // - validar: idLocal != idVisitant, equips existeixen, gols enters >= 0
    if(idLocal == idVisitant || estaEnlista(idLocal) === false||estaEnlista(idVisitant) === false ){
      return console.error("Ha habido un fallo al añadir partido, revisa los datos");
      
    }
    // - crear partit amb id únic
    const id = crearID(partits);
    // - afegir-lo a array de partits
    partits.push({ id: id, localId: idLocal, visitantId: idVisitant, gl: gl, gv: gv })
    console.log(partits);
    render(); // Acaba cridant a render per actualitzar el DOM
  }

  function delPartit(idPartit) {
    // TODO:
    // - eliminar partit de l’array partits
    eliminarIndice(idPartit, partits);
    console.log(partits);
    render(); // Acaba cridant a render per actualitzar el DOM
  }

  render(); // Feim un render inicial per fer una primera càrrega

  return { addEquip, delEquip, addPartit, delPartit };
})();

window.lliga = lliga;

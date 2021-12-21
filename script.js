//PROYECTO FINAL - Simulador de batalla Star Wars

//Constructor y funciones
class Campeon {
  constructor(nombre, daño, vida, bando, id) {
    this.nombre = nombre;
    this.daño = daño;
    this.vida = vida;
    this.bando = bando;
    this.id = id;
  }
  atacar(enemigo) {
    enemigo.vida -= this.daño;
  }
  usarHabilidad() {
    if (this.bando == "Oscuridad") {
      this.daño += 150;
      /* console.log("Daño +150");
      console.log("Tu daño ascendio a " + this.daño); */
    } else {
      this.vida += 300;
      /* console.log("Vida +300");
      console.log("Tu vida ascendio a " + this.vida); */
    }
  }

  habilidadEspecial() {
    //Si es Darth Vader o Luke, tendria una habilidad especial
    if (this.nombre == "Luke Skywalker") {
      this.vida += 750;
      /* console.log("Usaste Habilidad Especial!");
      console.log("Vida +750");
      console.log("Tu vida ascendio a " + this.vida); */
    } else if (this.nombre == "Darth Vader") {
      this.daño += 1000;
      /* console.log("Usaste Habilidad Especial!");
      console.log("LORD ETERNO");
      console.log("Daño aumentado +1000");
      console.log("Tu daño ascendio a " + this.daño); */
    }
  }
}

//Instanciacion
let yoda = new Campeon("Maestro Yoda", 110, 1500, "Luz", "yoda-button");
let luke = new Campeon("Luke Skywalker", 120, 1100, "Luz", "luke-button");
let leia = new Campeon("Princesa Leia", 90, 1000, "Luz", "leia-button");
let vader = new Campeon("Darth Vader", 150, 1200, "Oscuridad", "vade-button");
let obiWan = new Campeon("Obi Wan", 105, 1100, "Luz", "obi-button");
let boba = new Campeon("Boba Fett", 100, 1100, "Oscuridad", "boba-button");

const campeones = [yoda, luke, leia, vader, obiWan, boba];
const idCampeones = campeones.map((champ) => champ.id);

//Listeners
//let jugadorUno = document.getElementsByClassName("seleccionar");
//console.log(jugadorUno);

let jugadores = []; //i:0 = "Player 1"; i:1 = "Player 2"; TODO: Maximo 2 campeones

function buscarJugadores(clicked_id) {
  jugadores.push(campeones.find((c) => c.id == clicked_id));
  //puede haber una condicion de carrera -> probar
  if (jugadores.length == 2) {
    startGame();
  }
}

const attack = (attacker, attacked) => {
  attacker.atacar(attacked);
};

/* function attack(attacker, attacked){
  attacker.atacar(attacked);
}; */

function startGame() {
  console.log("entro");
  const content = document.querySelector("#content");
  console.log("content:", content);
  const newContent = document.createElement("div");
  const playerOne = jugadores[0];
  const playerTwo = jugadores[1];

  console.log(playerOne);
  console.log(playerTwo);

  newContent.innerHTML = `
    <div class="card">
      <img class="card-image" src="./assets/yoda.png"/>
      <div class="card-content">
        <h2 class="card-title">${playerOne.nombre}</h2>
        <span class="card-info">Ataque: ${playerOne.daño} | Vida: ${
    playerOne.vida
  }</span>
        <!-- Ataque -->
        <button onClick="${attack(playerOne, playerTwo)}">Atacar</button>

        <!-- Habilidad -->
        <button onClick="playerOne.usarHabilidad()">Usar Habilidad</button> 

        <!-- Habilidad Especial (si tiene)-->
        <button onClick="playerOne.habilidadEspecial()">Usar Habilidad Especial</button>

      </div>
    </div>`;

  content.parentNode.replaceChild(newContent, content);
}

//AL COMIENZO DEL COMBATE SE CREAN 2 CARDS IDENTIFICANDO A CADA JUGADOR
//Apariencia de la card durante el combate

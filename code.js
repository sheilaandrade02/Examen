const SWAPI_BASE_URL = "https://wizard-world-api.herokuapp.com";

window.onload = async () => {
  // -------Para mostrar los magosy sus elixires----------------
  const wizards = await getAllMagos();
  const wrapper = document.getElementById("wrapper_magos");

  for (const wizard of wizards) {
    const wizardElement = document.createElement("div");
    wizardElement.innerHTML = `
            <h2>PRIMER NOMBRE:${wizard.firstName}</h2>
            <h3>SEGUNDO NOMBRE:${wizard.lastName}</h3>
            <button onclick="mostrarPersonajeFavorito('${wizard.firstName}', '${wizard.lastName}')">Favorito</button>
            `;
    for (const elixir of wizard.elixirs) {
      const elixirElement = document.createElement("div");
      elixirElement.innerHTML =
        (`afterbegin`,
        `
          <h4>NOMBRE ELIXIR: ${elixir.name}</h4>
          <button onclick="mostrarIngredientes('${elixir.id}')">Ingredientes</button>
          <div id=${elixir.id}></div>
          `);
      wizardElement.appendChild(elixirElement);
      console.log(elixir.name);
    }
    wrapper.appendChild(wizardElement);
  }

  // ----------------Para mostrar las casas----------------------
  const casas = await getAllHouses();
  let n = 1;
  for (const casa of casas) {
    const casilla_txt = document.getElementById("escudos_info" + n);
    const casaElement = document.createElement("div");
    casaElement.innerHTML = `
              <h2>CASA: ${casa.name}</h2>
              <h3>FUNDADOR: ${casa.founder}</h3>
              <button onclick="mostrarCasaFav('${casa.name}')">Favorito</button>
              `;
    for (const valores of casa.traits) {
      const traitsElement = document.createElement("div");
      traitsElement.innerHTML = `
              <p> ${valores.name}</p>
              
              `;
      casaElement.appendChild(traitsElement);
    }

    casilla_txt.appendChild(casaElement);
    n++;
  }

  //---------------Para crear una ventana flotante----------------
  const btnAbrirPopup = document.getElementById("open_btn_fav");
  btnAbrirPopup.addEventListener('click', function (){
   document.getElementById("ventanaFlotante").classList.add("active");
    })

  const btnCerrarPopup = document.getElementById("close_btn_fav");
  btnCerrarPopup.addEventListener('click', function (){
   document.getElementById("ventanaFlotante").classList.remove("active");
    })
};



async function mostrarIngredientes(id) {
  const ingredientes = await getAllIngredientes(id);
  const wrappers = document.getElementById(id);
  for (const ingredient of ingredientes) {
    const ingredienteElement = document.createElement("div");
    ingredienteElement.innerHTML = `
            <p>INGREDIENTES: ${ingredient.name}</p>`;
    wrappers.appendChild(ingredienteElement);
  }
}
async function mostrarPersonajeFavorito(firstName, lastName) {
  const personajes = document.getElementById("lista_personajes");
  const ventana = document.getElementById("txt_wizard");
  if (personajes, ventana) {
    personajes.innerHTML = `
    <h3>PERSONAJE FAVORITO:</h3>
    <p>${firstName} ${lastName}</p>`;
    ventana.innerHTML = `
    <h3>PERSONAJE FAVORITO:</h3>
    <p>${firstName} ${lastName}</p>`;
  } else {
    const wizardsHTMLElement = document.createElement("div");
    wizardsHTMLElement.innerHTML = `
    <h3>PERSONAJE FAVORITO: </h3>
    <p>${firstName} ${lastName}</p>
  `;
    personajes.appendChild(wizardsHTMLElement);
    ventana.appendChild(wizardsHTMLElement);
  }
}

async function mostrarCasaFav(name) {
  const favorito = document.getElementById("lista_favoritos"); //pasamos donde hay q escribir
  const ventana = document.getElementById("txt_house");
  if (favorito, ventana) {
    favorito.innerHTML = `
    <h3>CASA FAVORITA:${name}</h3>`;
    ventana.innerHTML = `
    <h3>CASA FAVORITA:${name}</h3>`;
  } else {
    const housesHTMLElement = document.createElement("div");
    housesHTMLElement.innerHTML = `
    <h3>CASA FAVORITA: ${name}</h3>
  `;
    favorito.appendChild(housesHTMLElement);
    ventana.appendChild(housesHTMLElement);
  }
}

async function getAllMagos() {
  const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
  const data = await response.json();

  return data;
}

async function getAllIngredientes(id) {
  const response = await fetch(`${SWAPI_BASE_URL}/elixirs/${id}`); // el id es para hacer un ? search=id
  const data = await response.json();
  return data.ingredients; //ya te devuelve un array de ingredientes
}

async function getAllHouses() {
  const response = await fetch(`${SWAPI_BASE_URL}/houses`);
  const data = await response.json();
  return data;
}

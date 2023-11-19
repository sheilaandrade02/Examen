const SWAPI_BASE_URL = "https://wizard-world-api.herokuapp.com";

window.onload = async () => {
  // -------Para mostrar los magosy sus elixires----------------
  const wizards = await getAllMagos();
  const wrapper = document.getElementById("wrapper_magos");

  for (const wizard of wizards) {
    const wizardElement = document.createElement("div");
    wizardElement.innerHTML = `
            <h4 class="titulo">PRIMER NOMBRE:</h4>
            <p>${wizard.firstName}</p>
            <h4 class="titulo">SEGUNDO NOMBRE:</h4>
            <p>${wizard.lastName}</p>
            <button onclick="mostrarPersonajeFavorito('${wizard.firstName}', '${wizard.lastName}')">Favorito</button>
            `;
    for (const elixir of wizard.elixirs) {
      const elixirElement = document.createElement("div");
      elixirElement.innerHTML = `
          <h5 class="titulo">NOMBRE ELIXIR:</h5>
          <hp>${elixir.name}</p>
          <button onclick="mostrarIngredientes('${elixir.id}')">Ingredientes</button>
          <div id=${elixir.id}></div>
          `;
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
              <h2 class="tituloC">CASA:</h2>
              <h4 class="textoC">${casa.name}</h4>
              <h2 class="tituloC">FUNDADOR:</h2>
              <h4 class="textoC">${casa.founder}</h4>
              <button onclick="mostrarCasaFav('${casa.name}')">Favorito</button>
              `;
    for (const valores of casa.traits) {
      const traitsElement = document.createElement("div");
      traitsElement.innerHTML = `
              <p class="textoCN"> ${valores.name}</p>
              
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

  // -----------------Para mostrar los hechizos--------------------
  const boton_nox=document.getElementById("nox_btn");
  const boton_lumos=document.getElementById("lumos_btn");
  const boton_water=document.getElementById("water_btn");
  const hechizos = await getAllSpells();
  const wrapper_hechizos = document.getElementById("hechizos");
  for (let i = 0; i < hechizos.length && i < 20; i++) {
      const hechizoElement = document.createElement("div");
      hechizoElement.innerHTML = `
        <p class="textoH">${hechizos[i].name} - </p>`;
    wrapper_hechizos.appendChild(hechizoElement);
  }
  
  boton_nox.addEventListener('click', apagarLuz); 
  boton_lumos.addEventListener('click', encenderLuz);
  boton_water.addEventListener('click', mojar);
  function apagarLuz(e){
    e.preventDefault();
    document.body.style.backgroundColor="#2c2c2b9d";
    setTimeout(function(){document.body.style.backgroundColor="";}, 2500);
    console.log();
  }
  function encenderLuz(e){
    e.preventDefault();
    document.body.style.backgroundColor="#dad2789d";
    setTimeout(function(){document.body.style.backgroundColor="";}, 2500);
  }
  function mojar(){
    document.body.style.backgroundImage="url('Imagenes/lluvia.png')";

    setTimeout(function(){document.body.style.backgroundImage="";}, 2500);
  }

  //-------------------------Test de casas--------------------------------

  // const boton_test=document.getElementById("start_test_btn");
  // boton_test.addEventListener('click',function (){
  //   document.getElementById("testVentana").classList.add("active");
  // });

  for (const casa of casas) {
    const test_txt = document.getElementById("test_txt" );
    for (const valores of casa.traits) {
      const traitsElement = document.createElement("div");
      traitsElement.innerHTML = `
              <p class="textoCN"> ${valores.name}</p>
              <button onclick="mostrarAtributosCasas('${casa.id}')">Seleccionar</button>
              `;
      test_txt.appendChild(traitsElement);
    }
  }


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
    <h3>CASA FAVORITA:</h3>
    <p>${name}</p>`;
    ventana.innerHTML = `
    <h3>CASA FAVORITA:</h3>
    <p>${name}</p>`;
  } else {
    const housesHTMLElement = document.createElement("div");
    housesHTMLElement.innerHTML = `
    <h3>CASA FAVORITA: ${name}</h3>
  `;
    favorito.appendChild(housesHTMLElement);
    ventana.appendChild(housesHTMLElement);
  }
}
async function mostrarAtributosCasas(id){
  const houses= await getAllHouses();
  const atributoSel = await getAllHouses(id);
  let selecionado=0;
  for(const house of houses){
    for(let i=0; i<house.traits.length; i++){
      if(onclinck==true &&  house.traits[i]==atributoSel.traits[i]){
        selecionado++;
        return house.name;
        
      }
    }
    console.log(house.name);
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

async function getAllHouses(id) {
  const response = await fetch(`${SWAPI_BASE_URL}/houses/${id}`);
  const data = await response.json();
  return data;
}

async function getAllSpells(){
  const response= await fetch(`${SWAPI_BASE_URL}/spells`);
  const data= await response.json();
  return data;
}

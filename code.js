const SWAPI_BASE_URL = "https://wizard-world-api.herokuapp.com";

window.onload = async () => {
  const btn = document.getElementById("btn_magos");
  const btn_e = document.getElementById("btn_elixir");
  btn.addEventListener("click", handleHTML);
  btn_e.addEventListener("click", mostrarIngredientes);

  async function handleHTML() {
    const wizards = await getAllMagos();
    const wrapper = document.getElementById("wrapper_magos");

    for (const wizard of wizards) {
      const wizardElement = document.createElement("div");
      wizardElement.innerHTML = `
            <h2>${wizard.firstName}</h2>
            <h3>${wizard.lastName}</h3>
            <button id="ingr">Ingredientes</button>
            `;
      for (const elixir of wizard.elixirs) {
        const elixirElement = document.createElement("div");
        elixirElement.innerHTML = `
                  <p>${elixir.name}</p>
                  `;
        wizardElement.appendChild(elixirElement);
        console.log(elixir.name);
        
      }
      wrapper.appendChild(wizardElement);
    }
    const botones = document .queryselectorAll('button');
    botones. forEach((boton) => {
    boton.addEventtistener('click',(e)=> mostrarIngredientes (e, boton.id));
    });
  }
  

  async function mostrarIngredientes(elixir) {
    const elixirs = await getAllElixirs();
    const wrapper = document.getElementById("wrapper_elixir");

    for (elixir of elixirs) {
      const newElement = document.createElement("div");
      const elixirElement = document.createElement("div");
      elixirElement.innerHTML = `
        <h2>${elixir.name}</h2>
        `;
      
      for (const ingredient of elixir.ingredients) {
        const ingredienteElement = document.createElement("div");
        ingredienteElement.innerHTML = `
            <p>${ingredient.name}</p>`;
        elixirElement.appendChild(ingrElement);
      }
      wrapper.appendChild(elixirElement);
    }
  }
};

async function getAllMagos() {
  const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
  const data = await response.json();

  return data;
}

async function getAllElixirs() {
  const response = await fetch(`${SWAPI_BASE_URL}/elixirs`);
  const data = await response.json();
  return data;
}
// async function getAllElixirs(){
//     const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
// }

// console.log(data.elixirs);
//   return data.;

//  function imatgeRandom(){
//     fetch(URL)
//     .then(res=> res.json())
//     .then(data=>{
// const img=document.getElementById("Imagen_gatito");
// img.src=data[0].url;
//     });
// } -->

const SWAPI_BASE_URL = ' https://wizard-world-api.herokuapp.com ';

window.onload = async()=>{
    const btn = document.getElementById("btn_magos");

   // btn.addEventListener('click', handleAddHTML);

   // async function handleAddHTML() {
        const wizards = await getAllMagos();
        const wrapper = document.getElementById('wrapper_magos');

        for (const wizard of wizards) {
            const newElement = document.createElement('div');

            newElement.innerHTML = `
              <h2>${wizard.firstName}</h2>
              <p>${wizard.lastName}</p>
            `;

            wrapper.appendChild(newElement);

            // console.log(wrapper);
        }
   // }
}

async function getAllMagos() {
    const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
    const data = await response.json();
    for(data=0; )
   // console.log(data.elixirs);
    return data.;

}
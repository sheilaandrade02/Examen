const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async()=> {
    const btn = document.getElementById("btn_magos");
    const wizards = await getAllMagos();
    const wrapper = document.getElementById('wrapper_magos');
        

        for (const wizard of wizards ) {
            const newElement = document.createElement('div');
    //<h2>${wizard.firstName}</h2>
            newElement.innerHTML = `
             
              <p>${wizard.lastName}</p>
            `;

            wrapper.appendChild(newElement);

            // console.log(wrapper);
        }

}

async function getAllMagos() {
    const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
    const data = await response.json();
    for(response of stringArray.len){
        
        console.log(data.lastName);
        return data.lastName;
    }
   // console.log(data.elixirs);
 //   return data.;


}














//  function imatgeRandom(){
//     fetch(URL)
//     .then(res=> res.json())
//     .then(data=>{
// const img=document.getElementById("Imagen_gatito");
// img.src=data[0].url;
//     });
// } -->
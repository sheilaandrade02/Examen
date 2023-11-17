const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async()=> {
    const btn = document.getElementById("btn_magos");
    const wizards = await getAllMagos();
  
        

        for (const wizard of wizards ) {
            const wrapper = document.getElementById('wrapper_magos');
            const newElement = document.createElement('div');
            const elixirs=wizard.elixirs;
        
            for(const elixir of wizard.elixirs){

                newElement.innerHTML= `
                <h2>${wizard.lastName}</h2> 
                <p>${elixir.name}</p>`
                wrapper.appendChild(newElement);
            }
           
            
        }

}

async function getAllMagos() {
    const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
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
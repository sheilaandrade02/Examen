const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async()=> {
    const btn = document.getElementById("btn_magos");
    const btn_e=document.getElementById("btn_elixir");
   // btn.addEventListener('click',handleHTML);
    btn_e.addEventListener('click',mostrarIngredientes);

    // async function handleHTML(){
    //     const wizards = await getAllMagos();
    //     const wrapper = document.getElementById('wrapper_magos');

    //     for (const wizard of wizards ) {  
    //         const newElement = document.createElement('div');
    //         for(const elixir of wizard.elixirs){
                
    //             newElement.innerHTML= (`
    //             <h2>${wizard.lastName}</h2> 
    //             <p>${elixir.name}</p>`)
    //             wrapper.appendChild(newElement); 
    //         }
           
    //     }
    // }

    async function mostrarIngredientes(){
        const elixirs=await getAllIngredients();
        const wrapper= document.getElementById('wrapper_elixir');

        for(const elixir of elixirs){
            const newElement = document.createElement('div');
            
             for(const ingredient of elixirs.ingredients){
                newElement.innerHTML = (`
                <h2>${elixir.name}</h2>
                <p>${ingredient.name}</p>`)
                wrapper.appendChild(newElement);
                
             }
        }
    }

}

async function getAllMagos() {
    const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
    const data = await response.json();
   
   return data;
}

async function getAllIngredients(){
    const response = await fetch(`${SWAPI_BASE_URL}/elixirs`);
    const data =await response.json();
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
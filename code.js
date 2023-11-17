const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async()=> {
    const btn = document.getElementById("btn_magos");
    const wizards = await getAllMagos();
    const wrapper = document.getElementById('wrapper_magos');
        

        //for (const wizard of wizards ) {
            const newElement = document.createElement('div');
            
    
            newElement.innerHTML = `
             
              <p>${wizards.lastName}</p>
            `;

            wrapper.appendChild(newElement);

            // console.log(wrapper);
       // }

}

async function getAllMagos() {
    const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
    
    for(let i =0; i<response; i++){
        const data = await response.json();
        console.log(data);
        return data[i];
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
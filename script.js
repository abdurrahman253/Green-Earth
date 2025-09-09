const categoryContainer = document.getElementById("category_container");
const plantsContainer = document.getElementById("plants_container")
const modalContainer  = document.getElementById("modal_container")
const plantsModal = document.getElementById("plants_modal");

// load Category 
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then( (res) => res.json())
    .then( (data) => {
        const categories = data.categories;
        showCategory(categories);
    })
     .catch((err) => {
        console.log(err);
     }) ;

};

// show category 
const showCategory = (categories) => {
      categoryContainer.innerHTML = "";
    categories.forEach( (category) => {
        
        categoryContainer.innerHTML += `
         <li id="${category.id}" class="cursor-pointer block p-3 text-xl font-medium focus:bg-[#15803D] text-center transition-transform shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:text-white hover:bg-[#15803D]"> ${category.category_name}</li>
        `
    });
}


// Adding event listener with category container 
categoryContainer.addEventListener("click", (event) => {
    if( event.target.localName === "li") {
        loadPlantsByCategory(event.target.id)
    }

})





// load plants by category 
const loadPlantsByCategory = (categoryId) => {
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then( (res) => res.json())
    .then( (data) => {
        showPlantsByCategory(data.plants)
    })
    .catch( (err) =>{
        console.log(err) ;
    });
};

// show plants by category 
const showPlantsByCategory = (plants) => {
     plantsContainer.innerHTML = "";
  plants.forEach(plant => {
     plantsContainer.innerHTML += `
        <div id="${plant.id}" class="rounded-2xl shadow-md card bg-base-100 h-[36.25rem]">
                     <div >
                          <img
                              src=" ${plant.image} "
                               alt="" class="rounded-t-2xl h-60 object-cover w-full" />
                     </div>
                     <div class="p-4 card-body">
                        <h2  class="cursor-pointer text-xl font-bold card-title"> ${plant.name} </h2>
                        <p class="text-base"> ${plant.description} </p>
                          <div class="justify-between card-actions my-7">
                               <div class="text-lg font-medium rounded-2xl btn btn-outline btn-success"> ${plant.category} </div>
                                <div class="">৳ <span class="font-bold text-xl text-[#15803D]"> ${plant.price} </span> </div>
                          </div>

                         <button class="mt-3 w-full bg-green-600 text-white font-bold py-2 rounded-full hover:bg-green-700 transition-colors">Add to Cart</button>
                    </div>
                 </div>
       
                 `

  })
} 





// load all plants 
const loadPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then( (res) => res.json())
    .then( (data) => {
        const plants = data.plants;
        showPlants(plants);
    })
     .catch((err) => {
        console.log(err);
     }) ;

};

// show all plants 
const showPlants = (plants) => {
   
    
      const eachId = plants[1] ;
    plants.forEach( (plant) => {
      
         plantsContainer.innerHTML += `
        <div id="${plant.id}" class="card rounded-2xl shadow-md card bg-base-100 ">
                     <div>
                          <img
                              src=" ${plant.image} "
                               alt="" class="rounded-t-2xl h-60 object-cover w-full" />
                     </div>
                     <div class="p-4 card-body">
                        <h2 class="cursor-pointer text-xl font-bold card-title"> ${plant.name} </h2>
                        <p class="text-base"> ${plant.description} </p>
                          <div class="justify-between card-actions my-7">
                               <div class="text-lg font-medium rounded-2xl btn btn-outline btn-success"> ${plant.category} </div>
                                <div class="">৳ <span class="font-bold text-xl text-[#15803D]"> ${plant.price} </span> </div>
                          </div>

                         <button class="text-lg font-bold rounded-full btn btn-accent">Add to Cart</button>
                    </div>
                 </div>
       
                 `

    });
}




// Adding event listener with plants container 
plantsContainer.addEventListener("click", (event) => {
    if( event.target.localName === "h2") {
       handleModal(event)
    }

})


handleModal = (event) => {
    const id = event.target.parentNode.parentNode.id ;
   fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
   .then(res => res.json())
   .then( data => {
    showPlantsDetails(data.plants);
   })
   .catch(err =>{
    console.log(err)
   }
   )
}


const showPlantsDetails = (plant) => {
    plantsModal.showModal()

    modalContainer.innerHTML = `
     <div id="${plant.id}" class="rounded-2xl shadow-md card bg-base-100 h-[36.25rem]">
                     <div >
                          <img
                              src=" ${plant.image} "
                               alt="" class="rounded-t-2xl h-60 object-cover w-full" />
                     </div>
                     <div class="p-4 card-body">
                        <h2  class="cursor-pointer text-xl font-bold card-title"> ${plant.name} </h2>
                        <p class="text-base"> ${plant.description} </p>
                          <div class="justify-between card-actions my-7">
                               <div class="text-lg font-medium rounded-2xl btn btn-outline btn-success"> ${plant.category} </div>
                                <div class="">৳ <span class="font-bold text-xl text-[#15803D]"> ${plant.price} </span> </div>
                          </div>

                         <button class="mt-3 w-full bg-green-600 text-white font-bold py-2 rounded-full hover:bg-green-700 transition-colors">Add to Cart</button>
                    </div>
                 </div>
    
    `
}




 loadCategory();
loadPlants();


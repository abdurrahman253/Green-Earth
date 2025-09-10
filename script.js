const categoryContainer = document.getElementById("category_container");
const plantsContainer = document.getElementById("plants_container")
const modalContainer  = document.getElementById("modal_container")
const plantsModal = document.getElementById("plants_modal");
const cartContainer = document.getElementById("cart_container");
const cartCount = document.getElementById("cart_count")

let addToCart = []

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
        showLoading();
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

                         <button  class="cursor-pointer flex justify-center items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-500 to-green-700 shadow-md hover:from-green-600 hover:to-green-800 hover:scale-95 transition-all duration-300">
                         <i class="fa-solid fa-cart-shopping"></i>
                         Add to Cart
                         </button>
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



// creating modal
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




// Adding loading Spinner
const showLoading = () => {
    plantsContainer.innerHTML = `
     <div class="flex justify-center items-center min-h-[200px] space-y-4"
         
        
    </div>
    `
}


// Adding Cart 
plantsContainer.addEventListener("click" , (event) => {
   if(event.target.innerText === 'Add to Cart'){
    handleAddToCart(event) 
   }
})



 
const handleAddToCart = (event) => {
    const treeName = event.target.parentNode.children[0].innerText
    const plantsPrice = parseInt(event.target.parentNode.children[2].children[1].children[0].innerText) ;
     
    const id = event.target.parentNode.parentNode.id ;
    addToCart.push({
       treeName : treeName,
       price : plantsPrice,
       id : id
    })

    showAddToCart(addToCart)
   }
 
   // showing add to cart 
   const showAddToCart = (addToCart) => {
    cartContainer.innerHTML = "";
  
    let total = 0;

     addToCart.forEach(atc => {
     total += atc.price;

       cartContainer.innerHTML += `
         <div class="flex items-center justify-between p-4 mb-3 transition bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md">
                  <div>
                    <h1 class="text-lg font-semibold text-gray-800"> ${atc.treeName} </h1>
                    <span class="text-green-600 font-bold text-sm">৳ ${atc.price} </span>
                  </div>

                  <button onclick="handleDeleteButton('${atc.id}') " class="px-3 py-1 text-sm font-medium text-red-500 border border-red-400 rounded-lg hover:bg-red-500 hover:text-white transition">
                    Remove
                  </button>
       `
     })
      

     if (addToCart.length > 0) {
      cartContainer.innerHTML += `
      <div class="flex justify-between items-center p-4 mt-4 bg-green-50 border border-green-200 rounded-xl shadow-sm">
       <h2 class="text-lg font-bold text-gray-800">Total:</h2>
       <span class="text-xl font-bold text-green-700">৳ ${total} </span>
      </div>

      `;
     };
     cartCount.innerText = addToCart.length;

   } ;
  


   // handle delete button 
   const handleDeleteButton = (addToCartId) => {
     const filteredAtc = addToCart.filter(atc => atc.id !== addToCartId)
     addToCart = filteredAtc 
     showAddToCart(addToCart)
    
   }


 loadCategory();
loadPlants();


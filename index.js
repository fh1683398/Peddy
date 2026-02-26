//fetch categories (buttons)
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => showCategories(data.categories))
        .catch(error => console.log(error))
}
//show categories (buttons)
const showCategories = (buttons) => {
    const btnContainer = document.getElementById('btn-container')
    buttons.forEach(button => {
        const categoryBtn = document.createElement('button')
        categoryBtn.className = 'p-6 rounded-2xl border border-gray-300 flex justify-center items-center gap-4'
        categoryBtn.innerHTML = `
            <img src="${button.category_icon}" />
            <span class="font-bold text-2xl text-[#131313]">${button.category}</span>
        `
        btnContainer.append(categoryBtn)
    })
}

//fetch all pets
const loadPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => showAllPets(data.pets))
    .catch(error => console.log(error))
}
//show all pets
const showAllPets = (pets) =>{
    const petContainer = document.getElementById('pet-container')
    pets.forEach(pet => {
        console.log(pet)
        const petCard = document.createElement('div')
        petCard.className = 'p-5 rounded-xl border border-gray-200'
        petCard.innerHTML = `
            <div>
                <img class="w-full h-[160px] object-cover rounded-lg" src="${pet.image}" />
            </div>
            <div class="mt-6">
                <h4 class="text-xl text-[#131313] font-bold mb-2">${pet.pet_name}</h4>
                <p class="text-gray-600"><i class="fa-solid fa-cubes-stacked text-sm"></i></i>  Breed: ${pet.breed ? pet.breed: "Not available"}</p>
                <p class="text-gray-600"><i class="fa-regular fa-calendar text-sm"></i>  Birth: ${pet.date_of_birth}</p>
                <p class="text-gray-600"><i class="fa-solid fa-mercury text-sm"></i>  Gender: ${pet.gender}</p>
                <p class="text-gray-600"><i class="fa-solid fa-dollar-sign text-sm"></i>  Price: ${pet.price}$</p>
            </div>
            <hr class="my-4 border-[#e5e7eb]">
            <div class="flex gap-4">
                <button class="flex-1 border border-gray-300 p-2 rounded-lg text-[#0e7a81] hover:bg-[#0e7a81] hover:text-white"><i class="fa-regular fa-heart"></i></button>
                <button class="flex-1 border border-gray-300 p-2 rounded-lg font-bold text-[#0e7a81] hover:bg-[#0e7a81] hover:text-white">Adopt</button>
                <button class="flex-1 border border-gray-300 p-2 rounded-lg font-bold text-[#0e7a81] hover:bg-[#0e7a81] hover:text-white">Details</button>
            </div>
        `
        petContainer.appendChild(petCard)
    })
}


loadCategories()
loadPets()
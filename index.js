//Fetch Categories (buttons)
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => showCategories(data.categories))
        .catch(error => console.log(error))
}
//Show Categories (buttons)
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

//Fetch All Pets
const loadPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => showAllPets(data.pets))
        .catch(error => console.log(error))
}

//Show All Pets
const showAllPets = (pets) => {
    const petContainer = document.getElementById('pet-container')
    pets.forEach(pet => {
        const petCard = document.createElement('div')
        petCard.className = 'p-5 rounded-xl border border-gray-200'
        petCard.innerHTML = `
            <div>
                <img class="w-full h-[160px] object-cover rounded-lg" src="${pet.image}" />
            </div>
            <div class="mt-6">
                <h4 class="text-xl text-[#131313] font-bold mb-2">${pet.pet_name}</h4>
                <p class="text-gray-600"><i class="fa-solid fa-cubes-stacked text-sm"></i>  Breed: ${pet.breed ? pet.breed : "Not available"}</p>
                <p class="text-gray-600"><i class="fa-regular fa-calendar text-sm"></i>  Birth: ${pet.date_of_birth}</p>
                <p class="text-gray-600"><i class="fa-solid fa-mercury text-sm"></i>  Gender: ${pet.gender}</p>
                <p class="text-gray-600"><i class="fa-solid fa-dollar-sign text-sm"></i>  Price: ${pet.price}$</p>
            </div>
            <hr class="my-4 border-[#e5e7eb]">
            <div class="flex gap-4">

                <button class="flex-1 border border-gray-300 p-2 rounded-lg text-[#0e7a81] hover:bg-[#0e7a81] hover:text-white"><i class="fa-regular fa-heart"></i></button>

                <button class="flex-1 border border-gray-300 p-2 rounded-lg font-bold text-[#0e7a81] hover:bg-[#0e7a81] hover:text-white">Adopt</button>

                <button onclick="petDetails(${pet.petId})" id="${pet.petId}" class="flex-1 border border-gray-300 p-2 rounded-lg font-bold text-[#0e7a81] hover:bg-[#0e7a81] hover:text-white">Details</button>
            </div>
        `
        petContainer.appendChild(petCard)
    })
}

// Load Pet Details
const petDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => showPetDetails(data.petData))
}
//Show Pet Details
const showPetDetails = (data) => {
    const detailsModal = document.getElementById('detailsModal')
    detailsModal.classList.remove('none')

    const { image, breed, date_of_birth, price, gender, vaccinated_status, pet_name, pet_details, petId } = data;
    const card = document.createElement('div')
    card.className = 'p-5 md:p-7 rounded-xl bg-white max-w-[600px]'
    card.innerHTML = `
        <div class="mb-4"><img class="w-full h-[320px] object-cover rounded-lg" src="${image}" /></div>
        <h3 class="font-bold text-[#131313] text-2xl mb-4">${pet_name}</h3>
        <div class="md:flex gap-12">
            <div class="text-gray-600">
                <div class="flex gap-4 items-center mb-2"><i class="fa-solid fa-cubes-stacked"></i> Breed: ${breed ? breed : "Not available"}</div>
                <div class="flex gap-4 items-center mb-2"><i class="fa-solid fa-mercury"></i> Gender: ${gender ? gender : "Not available"}</div>
                <div class="flex gap-4 items-center mb-2"><i class="fa-solid fa-syringe md:mb-0"></i> Vaccinated status: ${vaccinated_status? vaccinated_status : "Not available"}</div>
            </div>
            <div class="text-gray-600">
                <div class="flex gap-4 items-center mb-2"><i class="fa-regular fa-calendar"></i> Birth: ${date_of_birth ? date_of_birth : "Not available"}</div>
                <div class="flex gap-4 items-center mb-2"><i class="fa-solid fa-dollar-sign md:mb-0"></i>  Price: $${price? price : "Not available"}</div>
            </div>
        </div>
        <hr class="my-4 border-[#e5e7eb]">
        <div>
            <h4 class="font-semibold mb-3 text-gray-700">Details Information</h4>
            <p class="mb-4 text-gray-600">${pet_details}</p>
            <button onclick="closeModal()" class="w-full bg-gray-200 py-2 rounded-lg">Cancel</button>
        </div>
    `
    detailsModal.innerHTML = ""
    detailsModal.append(card)
    console.log(card)
}





//close modal
const detailsModal = document.getElementById('detailsModal')

const closeModal = () => {
    detailsModal.classList.add('none')
}
document.getElementById('closeBtn')

loadCategories()
loadPets()
const flowerForm = document.getElementById("flower-form");

flowerForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);

    const selectedOptionSlot = document.getElementById("selected-option");
    const selectedColor = formData.get("bouquet-color")

    const selectedOptionCard = document.querySelector(`[data-name="${selectedColor}"]`)
    const clonedSelectedOptionCard = selectedOptionCard.cloneNode(true)
    

    if(selectedOptionSlot.hasChildNodes()){
        selectedOptionSlot.removeChild(selectedOptionSlot.firstChild);
    }

    selectedOptionSlot.appendChild(clonedSelectedOptionCard)
})
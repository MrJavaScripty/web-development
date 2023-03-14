const flowerEl = document.getElementById('flower-card-white')

const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const cloneFlowerEl = flowerEl.cloneNode(true)
    
    const summaryPlaceholder = document.getElementById('selected-flower')
    summaryPlaceholder.appendChild(cloneFlowerEl)
})
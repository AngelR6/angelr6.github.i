/*const openContactButton = document.querySelectorAll('[data-model-target]')
const closeContactButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openContactButton.forEach(button => {
    button.addEventListener('click', () => {
        const model = document.querySelector(button.dataset.modelTarget)
        openContactButton(model)
    })
})

closeContactButton.forEach(button => {
    button.addEventListener('click', () => {
        const model = button.closest('.model')
        closeContactButton(model)
    })
})

function openModel(model) {
    if (model == null) return
    model.classlist.add('active')
    overlay.classList.add('active')
}

function closeModel(model) {
    if (model == null) return
    model.classlist.remove('active')
    overlay.classList.remove('active')
}*/
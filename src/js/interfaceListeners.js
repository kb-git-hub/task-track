import { buildModal } from "./buildModal_HTML";
import { q, qA, create } from "/src/js/utils";

// Initialize interface variables
const showTasks = q('#show-tasks')
const showProjects = q('#show-projects')
const viewerPane = q('#task-viewer')
const addItemBtn = q('#add-item-btn')
const modalDiv = q('#modal-div')
const overlay = q('#overlay')

function displayTasks() {
    viewerPane.removeAttribute('class')
    viewerPane.classList.add('taskViewer', 'taskActive')
    console.log(viewerPane);
}

function displayProjects() {
    viewerPane.removeAttribute('class')
    viewerPane.classList.add('taskViewer', 'projectActive')
    console.log(viewerPane);
}

function addNewItem() {
    overlay.classList.add('active')
    let modal = buildModal()
    modalDiv.innerHTML += modal
}

function closeModal() {
    overlay.classList.remove('active');
    const modal = q('#new-item-modal')
    modal.remove()
}

const handleKeyboardInput = (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal()
}

showTasks.onclick = displayTasks
showProjects.onclick = displayProjects
addItemBtn.onclick = addNewItem
overlay.onclick = closeModal
window.onkeydown = handleKeyboardInput
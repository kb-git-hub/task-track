import { buildModal } from "./buildModal_HTML";
import { buildModalEventListeners, getModaldata } from "./modal";
import { updateTaskDisplay } from "./tasks";
import { q, qA, create } from "/src/js/utils";
import {taskList} from '/src/index.js'

// Initialize interface variables
const showTasks = q('#show-tasks')
const showProjects = q('#show-projects')
const viewerPane = q('#task-viewer')
const addItemBtn = q('#add-item-btn')
const modalDiv = q('#modal-div')
const overlay = q('#overlay')
const selectorBtns = qA('.todoBtn')


function displayTasks() {
    viewerPane.removeAttribute('class')
    viewerPane.classList.add('taskViewer', 'taskActive')
    selectorBtns.forEach(btn => btn.classList.remove('active'))
    showTasks.classList.add('active')
    updateTaskDisplay()
}

function displayProjects() {
    viewerPane.removeAttribute('class')
    viewerPane.classList.add('taskViewer', 'projectActive')
    selectorBtns.forEach(btn => btn.classList.remove('active'))
    showProjects.classList.add('active')
}

function addNewItem() {
    overlay.classList.add('active')
    let modal = buildModal()
    modalDiv.innerHTML += modal
    getModaldata()
}

export function closeModal() {
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
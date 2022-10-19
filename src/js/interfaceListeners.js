import { buildModal, editModal } from "./buildModal_HTML";
import { buildModalEventListeners, getModalData } from "./modal";
import { updateTaskDisplay } from "./tasks";
import { q, qA, create } from "/src/js/utils";
import {taskList} from '/src/index.js'
import { updateProjectDisplay } from "./projects";

// Initialize interface variables
const showTasks = q('#show-tasks')
const showProjects = q('#show-projects')
const viewerPane = q('#task-viewer')
const addItemBtn = q('#add-item-btn')
export const modalDiv = q('#modal-div')
const overlay = q('#overlay')
const selectorBtns = qA('.todoBtn')


export function displayTasks() {
    viewerPane.removeAttribute('class')
    viewerPane.classList.add('taskViewer', 'taskActive')
    selectorBtns.forEach(btn => btn.classList.remove('active'))
    showTasks.classList.add('active')
    updateTaskDisplay()
}

export function displayProjects() {
    viewerPane.removeAttribute('class')
    viewerPane.classList.add('taskViewer', 'projectActive')
    selectorBtns.forEach(btn => btn.classList.remove('active'))
    showProjects.classList.add('active')
    updateProjectDisplay()
}

function addNewItem() {
    overlay.classList.add('active')
    let modal = buildModal()
    modalDiv.innerHTML += modal
    getModalData()
}

export function closeModal() {
    overlay.classList.remove('active');
    const modal = q('#item-modal')
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
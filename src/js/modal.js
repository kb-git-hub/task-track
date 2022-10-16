import { Project } from "./projects";
import { Task } from "./tasks";
import { q, qA, create } from "/src/js/utils";



export const getModaldata = () => {
    const modalNewType = qA('.newType')
    const modalPriority = qA('.modalPriority')

    const modalTitle = q('#modalItemTitle')
    const dueDate = q('#taskDueDate')
    const modalDetails = q('#modalDetailText')
    const modalSubmitNewItem = q('#modalSubmit')

    let newType,
        newTitle,
        newPriorityType,
        newDueDate,
        newDetails

    modalNewType.forEach(type => type.addEventListener('click', e => selectType(modalNewType, e)))
    modalPriority.forEach(type => type.addEventListener('click', e => selectPriority(modalPriority, e, newPriorityType)))

    dueDate.addEventListener('change', e => newDueDate = e.currentTarget.value)
    modalDetails.addEventListener('change', e => newDetails = e.currentTarget.value)
    modalTitle.addEventListener('change', e => newTitle = e.currentTarget.value)

    modalSubmitNewItem.addEventListener('click', () => {
        if (newType === 'Task') {
            const newTask = createNewTask(newTitle, newPriorityType, newDueDate, newDetails)
        }
        if(newType === 'Project'){
            const newProject = createNewProject(newTitle)
        }
    })

    function selectType(node, e) {
        node.forEach(type => {
            type.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        if (e.currentTarget.textContent === 'Project') {
            q('.modalPrioritySelector').style.display = `none`
            q('.modalDueDate').style.display = `none`
            q('.modalDetails').style.display = `none`
        } else {
            q('.modalPrioritySelector').style.display = `flex`
            q('.modalDueDate').style.display = `flex`
            q('.modalDetails').style.display = `block`
        }
        newType = e.currentTarget.textContent
    }

    function selectPriority(node, e) {
        node.forEach(type => {
            type.removeAttribute('class')
            type.classList.add('modalPriority')
        })
        if (e.currentTarget.textContent === 'Low') e.currentTarget.classList.add('low')
        else if (e.currentTarget.textContent === 'Medium') e.currentTarget.classList.add('medium')
        else e.currentTarget.classList.add('high')
        newPriorityType = e.currentTarget.textContent
    }  
}

function createNewTask(title, priority, dueDate, details) {
    return new Task(title, priority, dueDate, details)
}

function createNewProject(title) {
    return new Project(title)
 }

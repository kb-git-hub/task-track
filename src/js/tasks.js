
import { buildTaskCard } from "./buildCards_HTML";
import { modalDiv } from "./interfaceListeners";
import { q, qA, create } from "./utils";
import { buildModal, editModal } from "./buildModal_HTML";
import { editModaldata } from "./modal";


export class Task {
    constructor(
        title = 'New Task',
        priority = 'Low',
        dueDate = 'No Due Date',
        details = 'No Details',
        project = '') {
        this.title = title,
            this.priority = priority,
            this.dueDate = dueDate,
            this.details = details
        this.project = project
    }

    editTask = () => {
        return null
    }

}

export class TaskLibrary {
    constructor() {
        this.tasks = []
    }

    addTask(newTask) {
        this.tasks.push(newTask)
    }

}


export function updateTaskDisplay() {
    q('#task-viewer').innerHTML = ''

    for (let task of taskList.tasks) {
        const newTaskCard = buildTaskCard(task.title, task.priority, task.dueDate, task.details, task.project)
        q('#task-viewer').innerHTML += newTaskCard
    }
    
    qA('#task-edit').forEach(task =>{(task.addEventListener('click', editTask))})
}


function editTask(e){
    console.log(e.currentTarget.closest('.taskCard'));
    overlay.classList.add('active')
    let modal = editModal()
    modalDiv.innerHTML += modal
    editModaldata()

}


// initialize task Library
export const taskList = new TaskLibrary





import { q } from "./utils"

export const buildTaskCard = (title, priority, dueDate, details) => {
    const detailDisplay = details =>{
        let charMax = 60
        return (details.length < charMax ? details : details.slice(0,charMax) + '...')
    
}
    const card =
        `
    <div class="taskCard" style='border-left:var(--Priority-${priority})'>
        <div class="taskContent">
            <div class="checkbox">
                <input type="checkbox" id="taskCheckbox" name="source">
            </div>
            <div class="taskCard taskTitle">${title}</div>
            <div class="taskCard taskDetails">${detailDisplay(details)}</div>
        </div>
        <div class="taskContent">
            <div class="taskCardDate">${dueDate}</div>
            <span class="material-symbols-outlined taskEdit ">
                edit
            </span>
        </div>
    </div>
    `
    return card
}

export const buildProjectCard = () => {
    const project =
        `
    <div class="projectCard">
        <div class="projectTitle">Programming</div>
            <div class="projectTaskPane"></div>
        </div>
    </div>
    `
    return project
}

export const buildProjectTasks = () => {
    const projectTasks =
        `
    <div class="projectTasks">
        <div class="checkbox">
            <input type="checkbox" id="projectTaskCheckbox" name="source">
        </div>
        <div class="project taskTitle">Learn Javascript</div>
    </div>
    `
    return projectTasks
}
import { q } from "./utils"

export const buildTaskCard = (title, priority, dueDate, details, project) => {
   
    const detailDisplay = (details, length) => {
        const charMax = length
        return (details.length > charMax ? details.slice(0, charMax) + '...' : details)
    }
   
 

    const card =
        `
    <div class="taskCard" style='border-left:var(--Priority-${priority})'>
        <div class="taskContent">
            <div class="checkbox">
                <input type="checkbox" id="taskCheckbox" name="source">
            </div>
            <div class="taskTitle">${detailDisplay(title, 10)}</div>
            <div class="taskDetails">${detailDisplay(details, 30)}</div>
        </div>
        <div class="taskContent">
            <div class="taskCardContent">${detailDisplay(project, 8)}</div>
            <div class="taskCardContent">${dueDate}</div>
            <span class="material-symbols-outlined taskEdit ">
                edit
            </span>
        </div>
    </div>
    `
    return card
}



export const buildProjectCard = (title) => {
    const titleDisplay = title => {
        const charMax = 9
        return (title.length > charMax ? title.slice(0, charMax) + '...' : title)
    }
    const project =
        `
    <div class="projectCard">
        <div class="projectTitle">${titleDisplay(title)}</div>
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
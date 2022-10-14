export const buildTaskCard = () => {

    const card =
    `
    <div class="taskCard">
        <div class="taskContent">
            <div class="checkbox">
                <input type="checkbox" id="taskCheckbox" name="source">
            </div>
            <div class="taskCard taskTitle">Learn Javascript</div>
        </div>
        <div class="taskContent">
            <div class="taskCardDate">Due: Oct. 31</div>
            <span class="material-symbols-outlined taskEdit ">
                edit
            </span>
        </div>
    </div>
    `
    return card
}

export const buildProjectCard = () =>{
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

export const buildProjectTasks = () =>{
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
import { buildProjectCard } from "./buildCards_HTML";
import { q, qa, create } from "./utils";

export class Project {
    constructor(title = 'New Project') {
        this.title = title
        this.taskList = []
    }

    addTaskToProject = (task) => {
        this.taskList.push(task)
    }

    removeTaskFromProject = (task) => { }
}



export class ProjectLibrary {
    constructor() {
        this.projects = []
    }

    addProject = (newProject) => {
        this.projects.push(newProject)
        console.log(this.projects);
    }

    isProjectinLibrary = (projectTitle) => {
        this.projects.some(project=>project.title = projectTitle)
     }
}





export function updateProjectDisplay() {
    q('#task-viewer').innerHTML = ''

    for (let project of projectList.projects) {
        const newProjectCard = buildProjectCard(project.title)
        q('#task-viewer').innerHTML += newProjectCard
    }
}


//Initialize Projects
export const projectList = new ProjectLibrary
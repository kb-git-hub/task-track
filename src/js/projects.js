
import { projectList } from "..";
import { buildProjectCard } from "./buildCards_HTML";
import { q, qa, create } from "./utils";

export class Project{
    constructor(title = 'New Project'){
        this.title = title
    }
}

export class ProjectLibrary{
    constructor(){
        this.projects = []
    }

    addProject(newProject) {
        this.projects.push(newProject)
        console.log(this.projects);
    }
}


export function updateProjectDisplay() {
    q('#task-viewer').innerHTML = ''

    for (let project of projectList.projects) {
        const newProjectCard = buildProjectCard(project.title)
        q('#task-viewer').innerHTML += newProjectCard
    }
}




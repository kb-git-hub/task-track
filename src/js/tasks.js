
import { taskList } from "..";
import { buildTaskCard } from "./buildCards_HTML";
import { q, qa, create } from "./utils";

export class Task{
    constructor(title ='New Task', priority = 'Low', dueDate, details){
        this.title = title,
        this.priority = priority,
        this.dueDate = dueDate,
        this.details = details
    }
}

export class TaskLibrary{
    constructor(){
        this.tasks = []
    }

    addTask(newTask){
        this.tasks.push(newTask)
    }

}


export function updateTaskDisplay(){
    q('#task-viewer').innerHTML =''

    for (let task of taskList.tasks){
        const newTaskCard = buildTaskCard(task.title, task.priority, task.dueDate, task.details)
        q('#task-viewer').innerHTML += newTaskCard
    }
}








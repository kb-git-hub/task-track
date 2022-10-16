import '/src/styles/style.css'
import '/src/styles/modal.css'
import '/src/styles/taskpane.css'
import '/src/styles/selectorpane.css'
import { compareAsc, format } from 'date-fns'
import { q, qA, create } from "/src/js/utils";
import { buildTaskCard, buildProjectCard, buildProjectTasks } from '/src/js/buildCards_HTML.js';
import * as interfaceListeners from './js/interfaceListeners'
import * as modalFunctions from './js/modal'
import { buildModal } from './js/buildModal_HTML'
import { Task, TaskLibrary } from './js/tasks'
import { ProjectLibrary } from './js/projects'



console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))

export const taskList = new TaskLibrary
export const projectList = new ProjectLibrary

const testTask = new Task('test Title', 'Medium', '22-10-13', 'Here are some details Here are some more awwesome details even more details hello')
taskList.addTask(testTask)





// const taskViewer = q('.taskViewer')

// taskViewer.innerHTML = ''
// for (let i = 0; i < 6; i++) {
//     taskViewer.innerHTML += buildProjectCard()
// }



// const projectTasks = qA('.projectTaskPane')

// for (let i = 0; i < 12; i++) {

//     projectTasks.forEach(project=>{
//         project.innerHTML += buildProjectTasks()
//     })
// }


// console.log(projectTasks.innerHTML);


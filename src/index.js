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



export const taskList = new TaskLibrary
export const projectList = new ProjectLibrary

const testTask = new Task('test Title', 'Medium', '2012-10-13', 'Here are some details Here are some more awwesome details even more details hello')
taskList.addTask(testTask)


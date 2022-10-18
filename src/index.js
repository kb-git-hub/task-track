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
import { Task, TaskLibrary, taskList } from './js/tasks'
import { ProjectLibrary, projectList } from './js/projects'





const testTask = new Task('wwwwwwwwwwwwwwwww', 'Medium',format(new Date(2022-12-10),'MMM. dd, yy'), 'mwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwore details hello', 'wwwwwwwwwwwwwwwwww')
taskList.addTask(testTask)

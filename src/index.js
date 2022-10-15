import '/src/styles/style.css'
import '/src/styles/modal.css'
import '/src/styles/taskpane.css'
import '/src/styles/selectorpane.css'
import { compareAsc, format } from 'date-fns'
import { q, qA, create } from "/src/js/utils";
import { buildTaskCard, buildProjectCard, buildProjectTasks } from '/src/js/buildCards_HTML.js';
import { interfaceListeners } from './js/interfaceListeners'



console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))
interfaceListeners()




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


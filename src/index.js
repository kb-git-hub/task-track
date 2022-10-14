import './style.css'
import { compareAsc, format } from 'date-fns'
import { q, qA, create } from "/src/js/utils";
import { buildTaskCard, buildProjectCard, buildProjectTasks } from '/src/js/taskCard';




console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))


const taskViewer = q('.taskViewer')

taskViewer.innerHTML = ''

for (let i = 0; i < 6; i++) {
    taskViewer.innerHTML += buildProjectCard()
}



const projectTasks = qA('.projectTaskPane')

for (let i = 0; i < 12; i++) {

    projectTasks.forEach(project=>{
        project.innerHTML += buildProjectTasks()
    })
}


console.log(projectTasks.innerHTML);
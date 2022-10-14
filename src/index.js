import './style.css'
import { compareAsc, format } from 'date-fns'
import { q, qA, create } from "/src/js/utils";
import { buildTaskCard } from './js/taskCard';




console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))


const taskViewer = q('.taskViewer')
const tasks = q('.taskCard')


for (let i = 0; i < 10; i++) {
    taskViewer.innerHTML += buildTaskCard()
}

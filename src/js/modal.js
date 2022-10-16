import { q, qA, create } from "/src/js/utils";


export const getModaldata = () => {

    const modalNewType = qA('.newType')
    const modalPriority = qA('.modalPriority')


    const dueDate = null
    const modalDetails = q('#modalDetails')
    const modalSubmitNewItem = q('#modalSubmit')

    const
        newTaskType = '',
        newPriorityType = '',
        newDueDate = '',
        newDetails = ''


    modalNewType.forEach(type => type.addEventListener('click', e => selectType(modalNewType, e, newTaskType)))
    modalPriority.forEach(type => type.addEventListener('click', e => selectPriority(modalPriority, e, newPriorityType)))

}

function selectType(node, e, newTaskType) {
    node.forEach(type => {
        type.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    newTaskType = e.currentTarget.textContent
    if (e.currentTarget.textContent === 'Project') q('.modalPrioritySelector').style.display = `none`
    else  q('.modalPrioritySelector').style.display = `flex`

}


function selectPriority(node, e, newPriorityType) {
    node.forEach(type => {
        type.removeAttribute('class')
        type.classList.add('modalPriority')
    })
    if (e.currentTarget.textContent === 'Low') e.currentTarget.classList.add('low')
    else if (e.currentTarget.textContent === 'Medium') e.currentTarget.classList.add('medium')
    else e.currentTarget.classList.add('high')

    newPriorityType = e.currentTarget.textContent
}
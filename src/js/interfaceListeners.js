import { q, qA, create } from "/src/js/utils";

// Initialize interface variables

export const interfaceListeners = () => {
    const showTasks = q('#show-tasks')
    const showProjects = q('#show-projects')
    const viewerPane = q('#task-viewer')
    const addItemBtn = q('#add-item-btn')

    console.log('🌌 | file: interfaceListeners.js | line 7 | interfaceListeners | showTasks', showTasks)
    console.log('🌌 | file: interfaceListeners.js | line 8 | interfaceListeners | showProjects', showProjects)
    console.log('🌌 | file: interfaceListeners.js | line 9 | interfaceListeners | viewerPane', viewerPane)
    console.log('🌌 | file: interfaceListeners.js | line 10 | interfaceListeners | addItemBtn', addItemBtn)
}


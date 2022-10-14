export const buildTaskCard = () => {

    const card =
    `
    <div class="taskCard">
        <div class="taskContent">
            <div class="checkbox">
                <input type="checkbox" id="taskCheckbox" name="source">
            </div>
            <div class="taskCard taskTitle">Learn Javascript</div>
        </div>
        <div class="taskContent">
            <div class="taskCardDate">Due: Oct. 31</div>
            <span class="material-symbols-outlined taskEdit ">
                edit
            </span>
        </div>
    </div>
    `
    return card
}

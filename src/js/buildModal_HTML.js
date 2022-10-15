export const buildModal = () =>{
    const modal = 
    `
    <div  id='new-item-modal' class="modal active">
        <div class="modalTitle">
            <div>Create new: </div>
            <div class="newType active" id="typeTask">Task</div>
            <div class="newType" id="typeProject">Project</div>
        </div>
        <div class="modalPrioritySelector">
            <div>Priority:</div>
            <div class='modalPriority' id="priorityLow">Low</div>    
            <div class='modalPriority' id="priorityMedium">Medium</div>    
            <div class='modalPriority' id="priorityHigh">High</div>    
        </div>
        <div class="modalDueDate">
            <div>Due: </div>
            <div> calendar</div>
        </div>
        <div class="modalDetails">
            <div>Details:</div>
            <textarea name="modalDetails" id="modalDetails" cols="49" rows="8"></textarea>
        </div>
        <button type="submit" id="modalSubmit" class="">Create</button>
    </div>
    `
    return modal
}
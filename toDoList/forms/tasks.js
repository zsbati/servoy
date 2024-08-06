
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F4007F58-1C82-459F-B123-C6C6BBBFA74B"}
 */
var taskNameField = "";

/**
 * @properties={typeid:24,uuid:"A066AF21-19C0-4F69-A30C-5ACF37ED4634"}
 */
function refreshTasksList() {
    // Reload the foundset to reflect changes
    foundset.loadAllRecords();
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7C60548A-A9FC-4C84-BFE0-7F46A246E6D9"}
 */
function addTask(event) {
	var taskName = elements.taskNameField.text;
    if (taskName) {
        // Insert into database
        databaseManager.getDataSource('tasks').newRecord();
        foundset.task_name = taskName;
        databaseManager.saveData();
        // Clear the input field
        elements.taskNameField.text = '';
        // Refresh the task list
        refreshTaskList();
    }

}



/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1CF210D5-0815-49E3-A4DF-50DF4401217E"}
 */
function deleteTask(event) {
	var selectedTask = foundset.getSelectedRecord();
    if (selectedTask) {
        foundset.deleteRecord(selectedTask);
        databaseManager.saveData();
        refreshTaskList();
    }

}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AB6E50B0-A611-4B36-9C3A-64168EF91350"}
 */
function editTask(event) {
	var selectedTask = foundset.getSelectedRecord();
    if (selectedTask) {
        selectedTask.task_name = elements.taskNameField.text;
        databaseManager.saveData();
        refreshTaskList();
    }

}



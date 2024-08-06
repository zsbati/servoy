
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D7B8144E-8898-48FF-B822-FB2C0EF7E7BC"}
 */
function onLoad(event) {
	foundset.loadAllRecords();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"80D52B8B-6B0A-4014-8410-64F209685AAA"}
 */
function add(event) {
    // Create a new record in the foundset
    var newRecord = foundset.getRecord(foundset.newRecord());
    
    // Set the values from the input fields using their Data Providers
    newRecord.junk_uuid = junk_uuid; // 'id' is the Data Provider for the input field for id
    newRecord.words = words; // 'words' is the Data Provider for the input field for words
    
    // Save the record
    if (foundset.save()) {
        application.output("Record saved successfully.");
        // Optionally, clear the input fields after saving
        uuid = null; // Clear the input field for id
        words = null; // Clear the input field for words
    } else {
        application.output("Error saving record.");
    }
}
// Declare temporary variables at the top of the form's script
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7681BF1-B407-4F60-9651-6BF8AEFB06E5"}
 */
var junk_uuid;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC215992-3C9F-4624-8E15-2B0F990F28F9"}
 */
var words = '';

// onAddRecord function
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"14F3CDDA-87C8-4DA2-AC0F-3F22DDF1D328"}
 */
function onAddRecord(event) {
    
    // Check if input fields are not empty
    if (words) {
        // Create a new record in the foundset
        foundset.newRecord(); // Create a new record
        
        // Set the values from the temporary variables
        foundset.junk_uuid = databaseManager.getDataSource('junk_uuid_seq').getNextSequenceValue(); // Set the junk_uuid field
        foundset.words = String(words);         // Set the words field

        
        // Save the record to the database
        var success = databaseManager.saveData(foundset);
        
        // Log the success of the save operation
        application.output('Record save success: ' + success);
        
        // Clear the temporary variables after adding the record
        //junk_uuid = ''; // Clear the temporary variable for junk_uuid
        words = '';    // Clear the temporary variable for words

        // Optionally, reload the records to reflect the new addition
        foundset.loadAllRecords();
        
        application.output('Record added successfully');
    } else {
        application.output('Please fill in both fields.');
    }
}
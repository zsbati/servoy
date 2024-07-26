
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5B331224-EDCF-4A49-B30C-C46C7F042696"}
 */
function newOrder(event) {
	foundset.newRecord();
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BED09B12-6A38-426D-82B9-702B373D1872"}
 */
function onDataChangeCustomer(oldValue, newValue, event) {
	
	// Lookup ship info from customer address
	
	shipaddress =orders_to_customers.address;
	shipcity = orders_to_customers.city;
	shipregion =  orders_to_customers.region;
	shippostalcode = orders_to_customers.postalcode;
	shipcountry= orders_to_customers.country;
	
	return true
}

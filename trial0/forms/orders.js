/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"304E82CE-B7BC-442D-B701-FA8D0D19A1B1"}
 */
var searchText = null;


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

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"91087744-C24B-4651-A2D8-7C71EBDDE0A4"}
 */
function addItem(event) {
	
	//create the new record
	orders_to_order_details.newRecord();
	
	//set the quantity default to 1
	orders_to_order_details.quantity = 1;

}

/**
 * Called when the columns data is changed.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param [oldvalue]
 * @param [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C08FB104-F16E-46B6-9ED5-28759ED81B03"}
 */
function onColumnDataChange(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	
	// Check if the first column (Product) was changed
	if(columnindex == 0){
		orders_to_order_details.unitprice = 
			orders_to_order_details.order_details_to_products.unitprice;
	}
	return true;
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5AD3E8F2-72D9-415B-B207-C4866327A6ED"}
 */
function onSearch(event) {
	
	var search = scopes.svySearch.createSimpleSearch(foundset);
	search.setSearchAllColumns();
	search.setSearchText(searchText);
	search.addSearchProvider('orders_to_customers.companyname');
	search.addSearchProvider('orders_to_order_details.order_details_to_products.productname');
	search.loadRecords(foundset);	
}

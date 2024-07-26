/**
 * @properties={type:8,typeid:36,uuid:"0989793D-08A8-4DD4-87C6-1B39BC73F05C"}
 */
function order_total()
{
	var sum = 0;
	for (var i=1; i<= orders_to_order_details.getSize(); i++){
		var record = orders_to_order_details.getRecord(i);
		sum += record.subtotal;
	}
	return sum;
}

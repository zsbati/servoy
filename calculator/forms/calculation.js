/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C875AE2-59E2-4FB2-82BE-84DCA18C0032",variableType:4}
 */
var op = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99E34A9C-171A-40F1-A561-B7DDAFBD74C5",variableType:8}
 */
var num1 = 0.0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B422DB5-98AD-4BCC-B693-B065719E5D6F",variableType:8}
 */
var num2 = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C1F016B4-CBCE-40F6-BFB2-87C78F293A86",variableType:8}
 */
var result = 0.0;
/**
 * @type {Number}
 *
 * @properties={typeid:24,uuid:"0AEBC89B-FA73-497F-A64A-11B2F79A7490"}
 */

function calculateAdd() {
    // Access the values from the numeric fields and convert to float
    num1 = parseFloat(forms.calculation.num1); 
    num2 = parseFloat(forms.calculation.num2); 
    operation = forms.calculation.operation; 
    result = num1 + num2;
    return result  
}


/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"54166A2A-18B6-4293-943A-BA3BFA05F74F"}
 */
function CalculateSubtract(event) {
	// Access the values from the numeric fields and convert to float
    num1 = parseFloat(forms.calculation.num1); 
    num2 = parseFloat(forms.calculation.num2); 
    operation = forms.calculation.operation; 
    result = num1 - num2;
    return result 

}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F13382DB-FEC3-451F-9E6D-605970EE986E"}
 */
function calculateMultiply(event) {
	// Access the values from the numeric fields and convert to float
    num1 = parseFloat(forms.calculation.num1); 
    num2 = parseFloat(forms.calculation.num2); 
    operation = forms.calculation.operation; 
    result = num1 * num2;
    return result 

}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E1C83983-E712-4945-B660-4BC2CA98F2F5"}
 */
function calculateDivide(event) {
	// Access the values from the numeric fields and convert to float
    num1 = parseFloat(forms.calculation.num1); 
    num2 = parseFloat(forms.calculation.num2); 
    operation = forms.calculation.operation; 
    if (num2 !== 0.0){
    result = num1 / num2;
    } else {
    	result = Infinity;
    }
    return result 

}

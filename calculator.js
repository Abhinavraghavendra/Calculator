// JavaScript Document

// Change Display

function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate the equation

function e(val) {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

// Memory Functions
function m() {
	var store =	document.getElementById("d").value; 
	
}
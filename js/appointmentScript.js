/*
Author: LeQuan Ly
Copyright: codekngswd 2018

This JavaScipt File is responsible for the Appointment Modal functionality.
*/

function showAppointmentPopup() {
	var appointmentContainer = document.getElementById('appointmentContainer');
	
	appointmentContainer.style.display = "block";
}

// Close when user clicks outside of Modal
window.onclick = function(event) {
	if (event.target == appointmentContainer) {
		appointmentContainer.style.display = "none";
	}
}
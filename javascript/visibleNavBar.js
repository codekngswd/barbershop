/*	Author: LeQuan Ly
	Copyright: (C) 2018 codekngswd
	
	Visible Navigation Bar
	- This JavaScript file listens while scrolling. If the Navigation Bar is in Viewport,
	then make the Navigation Bar visible (initially set to Hidden).
*/

// When index.html loads, capture the Navigation Bar's location and if the user is scrolling 
window.onload = function () {
	// Create a variable and function that takes an element and returns if it is within Viewport
	var isInViewport = function (elem) {
	var bounding = elem.getBoundingClientRect();
	
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.document.Element.clientWidth)
		);
	};
	
	// Create a variable and function that returns true if the user is scrolling
	var didScroll = false;

	window.onscroll = doOnScroll;

	function doOnScroll() {
		didScroll = true;
	}

	// If didScroll and the element are in Viewport, both are true, then
	var title = document.querySelector("nav#navigationBar");
	
	setInterval(function() {
		if(didScroll && isInViewport (title)) {
			document.querySelector("nav#navigationBar").classList.add ("w3-animate-opacity");
			document.querySelector("nav#navigationBar").style.visibility = "visible";
			didScroll = false;
		}
	}, 100);
}
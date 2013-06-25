// JavaScript Document
window.onload = function() {
	var container = document.querySelector('ul.js-masonry');
	var msnry = new Masonry( container, {
	  columnWidth: ".sizer",
	  gutter: ".gutter",
	  itemSelector: "li",
	}).layout();
}
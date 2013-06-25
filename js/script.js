// JavaScript Document
window.onload = function() {
	var container = document.querySelector('.js-masonry');
	var msnry = new Masonry( container, {
	  columnWidth: ".sizer",
	  gutter: ".gutter",
	  itemSelector: ".tile"
	}).layout();
}
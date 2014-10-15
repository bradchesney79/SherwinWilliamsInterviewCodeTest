// Main JavaScript file for index.htm
// 2014 10 15
// BradChesney79

//Object Literal declaring properties and methods
var search = {

  //public methods
  search-add: function() {
    $('#header-search').addclass('search-background');
  }

  search-remove: function() {
    $('#header-search').removeclass('search-background');
  }
  
};

var accordion = {

  toggle-accordion: function(clickedElement) {
	//accordion.elementIdWithStrippedInlineQuantifierSuffix = clickedElementIdTextSubstring;
    $(clickedElementId).toggleClass('content-section-title-right-plus content-section-title-right-dash');
    $(ElementRelatedToClickedElementId).slideToggle( "slow" );
    // What if one misses? They become unsynced...
    // Some ifs, well placed addClasses,
    // some specific close or open animations,
    // and no toggles would provide better assurance
    // of expected operation.
  };

};
 

$( document ).ready(function() {


$('#header-search').value('').addclass('search-background').focus();
$('.content-section-title-right').addclass('content-section-title-right-plus');
$('#content-left .content-section').hide();

/*

on change to check for search val

on key up to check for search val

timer to check for search val

on click to operate accordion

*/





});
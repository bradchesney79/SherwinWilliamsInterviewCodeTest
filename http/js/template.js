// Main JavaScript file for index.htm
// 2014 10 15
// BradChesney79

//Revealing Module Pattern (Public & Private)
var search = (function() {
  var pub = {}; //Private
  
  //Public method
  pub.searchAdd = function() {
    $('#header-search').addClass('search-background');
  };

  pub.searchRemove = function() {
    $('#header-search').removeClass('search-background');
  };
    
  pub.toggleSearch = function() {
    if ($('#header-search').val().length > 0) {
      pub.searchRemove();
    }
    else {
      pub.searchAdd();
    }
  };
 
  //Return just the public parts
  return pub;
}());

var accordion = (function() {
  var pub = {}; //Private
 
  //Public method
  pub.toggleAccordion = function(clickedElementId) {
    elementIdLength = clickedElementId.length;
    elementIdQuantifierSuffix = clickedElementId.substring(elementIdLength-3,elementIdLength);
    clickedElementIdWithQuantifierSuffix = '#' + clickedElementId;
    $(clickedElementIdWithQuantifierSuffix).toggleClass('content-section-title-right-plus content-section-title-right-dash');
    elementRelatedToClickedElementId = '#content-section-' + elementIdQuantifierSuffix;
    $(elementRelatedToClickedElementId).slideToggle( "slow" );
    // What if one misses? They become unsynced...
    // Some ifs, well placed addClasses,
    // some specific close or open animations,
    // and no toggles would provide better assurance
    // of expected operation.
  };
 
  //Return just the public parts
  return pub;
}());

$( document ).ready(function() {
  //var headerSearch = '#' + $('#header-search').attr('id');
  $('#header-search').val('').addClass('search-background').focus();
  $('.content-section-title-right').addClass('content-section-title-right-plus');
  $('#content-left .content-section').hide();

  $('.content-section-title-right').on('click', function(event) {
    accordion.toggleAccordion($(this).attr('id'));
  });

  $('#header-search').on('change', function () {
    search.toggleSearch();
  });

  $('#header-search').keyup(function(){
    search.toggleSearch();
  });

  setInterval(function() { search.toggleSearch(); },100);
   
});
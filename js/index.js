/* ---------------------------------------------
 | JS
 | GLOBAL VARIABLES
 * --------------------------------------------- */
 	//Qmusic data
	var idQ          = 15;
	var qmusic       = new Array();
		
	//Instagram data
	var id           = "36f8ba4c95264711aa5b7c45d87ab0ea";
	var access_token = "191273681.36f8ba4.aebcbe20eb3147dbba8d230793ee2a66";
	var tag          = "ukulele";
	var amount       = 12;
		
	//last.fm data
	var lftag        = "";
	var lfKey        = "dd81e3c010bb1b6f4f18e10162792af6";
	var lfSecret     = "d39591c8394bf17f62fecff016bed0c2";
	var lastfm       = new Array();
 
 /* ---------------------------------------------
 | JS
 | the document.ready
 * --------------------------------------------- */
 
 $(document).ready(function(){
	 
	 // getting data from instagram
	 showPicturesByTag(tag, id, amount);

	 //getting data from Qmusic
	 getChartData(idQ);

	 //trigger the clickevent on dt elements of dl in #container
	accordeonAnimation();

 });
 
  /* ---------------------------------------------
 | JS
 | extra functions
 * --------------------------------------------- */
 
 function accordeonAnimation(){
 	
 	$( "#container" ).on( "click", "dl dt", function() {

 		tag = $(this).data("artist");
		lftag = $(this).data("lastfm");

		var boxBody = $(this).next(".boxBody");

 		getDataFromAPIs(boxBody);

 		cleanData();

		$(this).next(".boxBody").slideToggle("900");
		
	});
 }

function cleanData(){

	$("#pics").empty();
	$(".boxBody").empty();

}

function getDataFromAPIs(boxBody){

	getLastFMData(lftag, boxBody);

 	showPicturesByTag(tag, id, amount);

}



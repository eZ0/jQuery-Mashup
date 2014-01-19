/* ---------------------------------------------
 | JS
 | Getting & showing data from Last.fm API
 * --------------------------------------------- */

function getLastFMData(lftag, boxBody){
	$.ajax({

		type    : "GET",
		dataType: "json",
		cache   : false,
		url     :  "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+ lftag +"&api_key="+lfKey+"&limit=12&format=json",

		success : function(data) { 
			
			for (var i = 0; i < data["similarartists"]["artist"].length; i++) {
				
				lastfm[i] = [ 
								data["similarartists"]["artist"][i]["name"]
							];

			};

			showLastFMData(lastfm, boxBody);

		} 

	});
}

function showLastFMData(array, boxBody){

	
	for (var i = 0; i < array.length; i++) {

		boxBody.append("<dd class='boxBody' >" + array[i] + "</dd>");
		

	};

}
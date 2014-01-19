/* ---------------------------------------------
 | JS
 | Getting and showing data from Qmusic API
 * --------------------------------------------- */
	
function getChartData(idQ){
	
	$.ajax({
				
		url        : 'http://api.q-music.be/1.2/lists/' + idQ + '/editions/38?callback=?',
		crossDomain: true,
		dataType   : 'jsonp',
		
		success    : function(data){
				
			for (var i = 0; i < data["tracks"].length; i++) 
			{
						
				qmusic[i]=[ data.tracks[i].artist.name,
							data.tracks[i].title
						  ];
			}

			showChartData(qmusic);
		}
	});
}


function showChartData(array){

	$("#container").html('<dl id="list"> </dl>');

	for (var i = 0; i < array.length; i++) 
	{

		//Go throught tha array and place data about artist - song 
		$("#list").append("<dt data-artist=" + array[i][0].replace(/[ '/]/g,'') + " data-lastfm=" + 
							encodeURIComponent(array[i][0]) +">" + array[i][0] + ' - ' + array[i][1] + "</dt>");

		$("#list").append("<dd class='boxBody' >" + array[i][1] + "</dd>");

	}
	//hide all the <dd> that are not first
	$("#list dd:not(:first)").hide();
}
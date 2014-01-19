/* ---------------------------------------------
 | JS
 | Getting and showing data from Instagram API
 * --------------------------------------------- */

function showPicturesByTag(tag, id, amount){
	$.ajax({
				type    : "GET",
				dataType: "jsonp",
				cache   : false,
				url     : "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + id,
				success : function(response) {  

			  		if(response.data.length == 0)
			  		{
				  			console.log('Oops... This is so unpopular that there are no instapics! Sorry! But we always have cats!', '');
				  			tag = "kitty";
			  		}
			  		else
			  		{
			  			for(var i = 0; i < amount; i++){
			  				
			  				$("#pics").append(('<img src='+ response.data[i].images.low_resolution.url + ' class="image-polaroid"/>'));
			  				$('#pics img').css({'width' : '110px' , 'height' : '110px'});
			  			}
			  		}
			  	}
			});
}


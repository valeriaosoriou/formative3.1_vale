console.log('formative3.1');

//JSON KEY
$(document).ready(function(){
	//accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);


	//READING USER CHOICE
	var category;
	var country;

	var source;

	document.getElementById('submit').addEventListener('click', function(){
	  category= document.getElementById('categories').value;
	  country= document.getElementById('countries').value;
	  source= document.getElementById('sources').value;
	  console.log(category, country, source);
	  displayData(category, country, source);
	}); //reading user choice

	//DISPLAY DATA FUNCTIONRIGHT BEFORE AJAX, you can name the variables as you want ca=category; co=country; so=source
	function displayData(cat, count, sour){
	//AJAX METHOD
	$.ajax({
		url : `http://newsapi.org/v2/top-headlines?country=${count}&category=${cat}&apiKey=${myKey}`,
		type :'GET',
		data :'json',
		success:function(data){
				console.log(data);
				console.dir(data)

				for (var i=0; i<data.articles.length;i++){
					console.log(data.articles[i].urlToImage);
					document.getElementById('result').innerHTML +=

			        '<div class="col-4 card">' +
			          '<img class="card-img-top" alt="Image" src= "'+ data.articles[i].urlToImage +'">' +
			          '<div class="card-body">' +
			          	'<h5 class= "card-title">'+ data.articles[i].title +'</h5>' +
			          	`<a href="${data.articles[i].url}" class="btn btn-primary">Read more </a>`
			          '</div>'
			        '</div>';
				}
	
		},
		error:function(){
				console.log('error');
		}//end error
	});//end of Ajax

	} //end function display data

});//end of ApiKey
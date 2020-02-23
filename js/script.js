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

	//DISPLAY DATA FUNCTIONRIGHT BEFORE AJAX, you can name the variables as you want ep/si
	function displayData(ca, co, so){
	//AJAX METHOD
	$.ajax({
		url : `http://newsapi.org/v2/top-headlines?country=${co}&category=${ca}&apiKey=${myKey}`,
		type :'GET',
		data :'json',
		success:function(data){
				console.log(data);

				var i;
	    		for (i=0; i<data.length; i++){
			    	document.getElementById('result').innerHTML;  
			    	// +=
			    	// '<div class="col col-sm-6 col-md-4 col-lg-3 border border-primary">' +
			    	// '<h1>' + data[i].status  + '</h1>' +
			    	// '<h2>' + data[i].articles[i].author + '</h2>' ;
			    	// // '<h3>' + data[i].email + '<h3>' +
			    	// // '<img class="img-thumbnail" src="' + data[i].avatar + '" alt="Avatar">' +    
			    	// // '</div>';
			    }


		},//end data
		error:function(){
				console.log('error');
		}//end error
	});//end of Ajax

	}; //end function display data

});//end of ApiKey
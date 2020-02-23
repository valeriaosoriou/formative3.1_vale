console.log('formative3.1');

//JSON KEY
$(document).ready(function(){
	//accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);
});

// //DROPDOWN MENUS FOR DIFFERENT CHOICES STORED IN HTML LINKS
// document.getElementById('submit').addEventListener('click', function(){
//     choice = document.getElementById('choice').value;
//     console.log(choice);
//     displayData(choice);//actual parameter
// });

//FUNCTION TO DISPLAY CHOICES
// function displayData(choice){
//AJAX
$.ajax({
	url : `http://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=${myKey}`,
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

// }; //function display data


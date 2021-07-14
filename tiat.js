define(['pipAPI', 'https://cdn.jsdelivr.net/gh/jessicampbell/qualiat/iattrans.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Cisgender', //Will appear in the data.
			title : {
				media : {word : 'Cisgender'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Cisgender'},
					{word: 'Cis'},
					{word: 'Male'},
					{word: 'Female'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Transgender', //Will appear in the data.
			title : {
				media : {word : 'Transgender'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Transgender'},
					{word: 'Trans'},
					{word: 'Male to female'},
					{word: 'Female to male'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});

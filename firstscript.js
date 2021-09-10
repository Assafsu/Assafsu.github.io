define(['pipAPI', 'https://assafsu.github.io/secondscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
		//hello world
	return iatExtension({
		category1 : {
			name : 'זקנים', //Will appear in the data.
			title : {
				media : {word : 'זקנים'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'of1.jpg'}, 
    			{image : 'of2.jpg'}, 
    			{image : 'of3.jpg'}, 
    			{image : 'om1.jpg'}, 
    			{image : 'om2.jpg'}, 
    			{image : 'om3.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'צעירים', //Will appear in the data.
			title : {
				media : {word : 'צעירים'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf2.jpg'}, 
    			{image : 'yf3.jpg'}, 
    			{image : 'ym1.jpg'}, 
    			{image : 'ym2.jpg'}, 
    			{image : 'ym3.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://assafsu.github.io/images/'
		} 
	});
});

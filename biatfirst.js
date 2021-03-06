define(['pipAPI', 'https://assafsu.github.io/biatsecond.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();

	
	return iatExtension({
		practiceCategory1 : 
			{
				name : 'בגדים', //Will appear in the data.
				title : {
					media : {word : 'בגדים'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : { 
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'מעיל, סוודר, טי שירט, גופיה'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'מעיל'}, 
					{word : 'סוודר'}, 
					{word : 'טי שירט'}, 
					{word : 'גופיה'}
				], 
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},	
			practiceCategory2 : 
			{
				name : 'נעלים', 
				title : {
					media : {word : 'Birds'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'כפכפים, סנדלים, מגפיים, נעלי ספורט'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'כפכפים'}, 
					{word : 'סנדלים'}, 
					{word : 'מגפיים'}, 
					{word : 'נעלי ספורט'}
				], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			categories : [  //As many categories you need.
				{
					name : 'זקנים', //Will appear in the data.
					title : {
						media : {word : 'זקנים'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {image : 'Olds.jpg'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 2
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'of1.jpg'}, 
        			{image : 'of2.jpg'}, 
        			{image : 'of3.jpg'}, 
        			{image : 'om1.jpg'}, 
        			{image : 'om2.jpg'}, 
        			{image : 'om3.jpg'}
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'צעירים', 
					title : {
						media : {word : 'צעירים'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {image : 'Youngs.jpg'},  
							css : {color:'#31b404','font-size':'1em'}, 
							height : 2
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'yf1.jpg'}, 
        			{image : 'yf2.jpg'}, 
        			{image : 'yf3.jpg'}, 
        			{image : 'ym1.jpg'}, 
        			{image : 'ym2.jpg'}, 
        			{image : 'ym3.jpg'}
					], 
					//Stimulus css
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}
			],
			base_url : {//Where are your images at?
			image : 'https://assafsu.github.io/images/'
				
			} 
	});
});

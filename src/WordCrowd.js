/*
Copyright --/-- WordCrowd
File : WordCrowd

This file is part of WordCrowd.

*/
/**********************File Reading***********************************/
function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	var allText;
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				allText = rawFile.responseText;

			}
		}
	}
	rawFile.send(null);
	return allText;
}
/*********************Stop words*************************************/
function removeStopWords(text) {
	var x;
	var y;
	var word;
	var stop_word;
	var regex_str;
	var regex;
	var cleansed_string = text;
	
	var stop_words = new Array('a','about','above','across','after','again','against','all','almost','alone','along','already','also','although','always','among','an','and','another','any','anybody','anyone','anything','anywhere','are','area','areas','around','as','ask','asked','asking','asks','at','away','b','back','backed','backing','backs','be','became','because','become','becomes','been','before','began','behind','being','beings','best','better','between','big','both','but','by','c','came','can','cannot','case','cases','certain','certainly','clear','clearly','come','could','d','did','differ','different','differently','do','does','done','down','down','downed','downing','downs','during','e','each','early','either','end','ended','ending','ends','enough','even','evenly','ever','every','everybody','everyone','everything','everywhere','f','face','faces','fact','facts','far','felt','few','find','finds','first','for','four','from','full','fully','further','furthered','furthering','furthers','g','gave','general','generally','get','gets','give','given','gives','go','going','good','goods','got','great','greater','greatest','group','grouped','grouping','groups','h','had','has','have','having','he','her','here','herself','high','high','high','higher','highest','him','himself','his','how','however','i','if','important','in','interest','interested','interesting','interests','into','is','it','its','itself','j','just','k','keep','keeps','kind','knew','know','known','knows','l','large','largely','last','later','latest','least','less','let','lets','like','likely','long','longer','longest','m','made','make','making','man','many','may','me','member','members','men','might','more','most','mostly','mr','mrs','much','must','my','myself','n','necessary','need','needed','needing','needs','never','new','new','newer','newest','next','no','nobody','non','noone','not','nothing','now','nowhere','number','numbers','o','of','off','often','old','older','oldest','on','once','one','only','open','opened','opening','opens','or','order','ordered','ordering','orders','other','others','our','out','over','p','part','parted','parting','parts','per','perhaps','place','places','point','pointed','pointing','points','possible','present','presented','presenting','presents','problem','problems','put','puts','q','quite','r','rather','really','right','right','room','rooms','s','said','same','saw','say','says','second','seconds','see','seem','seemed','seeming','seems','sees','several','shall','she','should','show','showed','showing','shows','side','sides','since','small','smaller','smallest','so','some','somebody','someone','something','somewhere','state','states','still','still','such','sure','t','take','taken','than','that','the','their','them','then','there','therefore','these','they','thing','things','think','thinks','this','those','though','thought','thoughts','three','through','thus','to','today','together','too','took','toward','turn','turned','turning','turns','two','u','under','until','up','upon','us','use','used','uses','v','very','w','want','wanted','wanting','wants','was','way','ways','we','well','wells','went','were','what','when','where','whether','which','while','who','whole','whose','why','will','with','within','without','work','worked','working','works','would','x','y','year','years','yet','you','young','younger','youngest','your','yours','z');
    // Split out all the individual words in the phrase
    words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g)
    
    // Review all the words
    for(x=0; x < words.length; x++) {
        // For each word, check all the stop words
        for(y=0; y < stop_words.length; y++) {
            // Get the current word
            word = words[x].replace(/\s+|[^a-z]+/ig, "");   // Trim the word and remove non-alpha
            
            // Get the stop word
            stop_word = stop_words[y];
            
            // If the word matches the stop word, remove it from the keywords
            if(word.toLowerCase() == stop_word) {
                // Build the regex
                regex_str = "^\\s*"+stop_word+"\\s*$";      // Only word
                regex_str += "|^\\s*"+stop_word+"\\s+";     // First word
                regex_str += "|\\s+"+stop_word+"\\s*$";     // Last word
                regex_str += "|\\s+"+stop_word+"\\s+";      // Word somewhere in the middle
                regex = new RegExp(regex_str, "ig");
                
                // Remove the word from the keywords
                cleansed_string = cleansed_string.replace(regex, " ");
            }
        }
    }
    return cleansed_string.replace(/^\s+|\s+$/g, "");
}

function Ziggurat(){

	var jsr = 123456789;

	var wn = Array(128);
	var fn = Array(128);
	var kn = Array(128);

	function RNOR(){
		var hz = SHR3();
		var iz = hz & 127;
		return (Math.abs(hz) < kn[iz]) ? hz * wn[iz] : nfix(hz, iz);
	}

	this.nextGaussian = function(){
		return RNOR();
	}

	function nfix(hz, iz){
		var r = 3.442619855899;
		var r1 = 1.0 / r;
		var x;
		var y;
		while(true){
			x = hz * wn[iz];
			if( iz == 0 ){
				x = (-Math.log(UNI()) * r1); 
				y = -Math.log(UNI());
				while( y + y < x * x){
					x = (-Math.log(UNI()) * r1); 
					y = -Math.log(UNI());
				}
				return ( hz > 0 ) ? r+x : -r-x;
			}

			if( fn[iz] + UNI() * (fn[iz-1] - fn[iz]) < Math.exp(-0.5 * x * x) ){
				return x;
			}
			hz = SHR3();
			iz = hz & 127;

			if( Math.abs(hz) < kn[iz]){
				return (hz * wn[iz]);
			}
		}
	}

	function SHR3(){
		var jz = jsr;
		var jzr = jsr;
		jzr ^= (jzr << 13);
		jzr ^= (jzr >>> 17);
		jzr ^= (jzr << 5);
		jsr = jzr;
		return (jz+jzr) | 0;
	}

	function UNI(){
		return 0.5 * (1 + SHR3() / -Math.pow(2,31));
	}

	function zigset(){
		// seed generator based on current time
		jsr ^= new Date().getTime();

		var m1 = 2147483648.0;
		var dn = 3.442619855899;
		var tn = dn;
		var vn = 9.91256303526217e-3;
		
		var q = vn / Math.exp(-0.5 * dn * dn);
		kn[0] = Math.floor((dn/q)*m1);
		kn[1] = 0;

		wn[0] = q / m1;
		wn[127] = dn / m1;

		fn[0] = 1.0;
		fn[127] = Math.exp(-0.5 * dn * dn);

		for(var k = 126; k >= 1; k--){
			dn = Math.sqrt(-2.0 * Math.log( vn / dn + Math.exp( -0.5 * dn * dn)));
			kn[k+1] = Math.floor((dn/tn)*m1);
			tn = dn;
			fn[k] = Math.exp(-0.5 * dn * dn);
			wn[k] = dn / m1;
		}
	}
	zigset();
}


function wordFrequency (stringLine) {
	
	stringLine = stringLine.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g," ");
	
   //. stringLine = stringLine.removeStopWords();
   words = stringLine.trim().split(/[\s]+/);
   freqMap = {};
   data = [];
   words.forEach(function(w) {

   	if (!freqMap[w]) {
   		freqMap[w] = 0;
   	}
   	freqMap[w] += 1;

   });
   for (var key in freqMap) {
   	data.push({"word":key , "size":freqMap[key]});
   }
   return data;
}

var WordCrowd = function (options){
	var svg,
	defaultcolor,
	linearFontScale,
	linearCollissionScale,
	stopwords,
	self = this;
	
var settings = {
		container:'body',
		data : 'Computer science is the scientific and practical approach to computation and its applications. It is the systematic study of the feasibility,structure, expression, and mechanization of the methodical procedures or algorithms that underlie the acquisition, representation,processing storage, communication of, and access to information, whether such information is encoded as bits.',
		stopwordsRemove:false,
		width:800,
		height:600,
		fontsize_range : {
			min : 12,
			max : 36
		},
		hover_color :'black',
		collision:{
			min:500,
			max:1000
		},
		sortDescending : false,
		angles : [0,90], // angles should be between 0 and 360
		colors:'#aaa',
		background :'white',
		font_families:[ "Verdana", "Arial"],
		readFromFile:{
			type:"text",
			fileLocation:false
		}	
	};
	
	if(!options.data.trim()){
		options.data = settings.data;
	} 
	
	//. override default settings...
	if (typeof options != 'undefined') {
		for (var prop in options) {
			if (prop in settings) {
				settings[prop] = options[prop];
			}
		}
	}
	
	if(settings.readFromFile.fileLocation != false){
		settings.data = readTextFile(settings.readFromFile.fileLocation);
		
	}

	if(settings.stopwordsRemove && ((settings.readFromFile.fileLocation != false && settings.readFromFile.type == "text")|| (settings.readFromFile.fileLocation == false )))
	{
		settings.data = removeStopWords(settings.data);	
	}
	if(settings.readFromFile.fileLocation == false || settings.readFromFile.type == "text"){
		settings.data = wordFrequency(settings.data);
	}else{
		settings.data =JSON.parse(settings.data);
	}
	if(settings.sortDescending){
		settings.data = settings.data.sort(function(a, b){ return d3.descending(a.size, b.size); });
	}


	self.init = function(options){
		var minWeight = d3.min(settings.data, function (d) {
			return d.size;
		});

		var maxWeight = d3.max(settings.data, function (d) {
			return d.size;
		});
		linearFontScale = d3.scale.linear()
		.domain([minWeight, maxWeight])
		.range([settings.fontsize_range.min, settings.fontsize_range.max]);

		linearCollissionScale = d3.scale.linear()
		.domain([minWeight, maxWeight])
		.range([settings.collision.min, settings.collision.max]);
		
		svg = d3.select(settings.container)
		.append("svg")
		.attr("width", settings.width)
		.attr("height", settings.height)
		.style("background",settings.background)
		.on("dblclick", function(){ self.redraw();
		});
		
		var label = svg.selectAll(".place-label")
		.data(settings.data)
		.enter().append("text");
		
		label.attr("class", "place-label")
		.attr("font-family", function(d){ return (settings.font_families.length > 1) ? self.getRandom(settings.font_families): settings.font_families;})
		.on("click", function(d){
			console.log(d.word);
		})
		.on("mouseover", function(d){
			defaultcolor = d.color;
			d3.select(this).style("fill" , settings.hover_color);
		})
		.on("mouseout", function(d){
			d3.select(this).style("fill" , defaultcolor);
		});

		label.style("font-size", function(d){
			var font_size = linearFontScale(d.size);
			return font_size+"px";
		})
		.style("fill", function(d){
			d.color = settings.colors;
			if(settings.colors == "random"){
				d.color = self.getRandomColor();
			}
			return d.color;
		});
		
		label.text(function(d) { return d.word; })
		.each(function(d, i){

			self.move(this);
			var tried = settings.collision.min;
			var maxCollision = linearCollissionScale(d.size);
			while(self.is_collide(this)){
				if(tried > maxCollision){
					this.remove();
					break;
				}
				d3.select(this).attr("transform", function(d , i){
					return d.word.length  > 10 ? "rotate(0)" : "rotate("+self.getRandom(settings.angles)+")";
				});
				self.move(this);
				tried++;
			}
		});
	};

	self.redraw = function(){
		svg.remove();
		self.init();
	};


	self.getRandom = function(givenArray){

		return givenArray[Math.floor(Math.random()*givenArray.length)];		
	};
	self.getRandomColor = function() {
		letters = '0123456789ABCDEF'.split('');
		color = '#';
		for ( i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	self.getNextCoordinates = function(word, z){

		

		var a = word.getBoundingClientRect();

		var fieldWidth = settings.width;//canvas.width;
		var fieldHeight = settings.height;//canvas.height;
		var centerHorizLine =  ((fieldHeight - a.height) * 0.5);//450*.5
		var  centerVertLine =  ((fieldWidth - a.width) * 0.5);

		var  xOff =  z.nextGaussian() * ((fieldWidth - a.width) *0.2);
		var  yOff =  z.nextGaussian() * 50;
		return [centerVertLine + xOff, centerHorizLine + yOff];
	};
	
	self.is_collide = function(that){

		var DO_NOTHING = false;
		var COLLIDED = false;
		var a = that.getBoundingClientRect();
		svg.selectAll(".place-label")
		.each(function(d, i) {
			if(DO_NOTHING || COLLIDED || this == that) {
				DO_NOTHING = true;
			}else{
				var b = this.getBoundingClientRect();
				if(self.collide(a, b)){
					COLLIDED =  true;
				}
			}
		});
		
		return COLLIDED;
	};
	self.move = function(word){
		var gaussians = self.getNextCoordinates(word,new Ziggurat());
		//. check if the word is drawn out of the container
		var right_pos = settings.width - (word.getBoundingClientRect().width + 12);
		while(gaussians[0] < 12 || gaussians[0] > right_pos){
			gaussians = self.getNextCoordinates(word,new Ziggurat());
		}
		
		var to = d3.transform(d3.select(word).attr("transform"));
		to.translate = [ gaussians[0], gaussians[1] ];
		d3.select(word).attr("transform", "translate(" + to.translate + ")rotate("+to.rotate+")");
	};

	self.collide = function(a, b){
		return !(
			((a.top + a.height) < (b.top)) ||
			(a.top > (b.top + b.height)) ||
			((a.left + a.width) < b.left) ||
			(a.left > (b.left + b.width))
			);  
	};

	//. initialize WordCrowd
	self.init();

}

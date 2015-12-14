# Word Crowd
This is a <a href="http://wordcram.org/">WordCram</a>-inspired WordCrowd layout written in JavaScript.
<br>
![WordCrowd screenshot](images/WordCrowd.png)
<br>
<hr>
![WordCrowd screenshot](images/Capture.JPG)
## USAGE: 
<p>Download zip or clone it using the following command.</p>
`git clone https://github.com/project-spinoza/WordCrowd.git`

<p> Navigate to the examples directory and run the index.html file in web browser. </p>

## Running WordCrowd:

`var settings = {`<br>
       `"container":"body",`<br>
       `"data":"Input text data for visualization"`<br>
     `};`
<br>
`var wordCrowd = new WordCrowd(settings);`
## Settings:
<p>There are some default settings for WordCrowd but they can be modify as follows</p>
* <b>container</b>
<p>Selector of the wordCrowd container element</p>
<p>default value  `body`</p>
<p>`container :  "#wordCrowdContainer"`</p>
* <b>data</b>
<p>The input text from which WordCrowd generates graph.</p>
<p>default value  `Input text data for visualization`</p>
<p>`data:  "Input text data for visualization"`</p>
<p>We can also give json data for generating graphs.</p>
<p>`data:  "[{word:'first word', size:12},{word:'second word', size:10}]"`</p>
* <b>width</b>
<p>Width of WordCrowd container.</p>
<p>default value  `800`</p>
<p>`width:800`</p>
* <b>height</b>
<p>Height of WordCrowd container.</p>
<p>default value  `600`</p>
<p>`height:600`</p>
* <b>background :"white" </b>
<p>Background color of WordCrowd container.</p>
<p>default value `"white" `</p>
<p>`background :"white"` </p>
* <b>fontsize_range</b>
<p>The sizes of words. words of higher frequency get maximum font-size and lower frequency get minimum font-size. </p>
<p>default value `{ min : 12, max : 36 } `</p>
<p>`fontsize_range : { min : 12, max : 36 }` </p>
* <b>hover_color</b>
<p>Mouse hover color of words in Wordcrowd.</p>
<p>default value `"#000000"`</p>
<p>`hover_color :"#000000"` </p>
* <b>colors</b>
<p>Words color. 'random' refers to a function that randomly give colors to words.</p>
<p>default value `"random"`</p>
<p>`colors:"random" ` </p>
<p>we can also give specific color for all text </p>
<p>`colors:"#000000" ` </p>
* <b>collision</b>
<p>Maximum number of replace tries of a word to avoid collision.</p>
<p>'min'Minimum number of replace tries of a word to avoid collision.</p>
<p>'max'Maximum number of replace tries of a word to avoid collision.</p>
<p>default value `min:500,max:1000`</p>
<p>`collision:{
			min:500,
			max:1000
		}` </p>
* <b>sortDescending</b>
  <p>sortDescending is use to sort our data descendingly.we can enable this by making  `sortDescending:true`</p>
  <p>default value `sortDescending:false`</p>
* <b>angles</b> 
<p>Array of angles to which words rotates. angles should be between 0 and 360.</p>
<p>default value `[0,90] `</p>
<p>`angles : [0,90] `</p>
* <b>font_families</b>
<p>Array of font families which will assign to words randomly.</p>
<p>default value `[ "Verdana", "Arial"]`</p>
<p>`font_families:[ "Verdana", "Arial"]`</p>
* <b>readFromFile</b>
<p>we can also give our data from file by giving the path of the file.</p>
<p>we can give text and json file by specifing the `type:text` or `type:json` option in `readFromFile:{
	    	type:"text",
	    	fileLocation:false
	    }` and then giving the path of the file in `fileLocation:"your file path"`</p>
<p>default value `readFromFile:{
	    	type:"text",
	    	fileLocation:false
	    }`</p>



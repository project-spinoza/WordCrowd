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
<p>Global setting for wordcrowd container.</p>
* <b>container</b>
<p>Selector of the wordCrowd container element</p>
<p>default value  `body`</p>
<p>`container :  "#wordCrowdContainer"`</p>
* <b>data</b>
<p> input text  which WordCrowd will generate graph.</p>
<p>default value  `Input text data for visualization`</p>
<p>`data:  "Input text data for visualization"`</p>
<p>Data can also be given in the form of json.</p>
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
<p>Sizes of words in proportional to their relative frequencies. Words with high relative frequency will  get larger font_size compared to those with lower relative frequencies. </p>
<p>default value `{ min : 12, max : 36 } `</p>
<p>`fontsize_range : { min : 12, max : 36 }` </p>
* <b>hover_color</b>
<p>Words color on hover.</p>
<p>default value `"#000000"`</p>
<p>`hover_color :"#000000"` </p>
* <b>colors</b>
<p>Wordcrowd words color</p>
<p>"random" will assign random color to each word.</p>
<p>default value `"random"`</p>
<p>`colors:"random" ` </p>
<p> Custom color can be assigned to  wordcrowd.</p>
<p>To color black each word in cloud:`colors:"#000000" ` </p>
* <b>collision</b>
  <p>number of iterations before a word is placed in specified container.</p>

<p>'min' Minimum number of iterations.</p>
<p>'max' Maximum number of iterations.</p>
<p>default value `min:500,max:1000`</p>
<p>`collision:{
			min:500,
			max:1000
		}` </p>
* <b>sortDescending</b>
  <p>specify the order in which words will be arranged in container based on their relative frequencies.</p>
  <p>default value `sortDescending:false`</p>
* <b>angles</b> 
<p>list of angles each word can take to rotate. Each angle must be between 0 and 360.</p>
<p>default value `[0,90] `</p>
<p>`angles : [0,90] `</p>
* <b>font_families</b>
<p>list of available font-families.</p>
<p>default value `[ "Verdana", "Arial"]`</p>
<p>`font_families:[ "Verdana", "Arial"]`</p>
* <b>readFromFile</b>
<p>path to external data file.</p>
<p>data format must be specified in settings options.</p>
<p>json format: `readFromFile:{
	    	type:"json",
	    	fileLocation:'json file location'
	    }`</p>
<p>text format: `readFromFile:{
	    	type:"text",
	    	fileLocation:'text file location'
	    }`</p>
<p>default value `readFromFile:{
	    	type:"text",
	    	fileLocation:false
	    }`</p>



# WordCrowd
A javaScript implementation of WordCram

Usage of Wordcrowd </b>

## step 1: 
<p>Download zip file of WordCrowd.<p>
<b> OR </b>
<p>Clone it using the following command. </p>
`git clone https://github.com/bit-whacker/WordCrowd.git`
## step 2:
<p> Navigate to the examples directory and run the index.html file using browser.</p>

## step 3:
<b>Running WordCrowd</b><br><br>
`var settings = {`<br>
       `"container":"body",`<br>
       `"data":"Input text data for visualization"`<br>
     `};`
<br>
`var wordCrowd = new WordCrowd(settings);`
## step 4:
<b>Settings</b>
<p>There are some default settings for WordCrowd but they can be modify as follows</p>
* <b>container</b>
<p>HTML Selector of the wordCrowd container element</p>
<p>default value  `body`</p>
<p>`container :  "#wordCrowdContainer"`</p>
* <b>data</b>
<p>The input text from which WordCrowd generate a graph.</p>
<p>default value  `Input text data for visualization`</p>
<p>`data:  "Input text data for visualization"`</p>
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
<p>default value `{ min : 20, max : 80 } `</p>
<p>`fontsize_range : { min : 20, max : 80 }` </p>
* <b>hover_color</b>
<p>Mouse hover color of words in Wordcrowd.</p>
<p>default value `"grey"`</p>
<p>`hover_color :"grey"` </p>
* <b>colors</b>
<p>Words color. 'random' refers to a function that randomly give colors to words.</p>
<p>default value `"random"`</p>
<p>`colors:"random" ` </p>
* <b>max_tries</b>
<p>Maximum number of replace tries of a word to avoid collision.</p>
<p>default value `700`</p>
<p>`max_tries:700` </p>
* <b>angles</b> 
<p>Array of angles to which words rotates. angles should be between 0 and 360.</p>
<p>default value `[0,90] `</p>
<p>`angles : [0,90] `</p>
* <b>font_families</b>
<p>Array of font families which will assign to words randomly.</p>
<p>default value `[ "Arial Bold Italic", "Verdana", "Helvetica" ," Monaco", "monospace"]`</p>
<p>`font_families:[ "Arial Bold Italic", "Verdana", "Helvetica" ," Monaco", "monospace"]`</p>

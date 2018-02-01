/////////////////////////////////////
//STEP 1: ADD AN EMPTY FRAME TO PARENT WINDOW
/////////////////////////////////////

var frame = document.createElement("iframe");

frame.frameBorder = 0;
frame.scrolling = "no";
frame.style.width = "416px";
frame.style.height = "316px";
frame.marginwidth = 0;
frame.marginheight = 0;
frame.hspace = 0;
frame.vspace = 0;

console.log(document.referrer);
console.log(document.location.href);
console.log(window.parent.document.title);

var doc = window.parent.document;
doc.documentElement.appendChild(frame);

/////////////////////////////////////
//STEP 2: INSERT HTML USING appendChild()
/////////////////////////////////////

var firstFrame = doc.documentElement.getElementsByTagName('iframe')[0];
var fbody = firstFrame.contentWindow.document.getElementsByTagName("body")[0];
console.log(fbody);
var newContent = document.createElement('div');
newContent.innerHTML = "<div style='height: 30%;  padding-top: 30%'> <h2 style='display: inline-block; width: 100%;text-align: center; vertical-align:middle'>How are you!</h2> </div>";
fbody.appendChild(newContent);

/////////////////////////////////////
//STEP 3: INSERT HTML USING document.write (WILL OVERRIDE appendChild())
/////////////////////////////////////

htmlString = '<img src="300x200.jpg" width="300" height="200">';
htmlString += "<h2>Hi</h2>"
jsString = ' <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id=\'cnzz_stat_icon_1272870994\'%3E%3C/span%3E%3Cscript src=\'" + cnzz_protocol + "s22.cnzz.com/stat.php%3Fid%3D1272870994%26show%3Dpic\' type=\'text/javascript\'%3E%3C/script%3E"));console.log(document);document.close();</script>';
firstFrame.contentWindow.document.write(htmlString + jsString);

var d = document.createElement("iframe");

d.frameBorder = 0;
d.scrolling = "no";
d.style.width = "300px";
d.style.height = "200px";
d.padding = 0;
d.margin = 0;





console.log(document.referrer);
console.log(document.location);
console.log(window.parent.document.title);

var doc = window.parent.document;

console.log(doc.documentElement);


doc.documentElement.appendChild(d);

console.log(doc.documentElement.getElementsByTagName('iframe')[0]);
var f = doc.documentElement.getElementsByTagName('iframe')[0];


var fbody = f.contentWindow.document.getElementsByTagName("body")[0];


console.log(fbody);

//var newContent = document.createTextNode("Hi there and greetings!");


htmlString = '<div style="width:300px; height:200px; background-color:#CCCCCC;"><img src="300x200.jpg" width="300" height="200"></div>'
var newContent = document.createElement('div');
newContent.innerHTML = htmlString.trim();


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}



fbody.appendChild(newContent);




//for (var p in doc) {
//    var value = null;
//    try {
//        value = doc[p];
//    } catch (err) {}
//
//    if (value)
//        console.log(p, value);
//}

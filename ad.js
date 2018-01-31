var d = document.createElement("iframe");

d.frameBorder = 0;
d.scrolling = "no";
d.style.width = "200px";
d.style.height = "200px";




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

var newContent = document.createTextNode("Hi there and greetings!");

fbody.appendChild(newContent);

var html = "<body><p>HEllo</p></body>";
//document.body.appendChild(d);
fbody.document.open();
fbody.document.write(html);
fbody.document.close();



//for (var p in doc) {
//    var value = null;
//    try {
//        value = doc[p];
//    } catch (err) {}
//
//    if (value)
//        console.log(p, value);
//}

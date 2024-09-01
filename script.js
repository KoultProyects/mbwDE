//read file
var file;
var fileName;
document.getElementById("fileInput").addEventListener("change", function(event) {
 file = event.target.files[0];
 fileName = file.name;
 if (file) {
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(a) {
   file = a.target.result;
  }
 }
});

//decode algorithm
function decode(encodedString){
 if (file){
  var decodedString = "";
  for (var a = 0, b = encodedString.length; a < b; ){
   var c = a++;
   var characterCode = encodedString.charCodeAt(c) - (c * 5 % 33 + 1);
   decodedString += String.fromCodePoint(characterCode);
  }
  newFile = decodedString;
 }
}

//encode algorithm
function encode(decodedString){
 if (file){
  var encodedString = "";
  for (var a = 0, b = decodedString.length; a < b; ){
   var c = a++;
   var characterCode = decodedString.charCodeAt(c) + (c * 5 % 33 + 1);
   encodedString += String.fromCodePoint(characterCode);
  }
  newFile = encodedString;
 }
}

//download new file
var newFile;
function download(){
 if (newFile){
  var blob = new Blob([newFile], {type: "text/plain"});
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
 }
}
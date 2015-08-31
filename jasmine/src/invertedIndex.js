//variable declaration


var index = [],
  result = [],
  holder = [],
  len, i, temp = [],
  indexArray = [];


//var fileRef = 'books.json';



var getIndex = function() {

};

getIndex.prototype.readTexts = function(obj) {

  //iterate trough JSON properties and push sentences to holding array
  var k = 0;
  do {
    for (var j in obj[k]) {
      holder.push(obj[k][j].toLowerCase());
    }
    k += 1;
  }
  while (k < obj.length);

  return holder;


};

getIndex.prototype.createIndex = function(file) {

  var holder = getIndex.prototype.readTexts(file);

  //iterate through holder, split by whitespace and push words to result
  for (i = 0; i < holder.length; i++) {
    var temp = [];
    var words = holder[i].split(/[\s\,\.\:]/);
    for (var j = 0; j < words.length; j++) {
      temp.push(words[j]);
    }
    index.push(temp);
  }
  //console.log(holder);
  return index;
};

getIndex.prototype.searchIndex = function(files, stringKeys) {
  var file;
  if (typeof files === typeof '') {
    var holding = [];
    $.ajax({
      url: files,
      async: false,
      dataType: 'json',
      success: function(json) {
        file = json;
      }
    });

  } else {
    file = files;
  }
  var converter;
  if (typeof stringKeys === typeof []) {
    converter = stringKeys.join();
  } else {
    converter = stringKeys;
  }
  var lower = converter.toLowerCase();
  var keys = lower.split(/[\s\,\.\:]/);
  var index = getIndex.prototype.createIndex(file);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < index.length; j++) {
      if (index[j].indexOf(keys[i]) >= 0) {
        result.push([keys[i], index.indexOf(index[j])]);
      }

    }
  }
  return result;

};

getIndex.prototype.indexList = function(files, stringKeys) {

var indexes =  getIndex.prototype.searchIndex(files, stringKeys);
for (var l = 0; l <indexes.length; l++){
    indexArray.push(indexes[l][1]);
}
console.log(indexes);
return indexArray;
};

//getIndex.prototype.indexList(fileRef, ['Alice', 'FALLS', 'Lord', 'elf', 'wizard', 'Imagination']);

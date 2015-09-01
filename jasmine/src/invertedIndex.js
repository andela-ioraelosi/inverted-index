/* This file require running it on HTTP Server
for the JQuery AJAX file reading functionality to 
work */

//variables declaration
var index = [],
  result = [],
  holder = [],
  len, i, temp = [],
  indexArray = [];

var fileRef = 'books.json';


//main get index function
var getIndex = function(file, stringKeys){

//getIndex.prototype.indexList(file, stringKeys);
};

//function to read file contents
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

//function for creating index
getIndex.prototype.createIndex = function(file) {

  //call the readTexts function to read contents
  var holder = getIndex.prototype.readTexts(file);

  //iterate through holder, split by all punctuations and push words to result
  for (i = 0; i < holder.length; i++) {
    var temp = [];
    var words = holder[i].split(/[\s\,\.\:]/);

  // push words to index array
    for (var j = 0; j < words.length; j++) {
      temp.push(words[j]);
    }
    index.push(temp);
  }
  return index;
};

// index search function
getIndex.prototype.searchIndex = function(files, stringKeys) {
  
  //check file type if its an array, variable or file path
  var file;
  if (typeof files === typeof '') {
  
    //syncronous ajax request to read file if it is a file path
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
  //check if keys is an array of strings or a string
  if (typeof stringKeys === typeof []) {
    //join if its an array
    converter = stringKeys.join();
  } else {
    converter = stringKeys;
  }
   //convert string to lowercase and split
  var lower = converter.toLowerCase();
  var keys = lower.split(/[\s\,\.\:]/);

  //call the getIndex function 
  var index = getIndex.prototype.createIndex(file);

  //loop through keys and push matching keys 
  //with their corresponding index into results
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < index.length; j++) {
      if (index[j].indexOf(keys[i]) >= 0) {
        result.push([keys[i], index.indexOf(index[j])]);
      }

    }
  }
  return result;

};

//function to generate the index array, main fuction to be called
//with the parameters
getIndex.prototype.indexList = function(files, stringKeys) {

//call the search index function
var indexes =  getIndex.prototype.searchIndex(files, stringKeys);

//loop trough the search results and push the
//index numbers to indexArray;
for (var l = 0; l <indexes.length; l++){
    indexArray.push(indexes[l][1]);
}

return indexArray;
};


//getIndex.prototype.indexList(fileRef, ['Alice', 'FALLS', 'Lord', 'elf', 'wizard', 'Imagination']);

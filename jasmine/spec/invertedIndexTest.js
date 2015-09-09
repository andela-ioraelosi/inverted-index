var inverted = new getIndex();


var texts = [{
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
];


describe("Search Index", function() {

  var indexLists = inverted.indexList(texts, "a lord RING Wonderland dwarf");

  it("should return an array of the indices of the correct objects", function() {
    expect(inverted).toBeDefined();
    expect(indexLists).toBeDefined();
    expect(indexLists).not.toBe(null);
    expect(typeof indexLists).toEqual(typeof []);
    expect(indexLists).toEqual([
      [1, 3],
      [2],
      [2, 3],
      [0],
      [3]
    ]);
  });
});


var searchIndex = inverted.searchIndex(texts, "a lord RING Wonderland dwarf");

describe("Populate Index,", function() {

  it("should map string keys to the correct object", function() {

    expect(searchIndex).toBeDefined();
    expect(typeof searchIndex).toEqual(typeof JSON);
    expect(searchIndex).toContain([1, 3]);
    expect(searchIndex).toContain([2]);
    expect(searchIndex).toContain([2, 3]);
    expect(searchIndex).toContain([0]);
    expect(searchIndex).toContain("dwarf");
  });

  it("should create index on JSON file read", function() {

    var createIndex = inverted.createIndex(texts);

    expect(createIndex).toBeDefined();
    expect(createIndex).not.toBe(null);
    expect(typeof createIndex).toEqual(typeof []);
    expect(createIndex).not.toEqual('');
    expect(createIndex).toContain(['alice', 'in', 'wonderland']);
    expect(createIndex).toContain(['the', 'lord', 'of', 'the', 'rings', '', 'the', 'fellowship', 'of', 'the', 'ring', '']);
  });


});

describe("Read book data,", function() {

  var readTexts = inverted.readTexts(texts);

  it("should not be empty", function() {

    expect(readTexts).toBeDefined();
    expect(typeof readTexts).toEqual(typeof []);
    expect(readTexts).toContain("alice in wonderland");
    expect(readTexts).toContain("the lord of the rings: the fellowship of the ring.");
  });
});

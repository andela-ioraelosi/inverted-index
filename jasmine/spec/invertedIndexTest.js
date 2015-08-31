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
var indexLists = inverted.indexList(texts, "lord RING Wonderland dwarf");
var readTexts = inverted.readTexts(texts);
var createIndex = inverted.createIndex(texts);
var searchIndex = inverted.searchIndex(texts, "lord RING Wonderland dwarf");


describe("Read book data,", function() {
  

  it("should not be empty", function() {
    expect(inverted).toBeDefined();
    expect(readTexts).toBeDefined();
    expect(typeof readTexts).toEqual(typeof []);
    expect(readTexts).toContain("alice in wonderland");
    expect(readTexts).toContain("the lord of the rings: the fellowship of the ring.");
  });
});

describe("Populate Index,", function() {
  

  it("should create index on JSON file read", function() {
  
    expect(createIndex).toBeDefined();
    expect(createIndex).not.toBe(null);
    expect(typeof createIndex).toEqual(typeof []);
    expect(createIndex).not.toEqual('');
    expect(createIndex).toContain(['alice', 'in', 'wonderland']);
    expect(createIndex).toContain(['the', 'lord', 'of', 'the', 'rings', '', 'the', 'fellowship', 'of', 'the', 'ring', '']);
  });

  it("should map string keys to the correct object", function() {
  
  expect(searchIndex).toBeDefined();
    expect(searchIndex).not.toBe(null);
    expect(typeof searchIndex).toEqual(typeof []);
    expect(searchIndex).toContain(['lord', 2]);
    expect(searchIndex).toContain(['ring', 2]);
    expect(searchIndex).toContain(['wonderland', 0]);
    expect(searchIndex).toContain(['dwarf', 3]);
  });


});

describe("Search Index", function() {

it("should return an array of the indices of the correct objects", function() {
  
    expect(indexLists).toBeDefined();
    expect(indexLists).not.toBe(null);
    expect(typeof indexLists).toEqual(typeof []);
    expect(indexLists).toEqual([2, 2, 3, 0, 3]);
  });


});

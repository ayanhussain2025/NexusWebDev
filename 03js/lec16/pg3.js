//map in js
const map1= new Map();
// adding and updating the element
map1.set("name","Ayan Hussain");
map1.set(1,"hi there");
map1.set(22,43);
console.log(map1);
map1.set("name","Update the name"); //here name key already exist so name will update rather than create
console.log(map1);
//delete
map1.delete(22);
console.log(map1);
//.has()
console.log(map1.has("name"));
//.clear()
console.log(map1.clear());

//Another type to create map
const map2 = new Map([
    [4,"rohit"],
    ["rohan","mohan"],
    [20,82]
])
console.log(map2);

//iterate on map

for(let value of map2)
    console.log(value);

//using for each
console.log("hi");
map2.forEach(num=>console.log(num));
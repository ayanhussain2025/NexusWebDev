//Method 3 for creating object using the concept of class and object

class person{
    constructor(name , ag , gender)
    {
        this.name = name;
        this.age = ag;
        this.gender;
    }
}

p = new person("Ayan Hussain",22,"Male");
console.log(p);
console.log(p.name);
console.log(p.age);


p2 = new person("abhi" , 23 ," female"); //here we dont have to write the same code again and again
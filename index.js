function greet() {
    console.log("greeting");
}
()=>{
    console.log("greeting from arrow function");
}
console.log(" i am an arrow function");
greet();
//array
const names = ["Ali","ahmed","khan",".."];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

names.push("kashan")
console.log(names);
//start
names.unshift("kashan")
console.log(names);
// remove
names.shift("kashan");
console.log(names);
// counting total number of elements in array
console.log(names.length);
//array
const ages = [3,4,5,6,7,8,9]

const updateages = ages.map((age)=>{
    return age + 5;
})
console.log(updateages);
const firstnames = ["Ali","ahmed","khan"];

const updatenames = firstnames.map((name)=>{
    return firstnames+ " " + name;
})
console.log(updatenames);

const eligibleages = ages.filter((age)=>{
    if(age <= 10){  
        return age;
    }
    
}
)
console.log(eligibleages);
//objects
const laptop={ brand: "Dell", model: "XPS 13", price: 999.99,isnew: "false" };
console.log(laptop.price);
laptop.name = "Dell XPS 134";
console.log(laptop);

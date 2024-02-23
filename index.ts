//Exercise 1:

let person:string=('ali')

console.log(person)

//Exercise 2:

let message:string=('hello ali,would you like to learn some python today?')

console.log(message);

//Exercise 3:

let personname:string=('sam');

let lowercasename = personname.toLowerCase();

//Exercise 3:

let personname1:string=('sam')

let uppercase =personname1.toUpperCase();

//Exercise 3:

let words:string[]=personname.split("");

console.log(words)

let personname2:string=""

// for(let i = 0 ; i <words.length; i++ ){

//  personname2 +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() }

personname2 +=words[0].charAt(0).toUpperCase()+words[0].slice(0).toLowerCase()

console.log(personname2)

export{};

console.log(lowercasename)
console.log(uppercase)

//Exercise 4

console.log(`Albert Einstein once said,"Life is like riding a bicycle. To keep 
your balance, you must keep moving"`);

console.log(`"Sir Francis Bacon once said,"Knowledge is power.""`);

//Exercise 6:

let personNameWithWhiteSpace:string="\t Ali Bariz \n";

console.log("name with white space-->",personNameWithWhiteSpace)

let strippedname:string=personNameWithWhiteSpace.trim()

console.log("stripped name-->",strippedname)

//Exercise 7 and 8:

const addition= 5 + 3

console.log("result after addition",+ addition)

const subtraction= 16 - 8

console.log("result after subtraction", subtraction)

const multiplication= 2 * 4

console.log("result after multiplication", multiplication)

const division=16 / 2

console.log("result after division", division)

//Exercise 9:

let favouriteNumber:number=7

let message1:string=`My favourite number is ${favouriteNumber}`

console.log(message1)

//  exercise 10 adding comment:
// plz do not copy my code :) 

//Exercise 11:

let names:string[]=['Ali','Tom','Sam','Ahmad']

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

//Exercise 12:

let greetings:string[]=['Ali','Tom','Sam','Ahmad']

for(let name of names) {

    console.log(`hello ${name},hope you are doing great!`)
}

//Exercise 13:

let favouritetransportation:Array<[transport:string, brand:string]>=[]

favouritetransportation.push(["car","honda"])

favouritetransportation.push(["motorcycle","honda"])

favouritetransportation.push(["cycle","giant"])

// console.log(favouritetransportation)

favouritetransportation.forEach(([transport,brand])=> {
    console.log(`i would like to own a ${brand} ${transport}`)      }
    )

//Exercise 14:

let guestlist:Array<string>=[
"Ahmad",
"Sam",
"Tom",

]

guestlist.forEach((guestname) =>{

console.log(`hello ${guestname},i would like to invite you on dinner!`)
})

let beginningguest:string="Bill"

guestlist.unshift(beginningguest)

console.log(guestlist)

let middleguest:string="Zia khan"

let middleindex:number =Math.floor(guestlist.length/2)

guestlist.splice(middleindex,0,middleguest)

console.log(guestlist)

let endguest:string="Hamza"

guestlist.push(endguest)

console.log(guestlist)

console.log("new invitation message:")

for(let guest of guestlist)
{
console.log(`dear ${guest},i would like to invite you to have dinner with me`)
}

while(guestlist.length >2)
{
let removeguest = guestlist.pop()
console.log(`hello ${removeguest},I am sorry that i can't invite you to dinner
 because i have a small table`);

}

for(let guest of guestlist){

    console.log(`hello ${guest},you are invited for dinner`)
}

guestlist.pop()
guestlist.pop()
console.log(`guest list after dinner`, guestlist)

let traveldestination:string[]=["London","Madina","Dubai","Paris","New York City"]

console.log("Travel destinations in order:")

console.log(traveldestination)

console.log("\n Alphabetical order without modifying the actual list")

console.log([...traveldestination].sort())

console.log("\n Showing array in its original form:")
console.log(traveldestination)

console.log("\n reverse order without modifying the actual list")

console.log([...traveldestination].sort().reverse())

console.log("\n Showing array in its original form:")
console.log(traveldestination)

console.log("\n Reverse order")
traveldestination.reverse()
console.log(traveldestination)

console.log("\n Back to original")
traveldestination.reverse()
console.log(traveldestination)

console.log("\n Changed to alphabetical order")
traveldestination.sort()
console.log(traveldestination)

console.log("\n Reverse alphabetical order")
traveldestination.sort().reverse()
console.log(traveldestination)

let guestlist1:Array<string>=[
    "Ahmad",
    "Sam",
    "Tom",
    
    ]
    
    guestlist1.forEach((guestname) =>{
    
    console.log(`hello ${guestname},i would like to invite you on dinner!`)
    })

    console.log("\n printing message indicating number of guests")

    console.log(`We have finally invited ${guestlist1}`)

    const countries:string[]=["Japan","USA","Scotland","Italy","Turkey"]

    console.log("list of countries:")

    for(let country of countries){

        console.log(country)
    }

const car=
{
    name:"Civic",
    price:8000000,
    description:"It is avery nice car which runs very fast"
}

let cars:Array <typeof car>=[];

cars.push(car);
cars.push({
name:"Corolla",
price:6000000,
description:"It is a good car made by toyota company"})

let car3=
{
    name:"City",
    price:7000000,
    description:"It is avery nice car which runs very fast made by Honda"
}

cars.push(car3)
// console.log(cars)

cars.push({name:"Audi",price:60000000,description:
"it is a luxury and an expensive car"})
    



function displaycars(cars:Array<typeof car>)
{
  for(let i of cars){
  console.log(`title:${i.name}
  price:${i.price}
  description:${i.description}
  ____________\n`);
}
}

displaycars(cars);

function createfruit(name:string,color:string,
    taste:string){
return{
       name,
       color,
       taste,
}
};

const fruits=[
         createfruit("Apple","Red","Sweet"),
         createfruit("Banana","Yellow","Sweet"),
         createfruit("Kiwi","Green","Sweet/Sour"),
         createfruit("Cherry","Red","Sweet"),
         createfruit("Mango","Yellow","Sweet"),
];

  const invalidindex = 10; 
//   there are only 5 Elements,so this will cause an error
console.log(`fruit in index ${invalidindex}:`,fruits
[invalidindex]);

fruits.forEach((fruit)=>{
       console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`)
})


let car1 = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car1 == 'subaru') 

console.log("Is car == 'honda'? I predict False.")
console.log(car1 == 'honda') //False

console.log("Is car === 'subaru'? I predict True.")
console.log(car1 === 'subaru') //True

console.log("Is car === 'Subaru'? I predict False.")
console.log(car1 === 'Subaru') //False

console.log("Is car !== 'toyota'? I predict True.")
console.log(car1 !== 'toyota')  //True

console.log("Is car !== 'subaru'? I predict False.")
console.log(car1 !== 'subaru')  //False

console.log("Is car !== 'suzuki'? I predict True.")
console.log(car1 !== 'suzuki') //True

console.log("Is car != 'subaru'? I predict False.")
console.log(car1 != 'subaru') //False

let Age = 25;
console.log("Is Age > 18? I predict True.");
console.log(Age > 18); //True

console.log("Is Age > 18? I predict False.");
console.log(Age < 21) //False

//exercise 24:

//exercise 24:

//test for equallity and inequality
const str1:string ="Hello!"
const str2:string ="hello!"
console.log(str1 === str2);//false
console.log(str1 !== str2);//true


//test using lower case function
const text1:string = "Hello World"
const text2:string = "hello World"
console.log(text1.toLowerCase() === text2);//true

/*Numerical tests involving equality and inequality, 
greater than and less than, greater than or equal to,
 and less than or equal to*/
 const num1:number = 10;
 const num2:number = 5;
 console.log(num1 === num2); //false
 console.log(num1 !== num2);//true
 console.log(num1 > num2);//true
 console.log(num1 < num2);//false
 console.log(num1 >= num2);//false
 console.log(num1 <= num2);//true

 //test using "and" or "or" operators
 const x:number = 5;
 const y:number = 10;
 const z:number = 15;

console.log(x < y && y < z);//true,both conditions are true
console.log(x < y || y > z);//true,atleast one is true
console.log(x < y && y < z);//false,both conditions are false
console.log(x < y || y > z);//false,both conditions are false

//test whether an item is in an array
const fruits1:string[] =['Apple','Banana','Orange','Grape'];

console.log(fruits1.includes('Banana'))//true
console.log(fruits1.includes('Lychee'))//false

//test whether an item is not in an array

const colour:string[]=['red','blue','green','yellow']

console.log(!colour.includes('black'))//true
console.log(!colour.includes('red'))//false

//1st version(if block)

let alien_Color:string ='green';

if (alien_Color === 'green'){
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}else{
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
}

//version 2 (else block)

console.log('\n Where alien color is Green:')

 alien_Color='green';

if(alien_Color  === 'green'){
   console.log('Congratulations! You just earned 5 points for shooting the alien.');
}else{
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
}

console.log('Where alien color is Yellow:')
alien_Color='yellow';

if(alien_Color == 'green'){

    console.log('Congratulations! You just earned 5 points.');
}
else if(alien_Color ==='yellow'){
    console.log('Congratulations! You just earned 10 points.');
}
else if(alien_Color ==='red'){
    console.log('Congratulations! You just earned 15 points.');
}
else('Unknown alien color.')

//2nd version

console.log('Where alien color is Red:')

alien_Color ='Red'

if(alien_Color == 'green'){

    console.log('Congratulations! You just earned 5 points.');
}
else if(alien_Color ==='yellow'){
    console.log('Congratulations! You just earned 10 points.');
}
else if(alien_Color ==='Red'){
    console.log('Congratulations! You just earned 15 points.');
}
else('Unknown alien color.')

let age:number = 25 ;

if(age < 2){
    console.log(`Age is ${age},The person is an baby.`)
}else if(age < 4){
    console.log(`Age is ${age},The person is an toddler.`)
}else if(age < 13){
    console.log(`Age is ${age},The person is an kid.`)
}else if(age < 20){
    console.log(`Age is ${age},The person is an teenager.`)
}else if(age < 65){
    console.log(`Age is ${age},The person is an adult.`)
}else    
    console.log(`Age is ${age},The person is an elder`)

//test with differint age
let age1:number = 12 ;

    if(age1 < 2){
        console.log(`Age is ${age1},The person is an baby.`)
    }else if(age1 < 4){
        console.log(`Age is ${age1},The person is an toddler.`)
    }else if(age1 < 13){
        console.log(`Age is ${age1},The person is an kid.`)
    }else if(age1 < 20){
        console.log(`Age is ${age1},The person is an teenager.`)
    }else if(age1 < 65){
        console.log(`Age is ${age1},The person is an adult.`)
    }else    
        console.log(`Age is ${age1},The person is an elder`)

const favoriteFruits:string[] = ["Apple","Strawberry","Watermelon"];

//using if statement.

if(favoriteFruits.includes("Apple")){
    console.log("I like Apples!")
}

if(favoriteFruits.includes("Strawberry")){
    console.log("I like Strawberry!")
}

if(favoriteFruits.includes("Watermelon")){
    console.log("I like Watermelons!")
}
if(favoriteFruits.includes("Pomegranate")){
    console.log("pomegranate is a good fruit!")
}
if(favoriteFruits.includes("Cherry")){
    console.log("Cherry is yummy!")
}

//exercise 31:

//non empty array
const username:string[]=['admin','Bill','Tom','Sam','Alex'];

function greetusers():void {
    for (const i in username){
        if(username[i].toLowerCase()==='admin'){
           console.log(`hello admin,would you like to see a status report?`)
        } else {
            console.log(`Hello ${username[i]},thank you for logging in again.`);
       }
    }
}
greetusers()

//functional case

let usernames:string[]=['admin','Bill','Tom','Sam','Alex'];

function greetUsers(usernames:string[]):void{
    if(usernames.length === 0){
        console.log('We need to find some users!');
        return;
    }
}

console.log('For non empty username:\n')
greetUsers(username);

for (const i in username){
    if(username[i].toLowerCase()==='admin'){
       console.log(`hello admin,would you like to see a status report?`)
    } else {
        console.log(`Hello ${username[i]},thank you for logging in again.`);
   }
}

usernames=[];

console.log('\n for empty username:\n')
greetUsers(usernames)

//excersise 32.

const current_users:string[]=["Ali","Ahmad","Sam","Alex","Mark","Jason"]

const new_users:string[]=["Ali","Akram","Sam","Amir","Babar"]

function checkUsernames(current_users : string[],new_users : string[]):void
{
    const lowercasedCurrentUser = current_users.map (user => user.toLowerCase());

    for (const newUser of new_users){
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUser.includes(lowercasedNewUser)){
            console.log(`Username "${newUser}" is already taken. Please enter a new username`);
        }else {
            console.log(`Username "${newUser}"is available.`);
        }
    }
}

//exercise 33:
checkUsernames(current_users,new_users);

const numbers:number[]=[1,2,3,4,5,6,7,8,9];

for (const number of numbers){
    let ordinal:string;
    if (number === 1){
        ordinal="st";
    } else if (number === 2){
        ordinal = "nd";
    } else if (number === 3){
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number} ${ordinal}`)
    } 

    //Exercise 34:

    const FavouritePizzas =["Pepperoni","Fajita","Malai boti"];

    console.log("My favourite pizzas are:");
    for (let i = 0; i < FavouritePizzas.length;i++){
        console.log(FavouritePizzas[i]);
    }

    //print a sentece for each pizza
console.log("\n I like these pizzas:")
for (let i = 0; i < FavouritePizzas.length;i++){
    console.log(`I like ${FavouritePizzas[i]} pizza.`);
}

//additional sentence that i really like pizza
console.log("I really love pizza!")

//Exercise 35:

const Animals:string[] = ['Dog','Cat','Rabbit']

//Printing the names of each animal using for loop

console.log("List of animals:")
for (const animal of Animals){
    console.log(animal)
}

//printing a statement for each animal.
console.log("\n Statement about each animal:")
for(const animal of Animals){
    if(animal === 'Dog'){
        console.log(`A ${animal} is a great pet because it is very playful.`);
    }
    else if (animal === "Cat"){
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === "Rabbit"){
        console.log(`A ${animal} is a great pet,they are really cute.`);
    }
}

//common characteristics
console.log("\n What these pets have in common:");
console.log("Any of these animals would make agreat pet!");    


//Exercise 36:

const make_shirt = (size:string, message:string):string =>
{
    console.log(`Size: ${size},Message: ${message}`)
    return `Size: ${size},Message: '${message}'`;
}

//call the function
make_shirt("Medium","I am a coder")

//Exercise 37:

function MakeShirt(size:string = "Large",message:string="I love Typescript"):void
{
   return console.log(`Size: ${size},Message: ${message}`)
}

//Large shirt with default message
MakeShirt();//output Size:Large,Message:"I love typescript"

//Medium shirt with default message
MakeShirt("Medium");

//custom shirt with different message
MakeShirt("Small","Hello World")

//Exercise 38:

function describe_city(city:string,country:string = "Unknown country"):void
{
console.log(`${city} is in ${country}`)
}

//calling the function for three different cities
describe_city("Karachi","Pakistan");
describe_city("London","England");
describe_city("Dubai");//default country will apply here

//Exercise 39:

const city_country=(city:string,country:string):string =>
{
    return `${city},${country}`;
}

//test the function with three city-country pairs
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Beijing","China"));
console.log(city_country("Medina","Saudi Arabia"));


//Exercise 40:

function make_Album(artist:string, title:string, tracks?:number):
{artist:string; title:string; tracks?:number} 

{const album ={
    artist,
    title,
    tracks
};
   if (tracks !==undefined){
    album.tracks = tracks
   }
   return album;
}

//Example to call function

const album1 = make_Album('Ali zafar','Masty')
const album2 = make_Album('artist 2','Album2',5)
const album3 = make_Album('Artist 3','Album3',10)

console.log(album1)
console.log(album2)
console.log(album3)


//Exercise 41:

const magicianNames:string[] = ["Harry Potter","Professor Albus Dumbledor","Hermione Granger","David Copperfield","Ron Weasley"]

function show_magician(magicians:string[]):void
{
    for (const magician of magicians){
        console.log(magician);
    }
}


//Exercise 42:

const magicianNames1:string[]=["Harry Potter","David Copperfield","Ron Weasley","Hermione Granger","Professor Albus Dumbledor"]

function make_great(magicians : string[]):string[]
{
    const Greatmagicians:string[]= magicians.map (magician => `The Great ${magician}`)
        return Greatmagicians;
}

//modify the array to add "The Great"to each magician's name
const GreatMagiciansName:string[]=make_great(magicianNames1)

//call the function to show original name's
console.log("Original magicians:")
show_magician(magicianNames1)

//functin with great magicians name
console.log("\n Great Magicians:")
show_magician(GreatMagiciansName)


//Exercise 44:

function make_sandwich(...items :string[]): void
{
   console.log("Sandwich Summary:");
   if (items.length === 0){
    console.log("    -You ordered an empty sandwich,please add some items.");
   }else {
    items.forEach((item,index) => {
        console.log(`   ${index + 1} . ${item}`)
    })
   }
   console.log("\n")
}

//call the function with different numbers of arguements
make_sandwich("Chicken","Tomato","Lettuce","Mayonnaise")
make_sandwich("Pepperoni","Tomato","Mayonnaise")
make_sandwich("Turkey","Cheese",)


//Exercise 45:

function createcar(Manufacturer:string,carname:string ,... properties:
    [string,any][]):any
{
const car:any ={
    Manufacturer,
    carname,
};
for (const [key,value] of properties){
    car[key] = value
}
return car;
}

//Example
const MyCar: string = createcar("Honda","City",["color","Black"],["Optional feature",
"Sunroof"]);

console.log(MyCar);

//All 45 assignments done.Alhamdulillah:)

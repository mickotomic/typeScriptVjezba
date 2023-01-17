console.log('log');

//let ime: string = "Milorad";
let ime1;
ime1 = true;

ime1 = "100";
console.log(ime1);


//let a: unknown = 100;
//a = '100' as string;


//let x: never;
//x = 'something';
//console.log(a);

const arr: string[] = ["1", "2", "3"];
console.log(arr);



let personData : [string, number, boolean?];
personData = ["Milorad", 30, true];
console.log(personData);

type personT = {
	name: string;
	age: number;
	occupation?: string;
}

const person: personT = { name: "John", age: 30, occupation: "student"};
console.log(person);

const person2: personT = { name: "Bane", age: 30 };
console.log(person2);

interface IRectangle {
    height: number,
    width: number
  }
  
const rectangle: IRectangle = { height: 30, width: 50 };
console.log(rectangle);
  
// let myVar: string | number;
// myVar = "Micko";
// //myVar.toUpperCase();
// //console.log(myVar);

// if (typeof myVar === "string") {
//     console.log(myVar.toUpperCase().split("").join("^"));
// }
// // if (typeof myVar === "number") {
// //     console.log(myVar.toFixed(2));
// //  }
let myVar: string | number;

myVar = 4;

if(typeof myVar === "number") {
    console.log(myVar.toFixed(2));
}

myVar = "Test";

if(typeof myVar === "string") {
    console.log(myVar.toLocaleUpperCase());
}

interface ErrorHandlingI { success: boolean; error?: { message: string }; }
interface ArtistsDataI { artists: { name: string }[]; }

type ArtistsResponseT = ArtistsDataI & ErrorHandlingI;
function getData(): ArtistsResponseT {
    const artists: ArtistsDataI = { artists: [{ name: "Micko" }, { name: "Miroslav" }] };
    const err: ErrorHandlingI = {
        success: false,
        error: { message: "Doslo je do greske" }
    };
    if (err) { 
        return err as ArtistsResponseT;
    }
    return artists as ArtistsResponseT;
}  
console.log(getData()); 

function multiply (first: string, second: string): string {
	return first.concat(second);
} 
console.log(multiply("MICKO"," TOMIC").split("").join("&")); 

function multiply2 (first: number, second: number): number {
	return first* second;
} 
console.log(multiply2(6, 7)); 

class Human {
	public name: string = "Branimir";
}

const human = new Human();
human.name = "Someone else"; 

class Human2 {
	protected name: string = "Branimir";

	public setName() {
		this.name = "Someone Else"; // ovo je ok
    }
}

class Person extends Human {
	public setPersonName() {
		this.name = "Someone else";
}
}

class Human3 {
	private name: string = "Branimir";

	public setName() {
		this.name = "Someone Else"; // jedino ovo je ok, klasa koja nasledi Human ne moze primjeniti name property
    }
}

type peersonT = {
	name: string;
	age: number;
}
const person3: Partial<personT> = {name: "Branimir"};


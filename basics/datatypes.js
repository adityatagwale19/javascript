/**
 * Primitive data types - Call by Value( does not replace the variable value give it new memory location)
 * - Number
 * - BigInt
 * - Boolean
 * - String
 * - Null       => Empty or unknown value
 * - Undefined  => Varible is declared but not assign value e.g let x;
 * - Symbol
 */

// Number
let age = 21;
// console.log( age );
// console.log( typeof( age ) );

/**
 * Conversions
 * 
 * Convert string to number
 */
let str = "100";
let num = Number( str );
let num2 = parseInt( num );
let num3 = parseFloat( 3.14 );

let display = { num, num2, num3 };

console.table( display );

// Convert string to number by all numeric operations (+,-,*,/)
let str2 = "5";
// console.log( str/str2 );

// Convert boolean to number 
let bool = true;
// console.log( Number( bool ) );  // ( true is 1, False is 0 )

let test = true;
let stringToNumber = Number( test );
// console.log( stringToNumber );
// console.log( typeof stringToNumber );
/**
 * "01abc" => NaN ( but type of NaN is number)
 *  null   => 0
 *  undefined => NaN
 */

/**
 * Boolean
 * 
 * convert number to boolean
 */

let number = 0;
// let toBoolean = Boolean( number );

// Convert string to boolean
let strValue = "aditya";
// console.log( Boolean( strValue ) );   // true  (Non-empty strings are true), "" => false

/**
 * String
 * 
 * Convert number to string
 */

let value = 100;
let toString = value.toString();
// console.log( String( value ) );
// console.log( toString );

let quote = "Life has no \"CTRL Z\"";   // The escape sequence \" inserts duoble or single quotes in the string
// console.log( quote );

/**
 * String methods
 * 
 * string length
 */

let alphabets = "abcdefghijklmnopqrstuvwxyz";
// console.log( alphabets.length );

// string slice()  => split the string form 1st position to last position and returns the extracted parts in new string 
console.log( alphabets.slice( 10, 20 ) );

// string toUpperCase() => convert the string into uppercase
console.log( alphabets.toUpperCase() );

// string concat() => concat or join the two or more strings
let name = "Aditya Rajendra";
let surName = "Tagwale";
// let fullName = name + " " + surName;
let fullName = name.concat( " ", surName );
// console.log( fullName );

// string trim() => removes all the whitespaces from both side of the string
let string = "            Hello World!          ";
console.log( string );
// console.log( string.trim() );
// console.log( string.trimStart() );
// console.log( string.trimEnd() );
// console.log( string.replace( 'World!', 'Aditya' ) );
// console.log( name.split(" ") );     // split() => split a string into an array of substrings

// string indexOf() => returns index(position) of the first occurence of the string
let sentence = "India is my country. And I love my country";
// console.log( sentence.indexOf( 'country' ) );
// console.log( sentence.lastIndexOf( 'country' ) );
// console.log( sentence.search(/country/) );
// console.log( sentence.match(/my/g) );   // g is used for global match

// string template literals(``)
let country = 'India';
let state = 'Maharashtra';
let address = `I live in ${state}, ${country}`;  //template literals used in html template, use variables in string 
console.log( address );



/**
 * Non-primitve datatypes
 * 
 * Objects( array, functions, dates, etc.)
 */
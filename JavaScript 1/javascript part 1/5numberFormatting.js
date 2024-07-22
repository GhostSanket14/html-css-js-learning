// toLocaleString(); <- it returns string with language sensitive representation of this number.
// .toLocaleString(locale, {optional}); 
// locale - specify that language. {optional} object with formatting options. Default is browser settings.

let num=123456;
let ans=num.toLocaleString("en-US"); 
console.log(ans); // OP- 123,456    USA has comma after every 3rd number

// we can also use this to format currency.
let money=123654;
let moneyUS=money.toLocaleString("en-US",{style:"currency", currency:"USD"});
console.log(moneyUS); // OP- $123,654.00

// There are also scientific et. formatting options. User later as u like.
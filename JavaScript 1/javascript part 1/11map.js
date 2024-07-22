// map - it hohlds key value pairs.

const gunPrice=new Map([ ["AK",25000],["TC",35000],["M4",60000]]);

gunPrice.forEach( (value, key) => { 
        console.log(`${key} value is $${value}`);
 } );

 let cart1= gunPrice.get("AK");
 console.log("AK price is "+cart1); // To get a perticular value

 console.log( gunPrice.has("TC") ); // To check if a key-value exist.

 gunPrice.set("Scar",78000); // To set a value.
 console.log(gunPrice.get("Scar"));

gunPrice.delete("M4");
console.log(gunPrice.get("M4"));
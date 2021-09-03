// first array
const arr1 = [
    ["id","name","sex"],
    ["1","John","M"],
    ["2","Boby","M"],
    ["3","Doe","M"],
]
// second array
var arr2 = [
    ["id","age"],
    ["1","15"],
    ["2","22"],
    ["3","33"],
]
 
// Array-Destructuring and make first row as keyArr and rest all to valErr
const [keyArr1, ...valArr1] = arr1;
const [keyArr2, ...valArr2] = arr2;

// Iterate through the valArr
const newArr1 = valArr1.map(values => {
    // make empty object
    let obj = {};
    // Iterate through the values and assign each value from values to specific key
    values.forEach((val, i) => {
        obj[keyArr1[i]] = val // append into object
    });
    //return the object
    return obj;
});
 
const newArr2 = valArr2.map(values => {
    // make empty object
    let obj = {};
    // Iterate through the values and assign each value from values to specific key
    values.forEach((val, i) => {
        obj[keyArr2[i]] = val // append into object
    });
    //return the object
    return obj;
});
 
const mergedArray = newArr1.map(item => {
    const obj = newArr2.find(ob => ob.id === item.id);
    return {...item, ...obj};
});
 
var ans = JSON.stringify(mergedArray);
console.log(ans);



/* Expected Output Array
----------------------
[
	{
	  "id": "1",
	  "name": "John",
	  "sex": "M",
	  "age": "15",
	},
	
	{
	  "id": "2",
	  "name": "Boby",
	  "sex": "M",
  	  "age": "22",

	},	
	{
	  "id": "3",
	  "name": "Doe",
	  "sex": "M",
	  "age": "33",

	}
]*/
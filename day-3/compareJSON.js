let obj1 = {name: "person1",age:5}
let obj2 = {age:5 ,name: "person1",}
let count = 0;
let mismatch =0;
let isequal = false;
 if(Object.keys(obj1).length==Object.keys(obj2).length){
     for(let key in obj1){
         if(obj1[key]==obj2[key]){
         count++;
         }
         else{
             mismatch++
         }
     }
   }
 
   else{
         console.log("No of object key is different")
   }
   if(Object.keys(obj1).length == count){
     console.log("all properties are same")
   }
   else if(mismatch > 0 ){
    console.log(mismatch +" object key values is diffrent")
   }
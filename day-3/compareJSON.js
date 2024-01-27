let obj1 = {name: "person1",age:5}
let obj2 = {age:5,name: "person1"}
 if(Object.keys(obj1).length==Object.keys(obj2).length){
     for(let key in obj1){
         if(obj1[key]==obj2[key]){
         isequal=true;
         }
         else{
             console.log("type of property different")
             isequal=false;
         }
     }
   }
 
   else{
         console.log("No of property different")
         isequal=false;
   }
   if(isequal==true){
     console.log("all properties are same")
   }
# DAY-1 Task
 - [Difference between HTTP 1.1 and HTTP 2](#Difference-between-HTTP-1.1-and-HTTP-2-)
 - [Object and Internal representation in javascript](#Object-and-Internal-representation-in-javascript)
# Difference between HTTP 1.1 and HTTP 2
<img src="https://media.licdn.com/dms/image/C5612AQEj04Vipr3Plg/article-cover_image-shrink_720_1280/0/1639909982356?e=2147483647&v=beta&t=Re-KqiK8icaKhsEuNosquEtC24M5ATMdplgQAFY3WIY" height ="500px"/>

### 1) Plain Text vs Binary Format:

    I. HTTP 1.1: Works with `plain text` to transfer client data.

    II. HTTP 2: Utilizes a `binary format` and employs the `SPDY protocol` for transferring client data.

### 2) Compression:

    I. HTTP 1.1: Uses `self-compression`.

    II. HTTP 2: Implements compression through the `HPACK protocol`.

### 3) Connection Handling:

    I. HTTP 1.1: Requires a TCP connection for both server and client, and this connection remains `alive until the data transfer is complete`.

    II. HTTP 2: Utilizes a `single TCP connection` for improved efficiency.

### 4) Request-Response Handling:

    I. HTTP 1.1: The client's HTTP request waits for the `first HTTP response from the server before sending subsequent inline HTTP requests`.

    II. HTTP 2: `Allows the client to continuously send HTTP requests`, with responses arriving from the server asynchronously.

---
# Object and Internal representation in javascript
<img src="https://v8.dev/_img/fast-properties/jsobject.png" >

### Object:
- Object is most importatnt datatype in javascript. it's not like primitive data type.
- Object is non-primitive datatype.
- Object is have ralation keyvalue of property.
- object can create ways of Object() method,inialize,literal Syntax.


### Creating Objact by method

#### Syntax:
```
datatype Objectname = new Object(); //Creating Object using Object() method
objectname.ObjectPropertykey=ObjectPropertykeyValue; // Initializing object property key ObjectPropertykeyValue
objectname.ObjectPropertykey // calling object 
objectname.[ObjectPropertykey] // calling object 
objectname.["ObjectPropertykey"] // calling object
```

- laptop is single object but it holding model,prize,RAM specification,processor specification.
- Now we create object of laptop properties;
- like (I.e):
#### **code:**
```
let laptop = new object(){
  laptop.brand = "lenovo",
  laptop.model = "E41-25",
  laptop.RAM   = "4GB",
  laptop.processor = "AMD"
  laptop.allSpec = function() {
    return this.brand +" "+this.model+" "+this.RAM +" "+this.processor
    }
};
console.log(laptop.allSpec) //using fuction print all ObjectPropertykeyValue in single lineusing this keyword
console.log(laptop.brand) //single output
```

##### OUTPUT:
```
lenovo E41-24 4GB AMD
lenovo
```

### Javascript Object methods
+ javascript object property member of have key and value of object property
  - Instance properties
  - Static method
  - Instance method
+ Instance properties:
  - Instance property is a property it have new copy of every new instance.
  - Constructor method
+ Static method:
   - Method call itself it's static method
+ instance method 
   - Method called instance  of data object it call innstance method

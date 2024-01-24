# DAY2 Task

## Document vs Window

<img src="https://miro.medium.com/v2/resize:fit:809/1*gRMkpPF9o_hAPGS4iJKCDQ.png"/>

- [Window](#Window-)

- [document](#Document-)

### Window:
- Wndow object work is cover almost every  browser 
- Window represent browser particulor window or tab.
- Global javascript variable and method are property member of browser
- Global javascript object is windows property object.
- Global javascript function is method of window.
- Most of the window object are representation of particular tab but some window objects are global.

#### Example for window global methods and Events
```
window.resizeTO() //global method
//window.innerWidth and window.innerWidth this determine window size
window.innerHeight - window hieght in pixel //global Event
window.innerWidth  - window width in pixel //global Event

```

- Window key word not manditory to use in for window instance properties, instance methods, event. Because window is global oject

#### Example for window global methods and Events
```
//method1
window.alert("your accessing window alert object")
//method2
alert("your accessing window alert object")//
```
#### Important window object are

```
window.close()
window.alert()
```

 ## Document:
 
- Document is property of HTML.
- Document object and method it member of window.
- Document object can value change HTML element.
  
#### example:
```
documennt.getElementByID().innerHTML 
//getElementByID is method of Documect
//innerHTML is property of Documect

```

class person{
  constructor(firstName,lastName,gender,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
  }
  
  personDetails(){
      return "Name:"+this.firstName+this.lastName+" age:"+this.age+" gender:"+this.gender
  }
  }
  let mullai =new person("mullai","venthan","male",24)
  let vasanth = new person("vasanth","ravi","male",25)
  console.log(mullai.personDetails())
  console.log(vasanth.personDetails())
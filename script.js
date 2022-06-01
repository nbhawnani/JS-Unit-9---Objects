/*
// 1st Way using new Object() method:
let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;


//console.log(myCar)


// 2nd Way: By adding properties and values in curly braces
const myAddress = {
streetnumber: 23,
street: 'Red Street',
city: 'Princeton',
getLocation:function(){
  console.log('This is an address:\n'+myAddress.streetnumber + " " +myAddress.street + "," + myAddress.city )
}
};

// Accessing object properties via "." and via "[]" methods:
//console.log(myAddress,myAddress.street, myAddress["city"] )

//Invoking the method inside the object
//myAddress.getLocation();


// Using for ... in Loop to access the property/method names and retrieving  the property/method values using dot or square notation:

for (const propertyname in myAddress){
console.log(propertyname + '==>' + myAddress[propertyname]);
}
*/

const Person={
  fname:'John',
  lname:'Harry',
  age:16,
  hobbies:['reading','painting','playing guitar'],
  canDrive:false,
  isMinor:function(){
    if (Person.age<18){
      return(Person.fname + ' is a minor');
    }else{
      return(Person.fname + ' is an adult');
    }
  },
  getFullName:function(){
    return (Person.fname + " " + this.lname)
  },
  getCanDrive:function(){
    if (Person.canDrive){
      return('can drive')
    }else{
      return('cannot drive')
    }
  }
  
}

//console.log(Person.getFullName());
//console.log(Person.isMinor());

for (let prop in Person){
  //console.log(prop,Person[prop]);
}

console.log(Person.getFullName() + " " + Person.getCanDrive())


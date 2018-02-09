var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.addToList = function() {
  var list =   document.getElementById("people");
  var li = document.createElement('li');
  li.innerHTML = this.lastName + ", " + this.firstName;
  list.appendChild(li);  
}

Person.prototype.logPerson = function() {
  console.log(this.firstName + " " + this.lastName + " created");
}

// we'll write our code here

// ^^^^^^^^^^^^^^^^^^^^^^^^^
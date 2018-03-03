// making arrays

// empty array
// array class and constructor
var myArr = new Array();

var myArr2 = [];

// build an array with a certain size
// values will be empty

// will make an array of 100 alocated spaces
var myNewArr = new Array(100);

// will make an array of 5 alocated spaces
var myNewArr2 = [,,,,];

// set the array length to 8
var array =  []
array.length = 8;

// make a new array with values
var arr = ['you', 'are', 'awesomesauce']

// length of the array
arr.length

// index
var superArr = ['rock', 'hart', 'black']
supperArr[0]

// insert
var people = [];

// insert at the end
people.push('Tom Hanks', 'Lucas')

// inserts at the begining
people.unshift('Jay Paul')

// remove

// mutable vs immutable

people.pop
people.shift
// puts a hole
delete people[2]

// doesn't change
people.slice(2)

// changes the original array
people.splice(2)

// iterate
var nums = [2, 7, 3, 6, 1, 4]

nums.forEach(function(item, index) {
  console.log(item)
})

nums.map(function(item, index) {
  console.log(item + 1)
  return item + 1
})

nums.filter(function (item, index) {
  console.log(index % 2 == 0)
  return index % 2 == 0
})

    // how you should use filter
    ['hello', 0, '1', true, 2, 'world'].filter(Boolean)

for( var i = 0; i < nums.length; i++) {
  console.log(nums[i])
}

// checking data types

typeof []
typeof 0
typeof true 
Array.isArray([]);
Boolean.isArray([]);

// misc functions
people.toString
people.join()
people.reverse()
people.sort()
people.find()
people.indexOf()
people.includes()
people.concat()
people.includes()
people.fill()

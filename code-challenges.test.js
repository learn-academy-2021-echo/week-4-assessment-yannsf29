 // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("Shuffles", () => {

    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]


        it("removes the first item from the array and shuffles the remaining content", () => {



          expect(Shuffles(colors1)).toEqual(["yellow", "blue", "pink", "green"])
          expect(Shuffles(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])


        })
      })

// b) Create the function that makes the test pass.

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  var colors1 = ["purple", "blue", "green", "yellow", "pink"]
  shuffle(colors1);
//   console.log(colors1);



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


describe("numbers", () => {

    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    var nums2 = [109, 5, 9, 67, 8, 24]

        it("takes an array of numbers and returns an array of the minimum and maximum numbers", () => {



          expect(numbers(nums1)).toEqual([-8, 90])
          expect(numbers(nums2)).toEqual([5, 109])


        })
      })





// b) Create the function that makes the test pass.

var arr = [2, 3, 5, 10, 2, -9, 3];

alert("Max value is " + arrayMaxMin(arr, "Max"));
alert("Min value is " + arrayMaxMin(arr, "Min"));

function arrayMaxMin(array, selector) {

  var val = array[0];   // variable to hold the current max/min value.

  for (var i = 1; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] < val) {
        val = array[i];
      }
    } else if (selector == "Max") {
      if (array[i] > val) {
        val = array[i];
      }
    }

  }
  return val;
}

console.log (var arr)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.



describe("Noduplicate", () => {

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]

        it("takes in two arrays as arguments and returns one array with no duplicate values", () => {



          expect(Noduplicate(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])



        })
      })



// b) Create the function that makes the test pass.


var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
let array3 = [];
for(let i=0;i<testArray1.length;i++){
  if(array3.indexOf(testArray1[i]) == -1)
     array3.push(testArray1[i])
}
for(let i=0;i<testArray2.length;i++){
  if(array3.indexOf(testArray2[i]) == -1)
     array3.push(testArray2[i])
}

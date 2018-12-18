# JavaScript Note

## Values, Types and Operators

### Number`s

* Numbers take `64` bits of space. Large numbers can be expressed using `e`. eg `28e10` expresses `280000000000`.
* There are two special numbers : `Infinity` and `NaN`
* Any operation with `Infinity` produces `Infinity` other than `Infinity - Infinity` which produces `NaN`.

### Strings

* Special characters are (`Newline`, `Tab`, `'`, `"`, \`). To use any of them in a string we need to use backslash (`\`) operator. eg (`\n`, `\t`, `\'`, `\"`, \\`)
* To include backslash itself inside a string, we need to push a backslash before backslash. eg: `\\`
* To concatenate string use `+` operator.
* New line can be included without typing `\n` if the string is enclosed inside backticks (`).
* Backticks (\`) can also be used to embed other values:
  Using `${}` inside string enclosed by backticks will produse embedded result of the operation mesioned inside `${}`.

### Unary Operators

* The `typeof` operator produces a string value naming the type of the value given to it:

  ```javascript
  console.log(typeof 4.5);
  // → number
  ```

* The minus operator `-` can also used as unary operator:

  ```javascript
  console.log(-(10-2));
  // -> -8
  ```

### Boolean Values

* There are two values : `true`, `false`.
* Comparing two numbers or strings produces boolean values as output:

  ```javascript
  console.log(3 > 2)
  // → true
  console.log(3 < 2)
  // → false
  console.log("Aardvark" < "Zoroaster")
  // → true
  ```

* In case of string comparison, JavaScript matches the unicodes of the characters one by one form left to right.
* There is only one value in JavaScript that is not equal to itself:

  ```javascript
  console.log(NaN == NaN);
  // -> false
  ```

### Logical operators

* `&&` (AND), `||` (OR) are binary logical operators that perform logical and, or operations.
* `!` (NOT) is a unary operatror.
* There is a ternary operator called **conditional operator**.

  ```javascript
  console.log(true ? 1 : 2);
  // → 1
  console.log(false ? 1 : 2);
  // → 2
  ```

  The value on the left of the question mark “picks” which of the other two values will come out.

### Empty Values

* There are two special values `null` and `undefined` that are used to denote absense of meaningful values. The difference in meaning beween them is not important.
* `Nan` is used to denote result of nonsensical operation.

### Automatic Type Conversion

* When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what we want or expect. This is called **type coercion**.

  ```javascript
  console.log(8 * null)
  // → 0
  console.log("5" - 1)
  // → 4
  console.log("5" + 1)
  // → 51
  console.log("five" * 2)
  // → NaN
  console.log(false == 0)
  // → true
  ```

* When comparing two different type of values using comparison operators JavaScript automatically convert one type to another.
* To compare without performing type conversion we need to use `===` or `!==` operator.

### Short-Circuiting of Logical Operators

* `&&` and `||` operators handle operands of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the righthand value.
* If we have a value that might me empty, we can put `||` after it with a replacement value. If the initial value can be converted to `false`, we will get the replacement instead.

  ```javascript
  console.log(null || "user")
  // → user
  console.log("Agnes" || "user")
  // → Agnes
  ```

  * The rules for converting strings and numbers to Boolean values state that `0`, `NaN`, `null` and the empty string `""` count as `false`, while all the other values count as `true`.

* `&&` operator works similerly but other way around. When the value to its left is something that converts to `false`, it returns that value, and otherwise it returns the value on its right.

___
___

## Program Structure

### Expression & Statements

* Expressions are fragments of code that produces a value.
* An expression between parenthesis is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.
* If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements
* The simplest kind of statement is an expression with a semicolon after it.
* **An Expression produces a value**
* **A Statement performs a certain  operation that will change the state of the machine for future statements**.
* **A collection of statements is called a program**.

### Bindings

* To catch and hold values JavaScript uses `bindings` or `variables`. Otherwise the produced values will dissipate.

  ```javascript
  let caught = 5*5;
  ```

  This is one kind of statement. `let` indicates this statement is going to define a `variable` or `binding` followed by it's name and `expression` which produces a value.

* After `binding` has been defined, it can be used in future `expressions`.
* The words `var` and `const` can also be used to create bindings in a similer way like `let`:

  ```javascript
  var name = "Ayda";
  const greeting = "Hello ";
  console.log(greeting + name);
  // → Hello Ayda
  ```

  * `var` is mostly similer to `let` but it has some confusing properties, so it is not recomended to be used.
  * `const` is a binding which points to the same value for as long as it lives.

### Functions

* A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.
* Executing a function is called **invoking**, **calling**, or **applying** it.
* We can call a function by putting parenthesis after an expression that produces a function value.
* The parenthesis can be used to pass parametes to the function.

### If Else Statemetns

* Conditional executions are created using the if keywork in JavaScript.

  ```javascript
  let num = Number(prompt("Pick a number"));
  if (num < 10) {
  console.log("Small");
  } else if (num < 100) {
  console.log("Medium");
  } else {
  console.log("Large");
  }
  ```

### While and Do Loops

* Program to print all even numbers less or equal to 12 using `while`:

  ```javascript
  let number = 0;
  while (number <= 12) {
    console.log(number);
    number = number + 2;
  }
  ```

* A `do` loop is a control structure much similer to `while` loop with one exception. It always executes it's body at least once.

  ```javascript
  let yourName;
  do {
    yourName = prompt("Who are You?");
  } while(!yourName);
  console.log(youName);
  ```

  This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the `!` operator will convert a value to Boolean type before negating it, and all strings except "" convert to `true`. This means the loop continues going round until it is provided a non-empty name.

### For Loops

```javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
// … etcetera
```

* We can use `break` statement to break the loop.
* We can use `continue` to jump to next iteration.

### Switch Statement

```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```

* It the `break` statement is not provided, the `case` statements will continue to be executed one after another.

### Comments

* To write a single line comment use `//`.
* To write a paragraph as comment use `/*` and `*/`.

___
___

## Function

### Defining Function

A funciton definition is a regular binding where the value of the binding is a function.

```javascript
const square = function(x) {
  return x * x;
};
console.log(square(12));
// → 144
```

**Notice:** There is a semicolon after the function declaration.

Funcitons can have one or more parameters of none. They can also return a value or return nothing at all:

```javascript
const makeNoise = function() {
  console.log("Pling!");
};
makeNoise();
// → Pling!
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
  result *= base;
  }
  return result;
};
console.log(power(2, 10));
// → 1024
```

### Bindings & Scopes

* Each binding has a `scope`, which is the part of the program in which the binding is visible.
  * For bindings defined outside of any function or block, the scope is the whole program we can refer to such bindings wherever we want. These are called **global**.
  * But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as **local** bindings.
* Every time the function is called, new instances of these bindings are created. This provides some isolation between functions.
* Bindings declared with `let` and `const` are in fact local to the block that they are declared in.
* Bindings declared with `var` keyword are visible throughout the global scope wherever they are declared and if they are redeclared the previous declaration gets overwritten.

### Declaration Notation

There is another much easier way ofdeclaring a function block:

```javascript
function square (x) {
  return x * x;
}
```

* There is no semicolon needed at the end of the declaration.
* Functions can be declared anywhere and can be called from anywhere from inside the scope.

### Arrow Function

* Instead of `function` keyword, we can use an arrow `=>` made up of equal sign and greater than character:

  ```javascript
  const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
  };

  ```

  * The arrow points out that these values produce that value.
  * If there is only one parameter, there is no need for parenthesis.
  * Similerly is the body is a single expression, it can be without parenthesis.

  ```javascript
  const square1 = (x) => { return x * x; };
  const square2 = x => x * x;
  ```

  * When there is no parameters:

  ```javascript
  const horn = () => {
    console.log("Toot");
  };
  ```

* The arrow funciton were added in 2015 to mostly make it possible to write small function expressions in a less verbose way.

### Optional Arguments

```javascript
function square(x) {return x*x;}
console.log(square(4, true, "hedgehog"));
// -> 16
```

The above code runs without any error because JavaScript allows optional parameters which it discards.

* If we pass too many parameters, the extra ones are ignored.
* If we pass too few, the missing parameters get assigned the value `undefined`.
* The downside is, we may accidently pass too many parameters that the computer is ignoring and no one is telling us.
* The upside is that this behaviour can be used to allow functions to be called with different number of parameters. The following `minus` funciton can take one or two parameters:

  ```javascript
  function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
  }
  console.log(minus(10));
  // → -10
  console.log(minus(10, 5));
  // → 5
  ```

* If we write `=` after a parameter followed by an `expression`, the value of that `expression` will be passed as the value of that parameter if it is not provided.

### Closure

* A function can be treated as a value.
* Local variables/bindings are created everytime a function is called.

```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1);
// -> 1
console.log(wrap2);
// -> 2
```

We can see that the binding `local` is re-created everytime the function is accessed. An both instance of the binding `local` can still be accessed. This demonstrates that local bindings are created anew for every call and different calls cant't trample on one another's local bindings.

* This feature of referencing specific instance of a local binding in an enclosing scope is called **closure**. **A funciton that references bindings from local scopes around it is called a closure.**
* By using this feature we can create function that can multiply by an arbitary amount:

  ```javascript
  function multiplier(factor) {
    return number => number * factor;
  }

  let twice = multiplier(2); //twice = number => number * 2;
  console.log(twice(5));
  // -> 10
  ```

  * At first we create a multiplier instance that multiplies any number by 2.
  * Then we can use it any number of times and multiply any value by 2 by passing the value as a parameter through `twice`.

## Recursion

* Recursion allows a funciton to be implemented differently.
* Rucursion makes the code look elegant but looping is more faster and better performance wise.
* The tradeoff between speed vs elegance should be determined by the programmer.
* Recursion should be used if the code is already difficult so we should not make it more difficult.
* Some problems are easier to solve with recursions than with loops such as exploring several branches which create another set of branches. ie: a program that prints the path for building a number out of just adding 5 or multiplying by 3 is given below:

  ```javascript
  function findFor(value) {
    function find(current, history) {
      if(current == value) return history;
      else if(current > value) return null;
      else {
        return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
      }
    }

    return find(1, "1");
  }

  console.log(findFor(24));
  ```

___
___

## Data Sructures: Objects and Arrays

### Data Sets

* JavaScript porvides a data type specifically for storing sequences of values. It is called an **array** and is written as a list of values between square brackets, separated by commas.

  ```javascript
  let listOfNumbers = [2, 3, 5, 7, 11];
  console.log(listOfNumbers);
  // -> 5
  console.log(listOfNumbers[0]);
  // -> 2
  console.log(listOfNumbers[2-1]);\
  // -> 3
  ```

* We can access properties by using the dot `.` operator or the `[]` square brackets. Numbers are accessed by the square bracketrs while other properties are accessed by dot. eg: `array.length`.
* Both `string` and `array` objects have in addition to `length`, a number of propertires that hold function values.
  * `toUpperCase` is a property of a `string` that converts the value of the string to all uppercase letters.
  * `push` and `pop` are properties of `array` which provide the basic `stack` operations.

### Objects

* Values of the type **object** are arbirary collections of properties. One way to create an object is by using braces as an expression:

  ```javascript
  let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  
  console.log(day1.squirrel);
  // -> false
  console.log(day1.wolf);
  // -> undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // -> false
  ```

* Inside the braces there are a list of properties separated by commas `,`. Each property has a name followed by a colon `:` and a value.
* Property names that aren't valid binding names or valid numbers have to be quoted:

  ```javascript
  let descriptions = {
    work: "went to work",
    "touched tree": "Touched a tree"
  };
  ```
* We can read the value of a property by using a dot `.` operator: `descriptions.word`.
* If the property name is stored in a variable then:

  ```javascript

  let obj1 = {name: "sakib", age: 10};
  ar = ["name", "age"];
  console.log(obj1[ar[0]]);
  // -> sakib

  ```

* Reading properties that are not defined will give `undefined` as result.
* It is possible to assign a value to a property expression with the `=` operator. This will replace the porperty's value if it already existed or create a new property on the object if it didn't.
* It is possible to delete a property using the `delete` operation:

  ```javascript
  let anObject = {left: 1, right: 2};
  console.log(anObject.left);
  // → 1
  delete anObject.left;
  console.log(anObject.left);
  // → undefined
  console.log("left" in anObject);
  // → false
  console.log("right" in anObject);
  // → true
  ```

* The binary `in` operator , when applied to a string and an object, tells us whether that object has a property with that name.
* The difference between setting a property value to `undefined` and deleting it is that in the first case the object still has that property whereas in the second case the property is no longer present and `in` will return `false`.
* To find out all the properties of an object we can use `Object.keys` function. We pass the object as it's parameter and it returns the string of properties:

  ```javascript
  console.log(Object.keys({x: 0, y: 0, z: 2}));
  // → ["x", "y", "z"]
  ```

* `Object.assign` function copies all the properties from one object into another:

  ```javascript
  lef objectA = {a: 1, b: 2};
  Object.assign(objectA, {b: 3, c: 4});
  console.log(objectA);
  // -> {a: 1, b:3, c:4}

* We can create an array of objects:

  ```javascript

  let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
    /* and so on... */
  ];

  ```

* We can create a funciton to push objects into that array:

  ```javascript

  let journal = [];
  function addEntry(events, squirrel) {
    journal.push({events, squirrel});
  }

  ```

  Here we did not use notations like `journal.push({events: events, squirrel: squirrel});` because it is the same thing. If a property name in brace notation isn’t followed by a value, it's value is taken from the binding with the same name.

### Mutability

```javascript

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

```

* The `object1` and `object2` bindings grasp the same object, which is why changing `object1` also changes the value of `object2`. They are said to have the same **identity**. The binding `object3` points to a different object, which initially contains the same properties as `object1` but lives a separate life.
* Bindings can also be changeable or constant. `const` binding t an object can itself not be changed and will continue to point at the same object. **The contents of that object might change.**

  ```javascript

  const score = {visitors: 0, home: 0};
  score.visitors = 1; //this is okay (contents of the object can be changed)
  score = {visitors: 1, home: 1}; //this is not allowed, because score is constant and it can not point to other objects

  ```

* Objects can be compared using the `==` operator, it conpares by *identity*: it will produce `ture` only if both objects are precisely the same value. Comparing different objects produce `false`, even if they have identical properties. There is no deep comparison between objects build in, we have to define them.

  ```javascript

  let objectA = {a: 1, b: 2};
  let objectB = objectA;
  let objectC = {a: 1, b: 2};

  console.log((objectA == objectB));
  // -> true
  console.log((objectA == objectC));
  // -> false

  ```

### Array Loops

* General `for` loop structure to iterate over an array:

  ```javascript

  for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // do something with the entry
  }

  ```

* Simpler loop to iterate over array elements:

  ```javascript

  for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
  }

  ```

  When a for loop looks like this, with the word of after a variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures.

### Further Arrayology

* Use `push` & `pop` to add or remove elements at the end of an array.
* Use `ushift` & `shift` to add and remove elements at the start of an array.
* A simple queuing example:

  ```javascript
  let todoList = [];
  function remember(task) {
    todoList.push(task);
  }
  function getTask() {
    return todoList.shift();
  }
  function rememberUrgently(task) {
    todoList.ushift(task);
  }

  ```

* To search a specific value in an array from start use `indexOf` method. It will return the index of the value in the array otherwise `-1` if it is not found in the array.
* To search from end to start use `lastIndexOf` method.

  ```javascript

  console.log([1, 2, 3, 2, 1].indexOf(2));
  // -> 1
  console.log([1, 2, 3, 2, 1].lastIndexOf(2));
  // -> 3

  ```

* Both `indexOf` and `lastIndexOf` have optional argument that indicates where to start searching
* Use `slice` to extract a range of elements from an array:

  ```javascript

  console.log([0, 1, 2, 3, 4].slice(2, 4));
  // -> [2, 3]
  console.log([0, 1, 2, 3, 4].slice(2));
  // -> [0, 1, 2];

  ```

  When last index is not given `slice` will take all of the elements after the start index. We can also omit the start index to copy the entire array.

* We can use `concat` method to glue two arrays together similer to `+` operator for strings.

### Strings & Their Properties

* Values of type string, number  and Boolean are not objects and we can not add custom properties to them.
* `slice` and `indexOf` are similer methods just like arrays. The difference is we can work with substrings not only characters:

  ```javascript

  console.log("coconut".slice(4,7));
  // -> nut
  console.log("coconut".indexOf(u));
  // -> 5

  console.log("I am Sakib".indexOf("kib"));
  // -> 7

  ```

* The `trim` method removes whitespaces (spaces, newline, tabs and similer characters) from the start and end of a string.

  ```javascript

  console.log("   okay  \n ".trim());
  // -> okay

  ```

* The `padStart` and `padEnd` method takes a desired length and padding characters as arguments and padds the character at the start or end of the string:

  ```javascript

  console.log(String(6).padStart(3, "0"));
  // → 006

  ```

* We can split a string on every occurance of another substring with `split` and joit it agan with `join`:

  ```javascript

  let sentence = "I am Sakib";
  let words = sentence.split(" ");
  console.log(words);
  // -> ["I", "am", "Sakib"]
  console.log(words.join(". "));
  // -> I. am. Sakib

  ```

* A string can be repeated multiple times by the `repeat` method which created a new string:

  ```javascript

  console.log("LA".repeat(3));
  // -> LALALA

  ```

* We can access individual characters in a string similer to array:

  ```javascript

  let string = "abs";
  console.log(string[1]);
  // -> b

  ```

### REST Parameters

It can be useful for a function to accept any number of arguments. To write such a function we need to put three dots before the function's last parameter, like this:

```javascript

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if(number > result) {
      result = number;
    }
  }
  return result
}
console.log(max(4, 1, 2, 9));
// -> 9

```

* **The Rest parameters must be declared at the end of the function parameters.**
* We can use a similer three dot notation to call a function with an array of arguments.

  ```javascript

  let numebrs = [5, 1, 7];
  console.log(max(...numbers));
  // -> 7

  ```

  This spreads out the array into the function call, passing it's elements as separate arguments. It is possible to include an array like that along wiht other arguments, as in `max(9, ...numbers, 2)`.

* Square bracket array notation allows the triple-dot operator to spread another array into the new array.

  ```javascript

  let words = ["never", "fully"];
  console.log(["will", ..words, "understand"]);
  // -> ["will", "never", "fully", "understand"]

  ```

### The Math Object

* It is used as a container to group a bunch of related functionality.
* `Math` object contains number related utility function: `Math.max`(maximum), `Math.min`(minimum), `Math.sqrt`(square root).
* If we need to do Trigonometry, `Math` can help. It contains `cos`(cosine), `sin`(sine), `tan`(tangent), as well as their inverse `acos`, `asin`, `atan`, respectively. The constant `π` (pi) can be found from `Math.PI`.
* `Math.random` returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time we call it.
* `Math.round` - Rounds to the nearest whole number.
* `Math.floor` - Rounds down to the nearest whole number.
* `Math.ceil` - Rounds up to the nearest whole number.

### Destructuring

We prefer to have bindings for the elements of the array, that is `let n00 = table[0]` and so on. Fortunately there is a way:

``` javascript

function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
  Math.sqrt((n10 + n11) * (n00 + n01) *
  (n01 + n11) * (n00 + n10));
}

```

This also works for bindings created with `let`, `var`, or `const`. If we know the value we are binding is an array, we can use square brackets to “look inside” of the value, binding its contents.

* A similer trick works for objects using braces instead of square brackets:

  ```javascript

  let {name} = {name: "Faraji", are: 23};
  console.log(name);
  // -> Faraji

  ```

### JSON

If we want to save data in file for later or sent it to another computer over the network we can use the JSON file format.

* JSON(JavaScript Object Notation) is popular data `serialization` format.
* It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.
* JSON looks similer to JavaScript way of writing arrays and objects, with a few restrictions.
  * All property names must be surrounded by double quotes
  * Only simple data expressions are allowed - no function calls, bindings, or anything that involves actual computation.
  * Comments are not allowed.

  ```json

  {
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
  }

  ```

* `JSON.stringify` - takes JavaScript value and returns a JSON-encoded string.
* `JSON.parse` - takes JSON-encoded string and converts it to the value it encoded.

```javascript

let string = JSON.stringify({squirrel: false,
events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]

```

___
___

## Higher-Order Functions

### Abstracting Repetition

It is common for a program to do something a given number of times. We can write a `for` loop for that and write the action in the for loop.
* If we want various actions to be performed a various number of times, we can creaete a new funciton and pass the number of times and the action as it's parameter:

  ```javascript

  function repeat(n, action) {
    for (let i = 0; i < n ; i++) {
      action(i);
    }
  }

  ```

  now the action can be defined in a function which takes paremeter `i`. It can be declared inline or previously on top:

  ```javascript

  let func = i => {
    console.log(i)
  };

  repeat(5, func);
  // -> 0
  // -> 1
  // -> 2
  // -> 3
  // -> 4

  ```
  or

  ```javascript

  repeat(3, i => {
    console.log(i*i);
  });
  // -> 0
  // -> 1
  // -> 4

  ```

### Higher Order Functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called **higher-prder* functions. It allows us to abstract over actions, not just values. They come in several forms:

* We can have functions to create new functions:

  ```javascript

  function greaterThan(n) {
    return m => m>n;
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));
  // -> true

  ```

  here, a value is passed to return a function, which can be called later.

* We can have functions that change other functions:

  ```javascript

  function noisy(f) {
    return (...args) => {
      console.log("calling with", args);
      let result = f(...args);
      console.log("called witth", args, ", returned", result);
      return result;
    };
  }
  noisy(Math.min)(3, 2, 1);
  // -> calling with [3, 2, 1]
  // -> called with [3, 2, 1], returned 1
  
  ```

  here, we passed a function as argument and retured a function with modifies this function or something !!!!!!!????

* We can even write functions that provide new types of control flow.

  ```javascript

  function unless(test, then) {
    if(!test) then();
  }

  repeat(3, n => {
    unless(n%2 == 1, () => {
      console.log(n, "is even");
    });
  });
  // -> 0 is even
  // -> 2 in even

  ```

* There is a built in array method, `forEach`, that provides something like a for/of loop as a higher-order function:

  ```javascript

  ["A", "B"].forEach(l => console.log(l));
  // -> A
  // -> B

  ```

### Filtering Arrays

We can filter an array based on a `test` method that we will provide like this:

```javascript

function filter(array, test) {
  let passed = [];
  for(let element of array) {
    if(test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// [{name: "Adlam", ...}, ...]

```

* Like `forEach` , `filter` is a standart array method. The above function just describes how it works:

  ```javascript

  console.log(SCRIPTS.filter(script => script.living));

  ```

### Transforming with Map

The `map` method transforms an array by applying a function to all of it's elements and building a new array from the returned values. The new array have the same length as the input array, but it's content will have been 'mapped' to a new form by the function.

```javascript

function map(array, transform) {
  let mapped = [];
  for(let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter( s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

```

* Like `forEach` and `filter`, `map` is also a standart array method.

### Summerizing with Reduce

Another common thing to do with arrays is to compute a single value from them. Our recurring example, summing a collection of numbers, is an instance of this. Another example is finding the script with the most characters.

A higher order function that represents this operation is called `reduce` (also knows as `fold`). It builds value by repeatedly taking a single element from the array and combining it with the current value.

The paramenters to `reduce` are, apart form the array, a combining function and a start value.

```javascript

function reduce(array, combine, start) {
  let current = start;
  for( let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a,b) => a+b, 0));
// -> 10

```

* The standart array method `reduce`, which of course corresponds to this function, has an added convenience. If the array has atleast one element we can leave out the start field. It will automatically set the first element of the array as starting element and start reducing from the second:

  ```javascript

  console.log([1, 2, 3, 4].reduce((a, b) => a+b));

  ```

* To use reduce **twice** to find the script with the most characters, we can write something like:

  ```javascript

  function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count+(to-from);
    }, 0);
  }

  console.log(SCRIPTS.reduce((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  }));
  // -> {name: "Han", ...}

  ```

### Composability

Higher order functions start to shine when we need to **compose** opearations. As an example, let's write code that finds the average year of origin for living and dead scripts in the dataset.

```javascript

function average(array) {
  return array.reduce((a,b) => a+b) / array.length;
}

console.log(Math.round(average(SCRIPTS.filter(script => script.living).map(script => script.year))));
// -> 1188
console.log(Math.round(average(SCRIPTS.filter(script => !script.living).map(script => script.year))));
// -> 188

```

With out using the higher order functions it is harder to implement and when implemented, it is harder to see what has been implemented.

### Strings & Character Codes

Given a character code, we could use a function like the following to find out corresponding script (if any):

```javascript

function characterScript(code) {
  for(let script of SCRIPTS) {
    if(script.ranges.some(([from, to] => {
      return code>=from && code< to;
    })) {
      return script;
    }
  }
  return null;
}
console.log(characterScript(121));
// -> {name: "Latin", ...}

```

* The `some` method is another higher order function. It takes a test function and tells us whether that function returns `true` for any of the elements in the array.

### SUMMARY

Arrays provide a number of useful higher-order methods.
* We can use `forEach` to loop over the elements in an array.
* The `filter` method returns a new array containing only the elements that pass the predicate function.
* Transforming an array by putting each element through a function is done with `map`.
* We can use `reduce` to combine all the elements in an array into a single value.
* The `some` method tests whether any element matches a given predicate function.
* The `every` method tests whether all the elements matche a given predicate function.
* `findIndex` finds the position of the first element that matches a predicate.

___
___

## The Secret Life of Objects

### Encapsulation

The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state. Different pieces of such a program interact with each other through `interfaces`, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.

Such program pieces are modeled using objects. Their interfaces consists of a specific set of methods and properties. Properties that are part of the interface are called `public`. The others, which outside code should not be touching, are called `private`.

It is common to put an underscore `_` character at the start of property names to indicate that those properties are private.

Separating interface from implementation is a greate idea. It is usually called **encapsulation**.

### Methods

* Methods are nothing more than properties holding function values. This is a simple method:

  ```javascript

  let rabbit = {};

  rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
  };
  rabbit.speak("I'm alive.");
  // -> The rabbit says 'I'm alive.'

  ```

* When a function is called as a method-- it is looked up as a property of an object and called as `object.method()`. The binding called `this` in it's body automatically points at the object for which it was called on:

  ```javascript

  function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = {type: "white", speak};
  let hungryRabbit = {type: "hungry", speak};
  whiteRabbit.speak("Oh my ears and whiskers, " +
  "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how
  // late it's getting!'
  hungryRabbit.speak("I could use a carrot right now.");
  // → The hungry rabbit says 'I could use a carrot right now.'

  ```

* `this` can be thought of as an extra parameter that can be passed in a different way. If we want to pass it explicitly we can use `call` method:

  ```javascript

  speak.call(hungryRabbit, "Burp!");
  // -> The hungry rabbit says 'Burp!'

  ```

* Each function has it's own `this` binding. So, `this` binding of parent function is not accessible by nested functions. The following code gives error:

  ```javascript

  function speak(line) {

    function nested(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
    nested(line);
  }

  let rabbitA = {type: "white", speak};
  let rabbitB = {type: "hungry", speak};

  speak.call(rabbitA, "I am white");
  // -> The undefined rabbit says 'I am white'

  ```

  The `nested` function has it's own `this`, it can not access `speak`'s `this`. We can pass the parent function's `this` as parameter. Then it will be correct:

  ```javascript

  function speak(line) {

    function nested(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
    nested.call(this, line);
  }

  let rabbitA = {type: "white", speak};
  let rabbitB = {type: "hungry", speak};

  speak.call(rabbitA, "I am white");

  ```

  We can also solve this problem using the **Arrow function**. Arrow functions are different—they do not bind their own `this` but can see the `this` binding of the scope around them:

  ```javascript

  function speak(line) {

    let nested = line => console.log(`The ${this.type} rabbit says '${line}'`);

    nested(lne)
  }

  let rabbitA = {type: "white", speak};
  let rabbitB = {type: "hungry", speak};

  speak.call(rabbitA, "I am white");

  ```

### Prototypes

* A prototype of an object is another object that is used as a fallback source of properties. When an object gets a request of a property that it does not have, it's prototype will be searched for the property, then the prototype's prototype and so on.
* It can be thought of a tree like structure with `Object.prototype` at it's root. It provides a few methods that show up on all objects.
* `Object.getPrototypeOf()` returns the prototype of an object.
* We can use `Oject.create` to create an object with a specific prototype.

  ```javascript

  let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!

  ```

### Classes

* A class defines the shape of a type of object -- what methods and properties it has. Such an object is called an **instance** of the class.
* Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods. Properties that differ need to stored directly in the objects themeselves.
* To create an instance of a given class we need `constructor` method:

  ```javascript

  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
  }

  ```

  In JavaScript the defining constructors are easy. If we put keywork `new` infornt of a function call, the funciton is treated as a constructor. The object with the right prototype is automatically created bound by the `this` in the function, and returned at the end of the function.

  ```javascript

  function Rabbit(type) {
    this.type = type;
  }
  Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  };

  let weirdRabbit = new Rabbit("weird");

  ```

* Constructors (all functions, in fact) automatically get a property named `prototype`, which by default holds a plain, empty object that derives form `Object.prototype`. We can overwrite it with a new object if we want. Or we can add properties to the existing object, as the exaple does.
* By convention the names of the constructors are capitalized.
* It is important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with `Object.getPrototypeOf`). The actual prototype of a constructor is `Function.prototype` since constructors are functions. Its prototype property holds the prototype used for instances created through it.

### Class Notation

```javascript

class Rabbit {
  constructor (type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

```

* The method named `constructor` provides the actual constructor function which will be bound to the name `Rabbit`. The other methods are bound to that constructor's prototype. Thus earlier class declaration is equivalent to the constructor definition form the previous section.
* Class declarations currently only allow methods--properties that hold functions to be added to the prototype. For now, we can create such property by directly manipulating the prototype after we've defined the class.
* Like `function`, `class` can be used both in statements and expressions. When used as expression, it returns the constructor as a value.

  ```javascript

  let object = new class {getWord() {return "hello";}};
  console.log(object.getWord());
  // -> hello

  ```

### Overriding Derived Properties

* When we add a property to an Object, whether it is present in the prototype or not, the property is added to the object itself. If there was a property with the same name in the prototype, it will get overwritten for this object.

  ```javascript

  Rabbit.prototype.teeth = "small";
  console.log(killerRabbit.teeth);
  // → small
  killerRabbit.teeth = "long, sharp, and bloody";
  console.log(killerRabbit.teeth);
  // → long, sharp, and bloody
  console.log(blackRabbit.teeth);
  // → small
  console.log(Rabbit.prototype.teeth);
  // → small

  ```

* Overriding can be useful to express exceptional properties in an instance of a more generic class of objects, while letting no exceptional objects take a standard value from their prototype.
* Overriding is also useful for giving standard function and array prototypes a different `toString` method:

  ```javascript

  console.log(Array.prototype.toString ==
  Object.prototype.toString);
  // → false
  console.log([1, 2].toString());
  // → 1,2

  ```

### Maps

* A `map` is a data structure that associates values (the keys) with other values. We can create maps using objects:

  ```javascript
  let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
  };
  console.log(`Júlia is ${ages["Júlia"]}`);
  // → Júlia is 62
  console.log("Is Jack's age known?", "Jack" in ages);
  // → Is Jack's age known? false
  console.log("Is toString's age known?", "toString" in ages);
  // → Is toString's age known? true

  ```

* Object property names must be string. If we need a map whose keys are not strings - such as objects- we can not use objects in our map.
* JavaScript comes with a class called `Map` that is written for this exact purpose. It stores a mapping and allows any type of keys.

```javascript

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

```

* The method `get`, `set` and `has` are part of the interface of the `Map` object.
* If we do have a plain object the we need to treat as a map for some reason, it is useful to know that `Object.keys` returns only an object's own keys, not those in the prototype. As an alternative to the `in` operator, we can use the `hasOwnProperty` method, which ignores the object's prototype.

  ```javascript

  console.log({x: 1}.hasOwnProperty("x"));
  // -> true
  console.log({x: 1}.hasOwnProperty("toString"));
  // -> false

  ```

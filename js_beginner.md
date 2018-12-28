# JavaScript Note

## Values, Types and Operators

### Number`s

- Numbers take `64` bits of space. Large numbers can be expressed using `e`. eg `28e10` expresses `280000000000`.
- There are two special numbers : `Infinity` and `NaN`
- Any operation with `Infinity` produces `Infinity` other than `Infinity - Infinity` which produces `NaN`.

### Strings

- Special characters are (`Newline`, `Tab`, `'`, `"`, \`). To use any of them in a string we need to use backslash (`\`) operator. eg (`\n`, `\t`, `\'`, `\"`, \\`)
- To include backslash itself inside a string, we need to push a backslash before backslash. eg: `\\`
- To concatenate string use `+` operator.
- New line can be included without typing `\n` if the string is enclosed inside backticks (`).
- Backticks (\`) can also be used to embed other values:
  Using `${}` inside string enclosed by backticks will produse embedded result of the operation mesioned inside `${}`.

### Unary Operators

- The `typeof` operator produces a string value naming the type of the value given to it:

  ```javascript
  console.log(typeof 4.5);
  // → number
  ```

- The minus operator `-` can also used as unary operator:

  ```javascript
  console.log(-(10 - 2));
  // -> -8
  ```

### Boolean Values

- There are two values : `true`, `false`.
- Comparing two numbers or strings produces boolean values as output:

  ```javascript
  console.log(3 > 2);
  // → true
  console.log(3 < 2);
  // → false
  console.log("Aardvark" < "Zoroaster");
  // → true
  ```

- In case of string comparison, JavaScript matches the unicodes of the characters one by one form left to right.
- There is only one value in JavaScript that is not equal to itself:

  ```javascript
  console.log(NaN == NaN);
  // -> false
  ```

### Logical operators

- `&&` (AND), `||` (OR) are binary logical operators that perform logical and, or operations.
- `!` (NOT) is a unary operatror.
- There is a ternary operator called **conditional operator**.

  ```javascript
  console.log(true ? 1 : 2);
  // → 1
  console.log(false ? 1 : 2);
  // → 2
  ```

  The value on the left of the question mark “picks” which of the other two values will come out.

### Empty Values

- There are two special values `null` and `undefined` that are used to denote absense of meaningful values. The difference in meaning beween them is not important.
- `Nan` is used to denote result of nonsensical operation.

### Automatic Type Conversion

- When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what we want or expect. This is called **type coercion**.

  ```javascript
  console.log(8 * null);
  // → 0
  console.log("5" - 1);
  // → 4
  console.log("5" + 1);
  // → 51
  console.log("five" * 2);
  // → NaN
  console.log(false == 0);
  // → true
  ```

- When comparing two different type of values using comparison operators JavaScript automatically convert one type to another.
- To compare without performing type conversion we need to use `===` or `!==` operator.

### Short-Circuiting of Logical Operators

- `&&` and `||` operators handle operands of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the righthand value.
- If we have a value that might me empty, we can put `||` after it with a replacement value. If the initial value can be converted to `false`, we will get the replacement instead.

  ```javascript
  console.log(null || "user");
  // → user
  console.log("Agnes" || "user");
  // → Agnes
  ```

  - The rules for converting strings and numbers to Boolean values state that `0`, `NaN`, `null` and the empty string `""` count as `false`, while all the other values count as `true`.

- `&&` operator works similerly but other way around. When the value to its left is something that converts to `false`, it returns that value, and otherwise it returns the value on its right.

---

---

## Program Structure

### Expression & Statements

- Expressions are fragments of code that produces a value.
- An expression between parenthesis is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.
- If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements
- The simplest kind of statement is an expression with a semicolon after it.
- **An Expression produces a value**
- **A Statement performs a certain operation that will change the state of the machine for future statements**.
- **A collection of statements is called a program**.

### Bindings

- To catch and hold values JavaScript uses `bindings` or `variables`. Otherwise the produced values will dissipate.

  ```javascript
  let caught = 5 * 5;
  ```

  This is one kind of statement. `let` indicates this statement is going to define a `variable` or `binding` followed by it's name and `expression` which produces a value.

- After `binding` has been defined, it can be used in future `expressions`.
- The words `var` and `const` can also be used to create bindings in a similer way like `let`:

  ```javascript
  var name = "Ayda";
  const greeting = "Hello ";
  console.log(greeting + name);
  // → Hello Ayda
  ```

  - `var` is mostly similer to `let` but it has some confusing properties, so it is not recomended to be used.
  - `const` is a binding which points to the same value for as long as it lives.

### Functions

- A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.
- Executing a function is called **invoking**, **calling**, or **applying** it.
- We can call a function by putting parenthesis after an expression that produces a function value.
- The parenthesis can be used to pass parametes to the function.

### If Else Statemetns

- Conditional executions are created using the if keywork in JavaScript.

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

- Program to print all even numbers less or equal to 12 using `while`:

  ```javascript
  let number = 0;
  while (number <= 12) {
    console.log(number);
    number = number + 2;
  }
  ```

- A `do` loop is a control structure much similer to `while` loop with one exception. It always executes it's body at least once.

  ```javascript
  let yourName;
  do {
    yourName = prompt("Who are You?");
  } while (!yourName);
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

- We can use `break` statement to break the loop.
- We can use `continue` to jump to next iteration.

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

- It the `break` statement is not provided, the `case` statements will continue to be executed one after another.

### Comments

- To write a single line comment use `//`.
- To write a paragraph as comment use `/*` and `*/`.

---

---

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

- Each binding has a `scope`, which is the part of the program in which the binding is visible.
  - For bindings defined outside of any function or block, the scope is the whole program we can refer to such bindings wherever we want. These are called **global**.
  - But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as **local** bindings.
- Every time the function is called, new instances of these bindings are created. This provides some isolation between functions.
- Bindings declared with `let` and `const` are in fact local to the block that they are declared in.
- Bindings declared with `var` keyword are visible throughout the global scope wherever they are declared and if they are redeclared the previous declaration gets overwritten.

### Declaration Notation

There is another much easier way ofdeclaring a function block:

```javascript
function square(x) {
  return x * x;
}
```

- There is no semicolon needed at the end of the declaration.
- Functions can be declared anywhere and can be called from anywhere from inside the scope.

### Arrow Function

- Instead of `function` keyword, we can use an arrow `=>` made up of equal sign and greater than character:

  ```javascript
  const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  ```

  - The arrow points out that these values produce that value.
  - If there is only one parameter, there is no need for parenthesis.
  - Similerly is the body is a single expression, it can be without parenthesis.

  ```javascript
  const square1 = x => {
    return x * x;
  };
  const square2 = x => x * x;
  ```

  - When there is no parameters:

  ```javascript
  const horn = () => {
    console.log("Toot");
  };
  ```

- The arrow funciton were added in 2015 to mostly make it possible to write small function expressions in a less verbose way.

### Optional Arguments

```javascript
function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog"));
// -> 16
```

The above code runs without any error because JavaScript allows optional parameters which it discards.

- If we pass too many parameters, the extra ones are ignored.
- If we pass too few, the missing parameters get assigned the value `undefined`.
- The downside is, we may accidently pass too many parameters that the computer is ignoring and no one is telling us.
- The upside is that this behaviour can be used to allow functions to be called with different number of parameters. The following `minus` funciton can take one or two parameters:

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

- If we write `=` after a parameter followed by an `expression`, the value of that `expression` will be passed as the value of that parameter if it is not provided.

### Closure

- A function can be treated as a value.
- Local variables/bindings are created everytime a function is called.

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

- This feature of referencing specific instance of a local binding in an enclosing scope is called **closure**. **A funciton that references bindings from local scopes around it is called a closure.**
- By using this feature we can create function that can multiply by an arbitary amount:

  ```javascript
  function multiplier(factor) {
    return number => number * factor;
  }

  let twice = multiplier(2); //twice = number => number * 2;
  console.log(twice(5));
  // -> 10
  ```

  - At first we create a multiplier instance that multiplies any number by 2.
  - Then we can use it any number of times and multiply any value by 2 by passing the value as a parameter through `twice`.

## Recursion

- Recursion allows a funciton to be implemented differently.
- Rucursion makes the code look elegant but looping is more faster and better performance wise.
- The tradeoff between speed vs elegance should be determined by the programmer.
- Recursion should be used if the code is already difficult so we should not make it more difficult.
- Some problems are easier to solve with recursions than with loops such as exploring several branches which create another set of branches. ie: a program that prints the path for building a number out of just adding 5 or multiplying by 3 is given below:

  ```javascript
  function findFor(value) {
    function find(current, history) {
      if (current == value) return history;
      else if (current > value) return null;
      else {
        return (
          find(current + 5, `(${history} + 5)`) ||
          find(current * 3, `(${history} * 3)`)
        );
      }
    }

    return find(1, "1");
  }

  console.log(findFor(24));
  ```

---

---

## Data Sructures: Objects and Arrays

### Data Sets

- JavaScript porvides a data type specifically for storing sequences of values. It is called an **array** and is written as a list of values between square brackets, separated by commas.

  ```javascript
  let listOfNumbers = [2, 3, 5, 7, 11];
  console.log(listOfNumbers);
  // -> 5
  console.log(listOfNumbers[0]);
  // -> 2
  console.log(listOfNumbers[2-1]);\
  // -> 3
  ```

- We can access properties by using the dot `.` operator or the `[]` square brackets. Numbers are accessed by the square bracketrs while other properties are accessed by dot. eg: `array.length`.
- Both `string` and `array` objects have in addition to `length`, a number of propertires that hold function values.
  - `toUpperCase` is a property of a `string` that converts the value of the string to all uppercase letters.
  - `push` and `pop` are properties of `array` which provide the basic `stack` operations.

### Objects

- Values of the type **object** are arbirary collections of properties. One way to create an object is by using braces as an expression:

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

- Inside the braces there are a list of properties separated by commas `,`. Each property has a name followed by a colon `:` and a value.
- Property names that aren't valid binding names or valid numbers have to be quoted:

  ```javascript
  let descriptions = {
    work: "went to work",
    "touched tree": "Touched a tree"
  };
  ```

- We can read the value of a property by using a dot `.` operator: `descriptions.word`.
- If the property name is stored in a variable then:

  ```javascript
  let obj1 = { name: "sakib", age: 10 };
  ar = ["name", "age"];
  console.log(obj1[ar[0]]);
  // -> sakib
  ```

- Reading properties that are not defined will give `undefined` as result.
- It is possible to assign a value to a property expression with the `=` operator. This will replace the porperty's value if it already existed or create a new property on the object if it didn't.
- It is possible to delete a property using the `delete` operation:

  ```javascript
  let anObject = { left: 1, right: 2 };
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

- The binary `in` operator , when applied to a string and an object, tells us whether that object has a property with that name.
- The difference between setting a property value to `undefined` and deleting it is that in the first case the object still has that property whereas in the second case the property is no longer present and `in` will return `false`.
- To find out all the properties of an object we can use `Object.keys` function. We pass the object as it's parameter and it returns the string of properties:

  ```javascript
  console.log(Object.keys({ x: 0, y: 0, z: 2 }));
  // → ["x", "y", "z"]
  ```

- `Object.assign` function copies all the properties from one object into another:

  ```javascript
  lef objectA = {a: 1, b: 2};
  Object.assign(objectA, {b: 3, c: 4});
  console.log(objectA);
  // -> {a: 1, b:3, c:4}

  ```

- We can create an array of objects:

  ```javascript
  let journal = [
    {
      events: ["work", "touched tree", "pizza", "running", "television"],
      squirrel: false
    },
    {
      events: [
        "work",
        "ice cream",
        "cauliflower",
        "lasagna",
        "touched tree",
        "brushed teeth"
      ],
      squirrel: false
    },
    {
      events: ["weekend", "cycling", "break", "peanuts", "beer"],
      squirrel: true
    }
    /* and so on... */
  ];
  ```

- We can create a funciton to push objects into that array:

  ```javascript
  let journal = [];
  function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
  }
  ```

  Here we did not use notations like `journal.push({events: events, squirrel: squirrel});` because it is the same thing. If a property name in brace notation isn’t followed by a value, it's value is taken from the binding with the same name.

### Mutability

```javascript
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
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

- The `object1` and `object2` bindings grasp the same object, which is why changing `object1` also changes the value of `object2`. They are said to have the same **identity**. The binding `object3` points to a different object, which initially contains the same properties as `object1` but lives a separate life.
- Bindings can also be changeable or constant. `const` binding t an object can itself not be changed and will continue to point at the same object. **The contents of that object might change.**

  ```javascript
  const score = { visitors: 0, home: 0 };
  score.visitors = 1; //this is okay (contents of the object can be changed)
  score = { visitors: 1, home: 1 }; //this is not allowed, because score is constant and it can not point to other objects
  ```

- Objects can be compared using the `==` operator, it conpares by _identity_: it will produce `ture` only if both objects are precisely the same value. Comparing different objects produce `false`, even if they have identical properties. There is no deep comparison between objects build in, we have to define them.

  ```javascript
  let objectA = { a: 1, b: 2 };
  let objectB = objectA;
  let objectC = { a: 1, b: 2 };

  console.log(objectA == objectB);
  // -> true
  console.log(objectA == objectC);
  // -> false
  ```

### Array Loops

- General `for` loop structure to iterate over an array:

  ```javascript
  for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // do something with the entry
  }
  ```

- Simpler loop to iterate over array elements:

  ```javascript
  for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
  }
  ```

  When a for loop looks like this, with the word of after a variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures.

### Further Arrayology

- Use `push` & `pop` to add or remove elements at the end of an array.
- Use `ushift` & `shift` to add and remove elements at the start of an array.
- A simple queuing example:

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

- To search a specific value in an array from start use `indexOf` method. It will return the index of the value in the array otherwise `-1` if it is not found in the array.
- To search from end to start use `lastIndexOf` method.

  ```javascript
  console.log([1, 2, 3, 2, 1].indexOf(2));
  // -> 1
  console.log([1, 2, 3, 2, 1].lastIndexOf(2));
  // -> 3
  ```

- Both `indexOf` and `lastIndexOf` have optional argument that indicates where to start searching
- Use `slice` to extract a range of elements from an array:

  ```javascript
  console.log([0, 1, 2, 3, 4].slice(2, 4));
  // -> [2, 3]
  console.log([0, 1, 2, 3, 4].slice(2));
  // -> [0, 1, 2];
  ```

  When last index is not given `slice` will take all of the elements after the start index. We can also omit the start index to copy the entire array.

- We can use `concat` method to glue two arrays together similer to `+` operator for strings.

### Strings & Their Properties

- Values of type string, number and Boolean are not objects and we can not add custom properties to them.
- `slice` and `indexOf` are similer methods just like arrays. The difference is we can work with substrings not only characters:

  ```javascript
  console.log("coconut".slice(4, 7));
  // -> nut
  console.log("coconut".indexOf(u));
  // -> 5

  console.log("I am Sakib".indexOf("kib"));
  // -> 7
  ```

- The `trim` method removes whitespaces (spaces, newline, tabs and similer characters) from the start and end of a string.

  ```javascript
  console.log("   okay  \n ".trim());
  // -> okay
  ```

- The `padStart` and `padEnd` method takes a desired length and padding characters as arguments and padds the character at the start or end of the string:

  ```javascript
  console.log(String(6).padStart(3, "0"));
  // → 006
  ```

- We can split a string on every occurance of another substring with `split` and joit it agan with `join`:

  ```javascript
  let sentence = "I am Sakib";
  let words = sentence.split(" ");
  console.log(words);
  // -> ["I", "am", "Sakib"]
  console.log(words.join(". "));
  // -> I. am. Sakib
  ```

- A string can be repeated multiple times by the `repeat` method which created a new string:

  ```javascript
  console.log("LA".repeat(3));
  // -> LALALA
  ```

- We can access individual characters in a string similer to array:

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
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log(max(4, 1, 2, 9));
// -> 9
```

- **The Rest parameters must be declared at the end of the function parameters.**
- We can use a similer three dot notation to call a function with an array of arguments.

  ```javascript
  let numebrs = [5, 1, 7];
  console.log(max(...numbers));
  // -> 7
  ```

  This spreads out the array into the function call, passing it's elements as separate arguments. It is possible to include an array like that along wiht other arguments, as in `max(9, ...numbers, 2)`.

- Square bracket array notation allows the triple-dot operator to spread another array into the new array.

  ```javascript

  let words = ["never", "fully"];
  console.log(["will", ..words, "understand"]);
  // -> ["will", "never", "fully", "understand"]

  ```

### The Math Object

- It is used as a container to group a bunch of related functionality.
- `Math` object contains number related utility function: `Math.max`(maximum), `Math.min`(minimum), `Math.sqrt`(square root).
- If we need to do Trigonometry, `Math` can help. It contains `cos`(cosine), `sin`(sine), `tan`(tangent), as well as their inverse `acos`, `asin`, `atan`, respectively. The constant `π` (pi) can be found from `Math.PI`.
- `Math.random` returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time we call it.
- `Math.round` - Rounds to the nearest whole number.
- `Math.floor` - Rounds down to the nearest whole number.
- `Math.ceil` - Rounds up to the nearest whole number.

### Destructuring

We prefer to have bindings for the elements of the array, that is `let n00 = table[0]` and so on. Fortunately there is a way:

```javascript
function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}
```

This also works for bindings created with `let`, `var`, or `const`. If we know the value we are binding is an array, we can use square brackets to “look inside” of the value, binding its contents.

- A similer trick works for objects using braces instead of square brackets:

  ```javascript
  let { name } = { name: "Faraji", are: 23 };
  console.log(name);
  // -> Faraji
  ```

### JSON

If we want to save data in file for later or sent it to another computer over the network we can use the JSON file format.

- JSON(JavaScript Object Notation) is popular data `serialization` format.
- It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.
- JSON looks similer to JavaScript way of writing arrays and objects, with a few restrictions.

  - All property names must be surrounded by double quotes
  - Only simple data expressions are allowed - no function calls, bindings, or anything that involves actual computation.
  - Comments are not allowed.

  ```json
  {
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
  }
  ```

- `JSON.stringify` - takes JavaScript value and returns a JSON-encoded string.
- `JSON.parse` - takes JSON-encoded string and converts it to the value it encoded.

```javascript
let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```

---

---

## Higher-Order Functions

### Abstracting Repetition

It is common for a program to do something a given number of times. We can write a `for` loop for that and write the action in the for loop.

- If we want various actions to be performed a various number of times, we can creaete a new funciton and pass the number of times and the action as it's parameter:

  ```javascript
  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  ```

  now the action can be defined in a function which takes paremeter `i`. It can be declared inline or previously on top:

  ```javascript
  let func = i => {
    console.log(i);
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
    console.log(i * i);
  });
  // -> 0
  // -> 1
  // -> 4
  ```

### Higher Order Functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called \*_higher-prder_ functions. It allows us to abstract over actions, not just values. They come in several forms:

- We can have functions to create new functions:

  ```javascript
  function greaterThan(n) {
    return m => m > n;
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));
  // -> true
  ```

  here, a value is passed to return a function, which can be called later.

- We can have functions that change other functions:

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

- We can even write functions that provide new types of control flow.

  ```javascript
  function unless(test, then) {
    if (!test) then();
  }

  repeat(3, n => {
    unless(n % 2 == 1, () => {
      console.log(n, "is even");
    });
  });
  // -> 0 is even
  // -> 2 in even
  ```

- There is a built in array method, `forEach`, that provides something like a for/of loop as a higher-order function:

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
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// [{name: "Adlam", ...}, ...]
```

- Like `forEach` , `filter` is a standart array method. The above function just describes how it works:

  ```javascript
  console.log(SCRIPTS.filter(script => script.living));
  ```

### Transforming with Map

The `map` method transforms an array by applying a function to all of it's elements and building a new array from the returned values. The new array have the same length as the input array, but it's content will have been 'mapped' to a new form by the function.

```javascript
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
```

- Like `forEach` and `filter`, `map` is also a standart array method.

### Summerizing with Reduce

Another common thing to do with arrays is to compute a single value from them. Our recurring example, summing a collection of numbers, is an instance of this. Another example is finding the script with the most characters.

A higher order function that represents this operation is called `reduce` (also knows as `fold`). It builds value by repeatedly taking a single element from the array and combining it with the current value.

The paramenters to `reduce` are, apart form the array, a combining function and a start value.

```javascript
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// -> 10
```

- The standart array method `reduce`, which of course corresponds to this function, has an added convenience. If the array has atleast one element we can leave out the start field. It will automatically set the first element of the array as starting element and start reducing from the second:

  ```javascript
  console.log([1, 2, 3, 4].reduce((a, b) => a + b));
  ```

- To use reduce **twice** to find the script with the most characters, we can write something like:

  ```javascript
  function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  }

  console.log(
    SCRIPTS.reduce((a, b) => {
      return characterCount(a) < characterCount(b) ? b : a;
    })
  );
  // -> {name: "Han", ...}
  ```

### Composability

Higher order functions start to shine when we need to **compose** opearations. As an example, let's write code that finds the average year of origin for living and dead scripts in the dataset.

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(
    average(SCRIPTS.filter(script => script.living).map(script => script.year))
  )
);
// -> 1188
console.log(
  Math.round(
    average(SCRIPTS.filter(script => !script.living).map(script => script.year))
  )
);
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

- The `some` method is another higher order function. It takes a test function and tells us whether that function returns `true` for any of the elements in the array.

### SUMMARY

Arrays provide a number of useful higher-order methods.

- We can use `forEach` to loop over the elements in an array.
- The `filter` method returns a new array containing only the elements that pass the predicate function.
- Transforming an array by putting each element through a function is done with `map`.
- We can use `reduce` to combine all the elements in an array into a single value.
- The `some` method tests whether any element matches a given predicate function.
- The `every` method tests whether all the elements matche a given predicate function.
- `findIndex` finds the position of the first element that matches a predicate.

---

---

## The Secret Life of Objects

### Encapsulation

The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state. Different pieces of such a program interact with each other through `interfaces`, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.

Such program pieces are modeled using objects. Their interfaces consists of a specific set of methods and properties. Properties that are part of the interface are called `public`. The others, which outside code should not be touching, are called `private`.

It is common to put an underscore `_` character at the start of property names to indicate that those properties are private.

Separating interface from implementation is a greate idea. It is usually called **encapsulation**.

### Methods

- Methods are nothing more than properties holding function values. This is a simple method:

  ```javascript
  let rabbit = {};

  rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
  };
  rabbit.speak("I'm alive.");
  // -> The rabbit says 'I'm alive.'
  ```

- When a function is called as a method-- it is looked up as a property of an object and called as `object.method()`. The binding called `this` in it's body automatically points at the object for which it was called on:

  ```javascript
  function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = { type: "white", speak };
  let hungryRabbit = { type: "hungry", speak };
  whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how
  // late it's getting!'
  hungryRabbit.speak("I could use a carrot right now.");
  // → The hungry rabbit says 'I could use a carrot right now.'
  ```

- `this` can be thought of as an extra parameter that can be passed in a different way. If we want to pass it explicitly we can use `call` method:

  ```javascript
  speak.call(hungryRabbit, "Burp!");
  // -> The hungry rabbit says 'Burp!'
  ```

- Each function has it's own `this` binding. So, `this` binding of parent function is not accessible by nested functions. The following code gives error:

  ```javascript
  function speak(line) {
    function nested(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
    nested(line);
  }

  let rabbitA = { type: "white", speak };
  let rabbitB = { type: "hungry", speak };

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

  let rabbitA = { type: "white", speak };
  let rabbitB = { type: "hungry", speak };

  speak.call(rabbitA, "I am white");
  ```

  We can also solve this problem using the **Arrow function**. Arrow functions are different—they do not bind their own `this` but can see the `this` binding of the scope around them:

  ```javascript
  function speak(line) {
    let nested = line => console.log(`The ${this.type} rabbit says '${line}'`);

    nested(lne);
  }

  let rabbitA = { type: "white", speak };
  let rabbitB = { type: "hungry", speak };

  speak.call(rabbitA, "I am white");
  ```

### Prototypes

- A prototype of an object is another object that is used as a fallback source of properties. When an object gets a request of a property that it does not have, it's prototype will be searched for the property, then the prototype's prototype and so on.
- It can be thought of a tree like structure with `Object.prototype` at it's root. It provides a few methods that show up on all objects.
- `Object.getPrototypeOf()` returns the prototype of an object.
- We can use `Oject.create` to create an object with a specific prototype.

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

- A class defines the shape of a type of object -- what methods and properties it has. Such an object is called an **instance** of the class.
- Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods. Properties that differ need to stored directly in the objects themeselves.
- To create an instance of a given class we need `constructor` method:

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

- Constructors (all functions, in fact) automatically get a property named `prototype`, which by default holds a plain, empty object that derives form `Object.prototype`. We can overwrite it with a new object if we want. Or we can add properties to the existing object, as the exaple does.
- By convention the names of the constructors are capitalized.
- It is important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with `Object.getPrototypeOf`). The actual prototype of a constructor is `Function.prototype` since constructors are functions. Its prototype property holds the prototype used for instances created through it.

### Class Notation

```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

- The method named `constructor` provides the actual constructor function which will be bound to the name `Rabbit`. The other methods are bound to that constructor's prototype. Thus earlier class declaration is equivalent to the constructor definition form the previous section.
- Class declarations currently only allow methods--properties that hold functions to be added to the prototype. For now, we can create such property by directly manipulating the prototype after we've defined the class.
- Like `function`, `class` can be used both in statements and expressions. When used as expression, it returns the constructor as a value.

  ```javascript
  let object = new class {
    getWord() {
      return "hello";
    }
  }();
  console.log(object.getWord());
  // -> hello
  ```

### Overriding Derived Properties

- When we add a property to an Object, whether it is present in the prototype or not, the property is added to the object itself. If there was a property with the same name in the prototype, it will get overwritten for this object.

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

- Overriding can be useful to express exceptional properties in an instance of a more generic class of objects, while letting no exceptional objects take a standard value from their prototype.
- Overriding is also useful for giving standard function and array prototypes a different `toString` method:

  ```javascript
  console.log(Array.prototype.toString == Object.prototype.toString);
  // → false
  console.log([1, 2].toString());
  // → 1,2
  ```

### Maps

- A `map` is a data structure that associates values (the keys) with other values. We can create maps using objects:

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

- Object property names must be string. If we need a map whose keys are not strings - such as objects- we can not use objects in our map.
- JavaScript comes with a class called `Map` that is written for this exact purpose. It stores a mapping and allows any type of keys.

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

- The method `get`, `set` and `has` are part of the interface of the `Map` object.
- If we do have a plain object the we need to treat as a map for some reason, it is useful to know that `Object.keys` returns only an object's own keys, not those in the prototype. As an alternative to the `in` operator, we can use the `hasOwnProperty` method, which ignores the object's prototype.

  ```javascript
  console.log({ x: 1 }.hasOwnProperty("x"));
  // -> true
  console.log({ x: 1 }.hasOwnProperty("toString"));
  // -> false
  ```

### Polymorphism

- When a piece of code is written to work with objects that have a certain interface, any kind of object that happens to support this interface can be plugged into the code, and it will just work.

  ```javascript
  class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }

  Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit.`;
  };

  whiteRabbit = new Rabbit("white");
  blackRabbit = new Rabbit("black");

  console.log(String(blackRabbit));
  // -> a black rabbit.
  console.log(String(whiteRabbit));
  // -> a white rabbit.
  ```

  This technique is called **polymorphism**.

- Polymorphic code can work with values of different shapes, as long as they support the interface it expects.
- The `for/of` loop can loop over several kinds of data structures. This is another case of polymorphism-- such loops expect the data structure to expose a specific interface, which arrays and strings do. And we can add this interface to our own objects!

### Symbols

- It is possible for multiple interfaces to use the same property name for different things. For example, We could define an interface in which the `toString` method is supposed to convgert the object into a piece of yarn. It would not be possible for an object to conform to boht that interface and the standard use of `toString`.
- Symbols are values created with the `Symbol` function. Newly created symbols are unique and we can not create the same symbol twice.

  ```javascript
  let sym = Symbol("name");
  console.log(sym == Symbol("name"));
  // → false
  Rabbit.prototype[sym] = 55;
  console.log(blackRabbit[sym]);
  // → 55
  ```

- Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.

  ```javascript
  const toStringSymbol = Symbol("toString");
  Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
  };
  console.log([1, 2].toString());
  // → 1,2
  console.log([1, 2][toStringSymbol]());
  // → 2 cm of blue yarn
  ```

- It is possible to include symbol properties in object expressions and classes by using square brackets around property name. That causes the property name to be evaluated, much like square bracket property acces notation, which allows us to refer to a binding that holds the symbol.

  ```javascript
  let stringObject = {
    [toStringSymbol]() {
      return "a jute rope.";
    }
  };
  console.log(stringObject[toStringSymbol]());
  // -> a jute rope
  ```

### The Iterator Interface

- The object given to a `for/of` loop is expected to be iterable. This means that it has a method named with the `Symbol.iterator` symbol (a symbol value defined by the language, stored as a property of the `Symbol` function).
- When this method is called, it returns a second interface _iterator_. This is tha actual thing that iterates. It has `next` method that returns the next result. That result should be an object with a `value` property which provides the next value and a `done` property which indicates if the iteration is finished or not.

  ```javascript
  let okIterator = "OK"[Symbol.iterator]();
  console.log(okIterator.next());
  // → {value: "O", done: false}
  console.log(okIterator.next());
  // → {value: "K", done: false}
  console.log(okIterator.next());
  // → {value: undefined, done: true}
  ```

- Let's implement a iterable data structure. We will build a _matrix_ class acting as a two dimentional array.

  ```javascript
  class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content = [];
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.content[y * width + x] = element(x, y);
        }
      }
    }
    get(x, y) {
      return this.content[y * this.width + x];
    }
    set(x, y, value) {
      this.content[y * this.width + x] = value;
    }
  }
  ```

  This class stores it's content in a single array of `width*height` elements. There are `get` and `set` methods to update and retrieve the contents.

  We will have our iterator produce objects with `x`, `y`, and `value` properties.

  ```javascript
  class MatrixIterator {
    constructor(matrix) {
      this.x = 0;
      this.y = 0;
      this.matrix = matrix;
    }

    next() {
      if (this.y == this.matrix.height) return { done: true };
      let value = {
        x: this.x,
        y: this.y,
        value: this.matrix.get(this.x, this.y)
      };
      this.x++;
      if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
      }
      return { value, done: false };
    }
  }
  ```

  - The class tracks the progress of iterating over the matrix in it's `x` and `y` properties.
  - The `next` method starts by checking whether the bottom of the matrix has been reached. It it hasn't, it first creates the object holding the current value and _then_ updates it's position, moving to the next row if necessary.

  Now we can add this iterator object to our matrix class.

  ```javascript
  Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
  };
  ```

  Now, we can loop over the matrix with `for/of`:

  ```javascript
  let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
  for (let { x, y, value } of matrix) {
    console.log(x, y, value);
  }
  // → 0 0 value 0,0
  // → 1 0 value 1,0
  // → 0 1 value 0,1
  // → 1 1 value 1,1
  ```

### Getters, Setters & Statics

- Interfaces mostly consists of methods but it is also okay to include properties that hold non functional values. Properties that are acessed directly may hide a method call. Such methods are called _getters_. They are defined using the `get` keyword infront of method name in an object expression or class declaration.

  ```javascript
  class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() {
      return this.celsius * 1.8 + 32; //Convert to Fahrenheit
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8; //Convert to celsius
    }
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
  }

  let temp = new Temperature(22);
  console.log(temp.fahrenheit); //convert to fahrenheit
  // -> 71.6
  temp.fahrenheit = 86; //convert to celsius
  console.log(temp.celsius);
  // -> 30
  ```

- The `Temperature` class allows us to read and write the temperature in either Celsius or Fahrenheit, but iternally it stores only in Celsius and automatically converts Celsius in the `fahrenheit` getter and setter.
- Sometimes we want to attach some properties directly to our constructor function, rather than to the prototype. Such methods won’t have access to a class instance but can, for example, be used to provide additional ways to create instances. Inside a class declaration, methods that have `static` written before their name are stored on the constructor.

### Inheritance

- JavaScript's prototype system makes it possible to create a _new_ class, much like the old class, but with new definitions for some of its properties. The prototype for the new class derives form the old prototype but adds a new definition for, say, the `set` method. In Object Oriented Programming (OOP) terms, this is called _inheritance_. The new class inherits properties and behavior from the old class.

  ```javascript
  class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
      super(size, size, (x, y) => {
        if (x < y) return element(y, x);
        else return element(x, y);
      });
    }

    set(x, y, value) {
      super.set(x, y, value);
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }

  let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
  console.log(matrix.get(2, 3));
  // → 3,2
  ```

  - The use of word `extend` indicates that this class shouldn't be directly based on the default Object prototype but on some other class. This is called the _superclass_. The derived class is _subclass_.
  - To initialize a `SymmetricMatrix` instance, the constructor calls it superclass's constructor through the `super` keyword. To ensure that the matrix is symmetrical, the constructor wraps the `content` method to swap the coordinates for values below the diagonal.
  - The `set` method again uses `super` but this time not to call the constructor but to call a specific method from the supercalss's set of methods. We are redifining `set` but we want to use the original behavior. **Becaue `this.set` refers to the _new_ `set` method, calling that wouldn't work**.
  - Inside class methods, `super` provides a way to call methods as they were defined in the superclass.

### The Instanceof Operator

- It is occasionally useful to know whether an object was derived from a specific class. JavaScript provides a binary operator called `instanceof` for this purpose:

  ```javascript
  console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
  // -> true

  console.log(new SymmetricMatrix(2, 2) instanceof Matrix);
  // -> true
  console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
  // → false
  console.log([1] instanceof Array);
  // → true
  ```

---

---

## Project: A Robot

### Persistent Data

- Data structures that don't change are called _immutable_ or _persistent_. They behave a lot like strings and numbers in that they are who they are and stay that way, rather than containng different things at diffenrent tiems.
- In JavaScript, there is a function called `Object.freeze` that changes an object so that writing to its properties is ignored!!!

  ```javascript
  let object = Object.freeze({ value: 5 });
  object.value = 10;
  console.log(object.value);
  // -> 5
  ```

---

---

## Bugs & Errors

Flaws in computer programs are usually called _bugs_. It makes programmer feel good to think of them as little things that just happen to crawl into our work. It reality, ofcourse we put them there. The process of finding mistakes -- bugs -- in programs is called _debugging_.

### Strict Mode

- JavaScript can be made a _little_ stricter by enabling _strict mode_.
- This is done by putting the string `"use strict"` at the top of afile or a function body.

  ```javascript
  function caYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
      console.log("Happy happy");
    }
  }

  canYouSpotTheProblem();
  // -> ReferenceError: counter is not defined
  ```

- Normally when we forget to put `let` infront of a binding, JavaScript automatically creates a global binding and uses that which can be problematic. Using strict mode prevents this problem.
- Strict mode prevents us from using `this` binding in functions that are not methods. It holds the `undefined` value for functions that are not methods. Usually when making such a call outside of strict mode, `this` refers to the global scope object, which is an object whose properties are the global bindings.

  ```javascript
  function Person(name) {
    this.name = name;
  }
  let ferdinand = Person("Ferdinand"); // oops
  console.log(name);
  // → Ferdinand
  ```

  So, the bogus call to `Person` succeeded but returned an undefined value and created the global binding `name`. In strict mode it is different:

  ```javascript
  "use strict";
  function Person(name) {
    this.name = name;
  }
  let ferdinand = Person("Ferdinand"); // forgot new
  // → TypeError: Cannot set property 'name' of undefined
  ```

- In short, putting `"use strict"` at the top of our program rarely hurts and might help us spot a problem.

### Testing

- Automated testing is the process of writing a program that tests another program. Writing tests is a bit more work than testing manually, but once we've done it, we gain a kind of superpower: it takes us only a few seconds to verify that our program strill behaves properly in all the situations we wrote test for.
- Tests usually take the from of little labeled programs that verify some aspect of our code.

  ```javascript
  function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
  }
  test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
  });
  test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
  });
  test("don't convert case-less characters", () => {
    return "ࢎ࠶߈ఆ௷".toUpperCase() == "ࢎ࠶߈ఆ௷";
  });
  ```

- There are pieces of software that hellps in building and running colections of tests by providing a labguage suited to expressing tests and by outputting informative information when a tet fails. These are called **_test runners_**.

### Debugging

- Onece we have noticed there is something wrong with our program because it misbehaves or produces errors, the next step is to figure out what the problem is. This is knows as _debugging_.
- Sometimes it is obvious, because there is a message pointing to a specific line on the code where the error has occured.
- But, error in the logic or thought can not be debugged by this. To debug logical errors, we can use `console.log` to print out values at different parts of the code to pin point where the problem occured.
- Another alternative to `console.log` is using `debugger` capabilities of our browser. Browsers come with the ability to set a _breakpoint_ on a specific line of our code. When the execution of the program reaches a line with a breakpoint, it is paused, and we can inspect the values of bindings at that point.
- Another way of including breakpoints is to include a `debugger` statement (consisting of simply that keyword) in our program. If the developer tools of our browser are active, the program will pause whever it reaches such a statement.

### Exceptions

- When a function cannot proceed normally, what we would _like_ to do is just stop what we are doing and immediately jump to a place that knows how to handle the problem. This is what **_exception handling does_**.
- Exceptons are mechaisms that makes it possible for code that runs into a problem to _raise_ (or _throw_) an exception.
- An exception can be any value. Raising one somewhat resembles a super-charged return from a function: it jumps out of not just the current function but also its callers, all the way down to the first call that started the current execution. This is called _unwinding the stack_.
- Once we’ve caught an exception, we can do something with it to address the problem and then continue to run the program:

  ```javascript
  function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
  }
  function look() {
    if (promptDirection("Which way?") == "L") {
      return "a house";
    } else {
      return "two angry bears";
    }
  }
  try {
    console.log("You see", look());
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
  ```

- The `throw` keyword is used to raise an exception. Catching one is done by wrapping a piece of cod ein a `try` block, bollowed by the keyword `catch`.
- When the code in the `try` block causes an exception to be raised, the `catch` block is evaluated, with the name in parentheses bound to the exception value. After the `catch` block finishes—or if the `try` block finishes without problems—the program proceeds beneath the entire `try/catch` statement.
- In this case, we use the `Error` constructor to create our exception value. This is a standard JavaScript constructor that creates an object with a `message` property. In most JavaScript environments, instances of this constructor also gather information about the call stack that existed when the exception was created, a so-called _stack trace_. The information is stored in the `stack` property and can be useful when trying to debug a problem: it tells us the function where the problem occurred and which functions made the failing call.
- The `try` statements may be followed by a `finally` block either instead of or in addition to a `catch` block. A `finally` block says "no matter _what_ happens, run this code after trying to run the code in the `try` block."

  ```javascript
  function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
      accounts[from] -= amount;
      progress = 1;
      accounts[getAccount()] += amount;
      progress = 2;
    } finally {
      if (progress == 1) {
        accounts[from] += amount;
      }
    }
  }
  ```

### Selective Catching

- When an exception makes it all the way to the bottomof the stack without being `caught`, it gets handled by the environment.
  - In browsers, a decription of the error typically gets written to the JavaScript console.
  - In _Node.js_, the browserless JavaScript environment, is more careful about data corruption. It aborts the whole process when an unhandled exception occurs.
- Invalid uses of the language, such as referencing a nonexistent binding, looking up a property on `null`, or calling something that’s not a function, will also result in exceptions being raised. Such exceptions can also be caught.
- When a `catch` body is entered, all we know is that _simething_ in our `try` body caused an exception. But we don't know _what_ did or _which_ exception it caused.
- JavaScript doesn't provide direct support for selectively catching exceptions: either we catch them all or we don't catch any. This makes it tempting to assume that the exception we got is the one we expected. But, we might be wrong and some other assumptions might be violated.
- We have to check inside the `catch` block, whether the exception we got is the one we are interested in, otherwise we can rethrow the exception.
- To recognize an exception, we could compare it's _message_ property against the error message we happen to expect. But that's a shaky way to write code. Rahter we should use a new type of _error_ and use `instanceof` to identfy it.

  ```javascript
  class InputError extends Error {}
  function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
  }
  ```

  The new error class extends `Error`. It doesn’t define its own constructor, which means that it inherits the `Error` constructor, which expects a string message as argument. In fact, it doesn’t define anything at all—the class is empty. `InputError` objects behave like `Error` objects, except that they have a different class by which we can recognize them.

  ```javascript
  for (;;) {
    try {
      let dir = promptDirection("Where?");
      console.log("You chose ", dir);
      break;
    } catch (e) {
      if (e instanceof InputError) {
        console.log("Not a valid direction. Try again.");
      } else {
        throw e;
      }
    }
  }
  ```

  This will catch only instances of `InputError` and let unrelated exceptions through. If we reintroduce the typo, the undefined binding error will be properly reported.

### Assertion

- Assertions are checks inside a program that verify that something is the way it is supposed to be. They are used not to handle situations that can come up in normal uperation but to find programmer mistakes.
- If, for exaple, `firstElement` is described as a function that should never be called on empty arrays, we might write it like:

  ```javascript
  function firstElement(array) {
    if (array.length == 0) {
      throw new Error("firstElement called with []");
    }
    return array[0];
  }
  ```

  Now, instead of silently returning undefined (which we get when reading an array property that does not exist), this will loudly blow up our program as soon as we misuse it. This makes it less likely for such mistakes to go unnoticed and easier to find their cause when they occur.

---

---

## Regular Expressions

_Regular expressions_ are a way to describe patterns in string data. They form a small, separate language that is part of JavaScript and many other languages and systems.

### Creating Regular Expressions

- A regular expression is a type of object. It can be either constructed with the `RegExp` constructor or written as a literal value by enclosing a pattern in forward slash `/` characters.

  ```javascript
  let re1 = new RegExp("abc");
  let re2 = /abc/;
  ```

  In the second notation (using forward slash `/`), the backslashes are treated differently:

  - Since forward slash ends a pattern, we need to put backslash before any forward slash that are part of the pattern.
  - Backslashes that aren’t part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern.
  - SOme characters such as quetion marks and plus signs, have special meanings in regular expressions and must be preceded by backslash if they are meant to represent the character itself.

    ```javascript
    let eighteenPlus = /eighteen\+/;
    ```

### Testing for Matches

- Regular expressions objects have a number of methods. The simplest one is `test`. If we pass it a string, it will return a Boolean telling us whther the string contains a match of the pattern in the expression:

  ```javascript
  console.log(/abc/.test("abc"));
  // -> true
  console.log(/abc/.test("abxua"));
  // -> false
  ```

A regular expression consisting of only nospecial characters simply represent that sequence of characters. If in occurs anywhere withing the `test` string, it will return `true`.

### Sets of Characters

- Putting a set of characters between square brackets makes that part of the expression match any the characters between the brackets. Both of the following expressions match all strings that have a digit in it:

  ```javascript
  console.log(/[0123456789]/.test("in 1992"));
  // → true
  console.log(/[0-9]/.test("in 1992"));
  // → true
  ```

  - Within square brackets hyphens `-` between two characters can be used to indicate a range of characters where the ordering is determined by the character's Unicode number.

- A number of common character groups have their own built-in shortcuts. `\d` means the same thing as `[0-9]` :

  - `\d` Any digit character
  - `\w` An alphanumeric character ("word character")
  - `\b` Zero or more words containing alphanumeric characters
  - `\s` Any whitespace character (space, tab, newline, and similar)
  - `\D` Any character that is not a digit
  - `\W` A non-alphanumeric character
  - `\S` A non-whitespace character
  - `.` Any character except for newline.
  - `^` Any character that is not in the empty set of characters.

  So we could match a date and time format like 01-30-2003 15:20 with the following expression:

  ```javascript
  let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
  ```

  - The backslashed codes can be used inside square brackets. For example, `[\d.]` matches any digits followed by a dot.
    - Inside square brackets `.` and `+` operators loose their special meaning.
  - To invert a set of characters we can write a caret `^` character after the opening bracket.

    ```javascript
    let notBinary = /[^01]/;
    console.log(notBinary.test("1100100010100110"));
    // → false
    console.log(notBinary.test("1100100010200110"));
    // → true
    ```

### Repeating Parts of A Pattern

- `+` sign after something in a regular expression, indicates that the element may be repeated more than once. Thus, `/\d+/` matches one or more digit characters.

  ```javascript
  console.log(/'\d+'/.test("'123'"));
  // → true
  console.log(/'\d+'/.test("''"));
  // → false
  console.log(/'\d*'/.test("'123'"));
  // → true
  console.log(/'\d*'/.test("''"));
  // → true
  ```

- `*` sign has similer meaning. It also allows a pattern to match zero times. Something with a star after it never prevents a pattern from matching, it'll just match zero instances if it can't find any suitable text to match.
- `?` operator makes a part of a pattern _optional_, meaning it may occur zero times or one time.

  ```javascript
  let neighbor = /neighbou?r/;
  console.log(neighbor.test("neighbour"));
  // → true
  console.log(neighbor.test("neighbor"));
  // → true
  ```

- To indicate that a pattern should occur a precise number of times, we need to use braces. Putting `{n}` after an element requirs it to occur exactly `n` times. It is also possible to specify ranges this way: `{a, b}` means the element must occur atleast `a` times and atmost `b` times.

- We can also specify open ranges when using braces by omitting the number after the comma, So `{n, }` means `n` or more times.

Anoter version of date and time pattern that allows both single and double digit days, months and hours:

```javascript
let dateTime = /\d{1,2}-\d{1,2}-d{4} \d{1,2}:\d{2}/;
```

### Grouping Subexpressions

- To use an operator like `*` or `+` on more than one element at a time, we have to use parentheses. A part of regular expression that is enclosed in parentheses count as a single element as fas as the operators following it are concerned.

  ```javascript
  let cartoonCrying = /boo+(hoo+)+/i;
  console.log(cartoonCrying.test("Booooooohooooooooooohooooooooooohooooooooo"));
  // -> true
  ```

- Using `i` at the end of regular expressions make them case insensetive.

### Matche & Groups

- The `test` method only tells whether a string matched or not, nothing else.
- The `exec` method will return `null` when no match is found, otherwise will return an object with information if match was found.

  ```javascript
  let match = /\d+/.exec("one two 100");
  console.log(match);
  // -> ["100"]
  console.log(match.index);
  // -> 8
  ```

  - Object returned from `exec` has an `index` property that tells us where the match was found.
  - Otherwise the object looks like and ifact is an array of strings, whose first element is the string that was matched.
  - `String` valuse have a similer `match` method

    ```javascript
    console.log("one two 100".match(/\d+/));
    // → ["100"]
    ```

  - When a regular expressions have a subexpression enclosed by parentheses, the text that matched those groups will also show up in the array.

    ```javascript
    let quotedText = /'([^']*)'/;
    console.log(quotedText.exec("she said 'hello'"));
    // → ["'hello'", "hello"]
    ```

    The whole matche string is the first element. The next element is the part matched by the first group, then the second group and so on.

    - When a group does not end up being matched at all (for example, when followed by a question mark), its position in the output array will hold `undefined`. Similarly, when a group is matched multiple times, only the last match ends up in the array.

      ```javascript
      console.log(/bad(ly)?/.exec("bad"));
      // → ["bad", undefined]
      console.log(/(\d)+/.exec("123"));
      // → ["123", "3"]
      ```

    - Groups can be useful for extracting parts of a string. If we don’t just want to verify whether a string contains a date but also extract it and construct an object that represents it, we can wrap parentheses around the digit patterns and directly pick the date out of the result of `exec`.

### The Date Class

- JavaScript has a standard date class to represent dates -- or rather points in time. I is called `Date`.
- If we create a new date object using `new` we will get current date and time.

  ```javascript
  console.log(new Date());
  // current time
  ```

- We can also create object for a specific time.

  ```javascript
  console.log(new Date(2009, 11, 9));
  // → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
  console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
  // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
  ```

- JavaScript uses a convention where month numbers start at zero (so December is 11), yet day numbers start at one.
- The last four arguments (hours, minutes, seconds, and milliseconds) are optional and taken to be zero when not given.
- Timestamps are stored as the number of milliseconds since the start of 1970, in the UTC time zone. This follows a convention set by “Unix time”, which was invented around that time. You can use negative numbers for times before 1970. The `getTime` method on a date object returns this number.

  ```javascript
  console.log(new Date(2013, 11, 19).getTime());
  // → 1387407600000
  console.log(new Date(1387407600000));
  // → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
  ```

- We can pass single argument to `Date` constructor, that will be treated as milliseconds.
- We can get current millisecond count by creating a new `Date` object and calling `getTime` on it or by calling `Date.now` function.
- Date objects provide methods such as `getFullYear`, `getMonth`, `getDate`, `getHours` , `getMinutes`, and `getSeconds` to extract their components.
- Putting parentheses around the parts of the expression that we are interested in, we can now create a date object from a string.

  ```javascript
  function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
  }
  console.log(getDate("1-30-2003"));
  // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
  ```

### Words & String Boundaries

- If we want to match a pattern with the whole string, not just any part of the string, we should use carret `^` and dollar `$` sign, where carret matches the start of the string and dollar matches the end of the input string. So,
  - `/^\d+$/` matches a string consisting entirely of one or more digits.
  - `/^!/` matches any string that starts with `!` sign.
  - `/x^/` does not mach any string, because there can be no `x` before the start of the string.
- If we want to make sure the date starts and ends on a word boundary, we can use the marker `\b`. A word boundary can be the start or end of the string or any point in the string that has a word character (as in `\w`) on one side and a nonword character on the other.

  ```javascript
  console.log(/cat/.test("concatenate"));
  // → true
  console.log(/\bcat\b/.test("concatenate"));
  // → false
  console.log(/\bcat\b/.test("co432n cat 432enate"));
  // -> true
  ```

### Choice Patterns

- The pipe character (`|`) denotes a choise between the pattern to it's left and the pattern to it's right.

  ```javascript
  let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
  console.log(animalCount.test("15 pigs"));
  // -> true
  console.log(animalCount.test("15 pigchickens"));
  // -> false
  ```

- Parentheses can be used to limit the part of the pattern that the pipe operator applies to, and we can put multiple such operators next to each other to express a choice between more than two alternatives.

### The Replace Method

- String values have a `replace` method that can be used to replace part of the string with another string.

  ```javascript
  console.log("papa".replace("p", "m"));
  ```

  The first argument can also be a regular expression, in which case the first match of the regular expression is replaced.

- We can add a `g` option at the end of the regular expression to make the function replace all matches in the string, not just the first.

  ```javascript
  console.log("Borobudur".replace(/[ou]/, "a"));
  // -> Barobudur
  console.log("Borobudur".replace(/[ou]/g, "a"));
  // -> Barabadar
  ```

- We can refer to the matched groups in the replacement strings

  - `$1` is used to refer to the first group that matched the string
  - `$2` is used to refer to the second group that matched and so on, up to `$9`.
  - `$&` is used to refer to the whole matched string.

  ```javascript
  console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
      /(\w+), (\w+)/g,
      "$2 $1"
    )
  );
  // → Barbara Liskov
  // John McCarthy
  // Philip Wadler
  ```

- It is possible to pass a fucntion rather than a string as the second argument to `replace`. For each replacement, the function will be called with the matched groups(as well as the whole match) as arguments, and it's return value will be inserted into the new string.
  - Small example:
    ```javascript
    let s = "the cia and fbi";
    console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));
    // → the CIA and FBI
    ```
  - More interesting example:
    ```javascript
    let stock = "1 lemon, 2 cabbages, and 101 eggs";
    function minusOne(match, amount, unit) {
      amount = Number(amount) - 1;
      if (amount == 1) {
        // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
      } else if (amount == 0) {
        amount = "no";
      }
      return amount + " " + unit;
    }
    console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
    // → no lemon, 1 cabbage, and 100 eggs
    ```

### The Search Method

- The `indexOf` method on strings cannot be called with a regular expression.
- The `search` method is alternative to `indexOf` which supports regular expressions. It returns the first index on which the expression was found, or `-1` when it wasn't found.

```javascript
console.log(" word".search(/\S/));
// → 2
console.log(" ".search(/\S/));
// → -1
```

- Unfortunately, there is no way to indicate that the match should start at a given offset.

### The LastIndex Property

- Regular exprssion object have `source` property which contains the string that expression was created from.
- Another property is `lastIndex` which controls where the next match will start. There are some conditions that should be met:

  - The regular expression must have the global (`g`) or sticky (`y`) option enabled.
  - Match must happen through `exec` method.

  ```javascript
  let pattern = /y/g;
  pattern.lastIndex = 3;
  let match = pattern.exec("xyzzy");
  console.log(match.index);
  // → 4
  console.log(pattern.lastIndex);
  // → 5
  ```

  If the match was successful, the call to `exec` automatically updates the `lastIndex` property to point after the match. If no match was found, `lastIndex` is set back to zero, which is also the value it has in a newly constructed regular expression object.

  The difference between the global and the sticky options is that, when sticky is enabled, the match will succeed only if it starts directly at `lastIndex`, whereas with global, it will search ahead for a position where a match can start.

  ```javascript
  let global = /abc/g;
  console.log(global.exec("xyz abc"));
  // -> ["abc"]
  let sticky = /abc/y;
  console.log(sticky.exec("xyz abc"));
  // → null
  ```

  - When useing shared regular expression which is global for multiple `exec` calls, these automatic updates to the `lastIndex` property can cause problems. Our regular expression might be accidentally starting at an index that was left over form a previous call.

    ```javascript
    let digit = /\d/g;
    console.log(digit.exec("here it is: 1"));
    // -> ["1"]
    console.log(digit.exec("and now: 1"));
    // -> null
    ```

  - Another interesting effect of the global option is that it changes the way the `match` method on strings works. When called with a global expression, instead of returning an array similar to that returned by `exec`, `match` will find all matches of the pattern in the string and return an array containing the matched strings.

    ```javascript
    console.log("Banana".match(/an/g));
    // → ["an", "an"]
    ```

  - Global regular expressions should only be used in case of `repalce` method.

### Looping Over Matches

- A common thing to do is to scan through all occurrences of a pattern in a string, in a way that gives us access to the match object in the loop body. We can do this by using `lastIndex` and `exec`.

  ```javascript
  let input = "A string with 3 numbers in it... 42 and 88.";
  let number = /\b\d+\b/g;
  let match;
  while ((match = number.exec(input))) {
    console.log("Found", match[0], "at", match.index);
  }
  // → Found 3 at 14
  // Found 42 at 33
  // Found 88 at 40
  ```

  This makes use of the fact that the value of an assignment expression (`=`) is the assigned value. So by using `match = number.exec(input)` as the condition in the `while` statement, we perform the match at the start of each iteration, save its result in a binding, and stop looping when no more matches are found.

---

---

## Modules

### Module

- A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (it's interface).
- The interfaces of modules have a lot in common with object interfaces. They make part of the module available to the rest of the workd and keep the rest private.
- The relation between modules are called _dependencies_.
- To separate the modules, each needs it's own private scope, just putting the modules into different files does not satisfy the requirements. The files share the same global namespace and they can intentionally or unintentionally interfere with each other's bindings.

### Packages

- Advantage of modular programming is that the modules can be reused.
- A package is a chunk of code that can be distributed (copied and installed).
- A packege contains one or more modules and also information about which other packeges it depends on.
- A package also usulally comes with documentation explaining what it does so that people can reuse it.
- Working this way requires infrastructure. This infrastructure is provided by [NPM](https://npmjs.org).

### Inporvised Modules

- We can use JavaScript functions to create local scopes and objects to represent module interfaces.

```javascript
const weekDay = (function() {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    }
  };
})();
console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday
```

- This style of modules provides isolation, to a certain degree, but it does not declare dependencies.

### Evaluating Data as Code

There are several ways to take data (a string of code) and return it as part of the current program:

- We can do it using an `eval` operator, which will execute a string in the _current_ scope. It is usually a bad idea, because it breaks some of the properties that scopes normally have.

  ```javascript
  const x = 1;
  function evalAndReturnX(code) {
    eval(code);
    return x;
  }

  console.log(evalAndReturnX("var x = 2"));
  // ->
  console.log(x);
  // -> 1
  ```

- Another way is to use the `Function` constructor. It takes two arguments: a string containing a comma-separated list of argument names and a string containing the function body. It wraps the code in a function value so that it gets it's own scope.

  ```javascript
  let plusOne = Function("n", "reutrn n+1;");
  console.log(plusOne(4));
  // ->5
  ```

### CommonJS

- The most widely used approach towards bolted-on JavaScript modules is called _CommonJS_ modules. Node.js uses it and is the system used by most packages on NPM.
- The main concept in _CommonJS_ module is a function called `require`. When we call this wiht the module name of a dependency, it makes sure the module is loaded and returns it's interface.
- We can use `exports` to bind interfaces to objects, which can be used by other modules.
- The follwoing example moduel provides a date-formatting function. It uses two packages from NPM:

  - `ordinal` to convert numbers to string like "1st" and "2nd".
  - `date-names` to get the English names for weekdays and months.

  It exports a single function `formatDate`, which takes a `Date` object and a template string.

  ```javascript
  const ordinal = require("ordinal");
  const { days, months } = require("date-names");
  exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
      if (tag == "YYYY") return date.getFullYear();
      if (tag == "M") return date.getMonth();
      if (tag == "MMMM") return months[date.getMonth()];
      if (tag == "D") return date.getDate();
      if (tag == "Do") return ordinal(date.getDate());
      if (tag == "dddd") return days[date.getDay()];
    });
  };
  ```

  The module adds it's interface function to `exports` so that modules that depend on it get access to it. We could use the module like:

  ```javascript
  const { formatDate } = require("./format-date");
  console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
  // -> Friday the 13th
  ```

  We can define `require` in the most minimal form, like this:

  ```javascript
  require.cache = Oject.create(null);

  function require(name) {
    if (!(name in require.cache)) {
      let code = readFile(name);
      let module = { exports: {} };
      require.cache[name] = module;
      let wrapper = Function("require, exports, module", code);
      wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
  }
  ```

  In this code, `readFile` is a made-up function that reads a file and returns it's contents as a string.

### ECMAScript Modules

- The _CommonJs_ modules work quite well in combination with NPM, but they are a bit of a duct-tape hack. The notation is slightly awkward.
- This is why in 2015 _ES modules_ were introduced in JavaScript. Here, _ES_ statnds for **ECMAScript**.
- Instead of calling a function to access the dependencies, we can use a special `import` keyword.

  ```javascript
  import ordinal from "ordinal";
  import { days, months } from "date-names";

  export function formatDate(date, format) {
    /* ... */
  }
  ```

- Similarly, the `export` keyword is used to export things. It may appear in front of a `function`, `class`, `binding` definintion (`let`, `const` or `var`).
- An ES module's interface is not a single value but a set of named bindings. When we import from another module, we import the _binding_, not the value, which means the exporting module may change the value of the binding at any time, and the modules that import them will see the new value.
- There is a binding named `default`, it is treated as the module's main exported value. To create a `default` export we write `export default` before and expression, a function declaration, or a class declaration.

  ```javascript
  export default ["Winter", "Spring", "Summer", "Autumn"];
  ```

- It is possible to rename imported bindings using the word as:

  ```javascript
  import { days as dayNames } from "date-names";
  console.log(dayNames.length);
  // -> 7
  ```

- ES module imports start before the module's script starts runnig. That is why they can not be imported inside functions or blocks and the names of dependencies nust be quoted strings, not arbitary expressions.

### Building & Bundling

- In a modular program which consists of 200 files in a web page, if each files takes 50 miliseconds to fetch, loading the entire web page would take 10 seconds. Because fetching a single file tends to be faster than fetching a lot of tiny ones, web programmers have started using tools that roll their program (slip into modules) back into a single big file before they publish in to the web, such tools are called _bundles_.
- Apart from the number of files, the _size_ of the files also determines how fast they can be transfered over the network. Thus the JavaScript community use _minifiers_,which remove any extra whitepsaces, comment lines, remanes bindings, and replaces pieces of code with equivalent code that take up less space.

---

---

## Asynchronous Programming

### Asynchronicity

- In _synchronous_ programming model, things happen one at a time. When we call a function with a long running action, it returns only when the action is finished and it can return the result.
- In _asynchronous_ model, it allows multiple things to happedn at the same time. When we start an action, our program continues to run. When the action finishes, the program is informed and gets access to the result.
- A _thread_ is another running program whose execution may be interleaved with other programs by the operating system. We use the concept of _threads_ in _asynchronous_ programs.
- _Asynchronous_ cuts both ways. It makes expressing programs that do not fit the straight-line model of contrl easiesr, but it can also make expressing programs that do follow a straght line more awkward.

### Callbacks

- One approach to aynchronous programming is to make functions that perform a slow action take an extra argument, a _callback function_. The action is started, and when it finishes, the callback function is called with the result.
- Performing multiple asynchronous actions in a row using callbacks means that we have to keep passing new functions to handle the continuation of the computation after the actions.
- Communication is established using the _request-response_ pairs. That means one node sends a message to another node, which then immediately sends a message back, confirming receipt and possibly including a reply to a question asked in the message.
- Each message is tagged with a _type_, shich determines how it is handled. We can define _handlers_ for specific request types, and when such a request comes in, the handler is called to produce a response.

### Promises

- A _promise_ is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when it's value is available.
- The easiest way to create a promise is by calling `Promise.resolve`. This function ensures that the value we give it is wrapped in a promise. If it's already a promise, it in simply returned.

  ```javascript
  let fifteen = Promise.resolve(15);
  fifteen.rhen(value -> console.log(`Got ${value}`));
  // -> Got 15
  ```

- To get the result of a promise, we can use it's `then` method. This registers a callback function to be called when the promise resolves and produces a value.
- The `then` method returns another promise, which resolves to the value that the handler function returns or, if that returns a promise, waits for that promise and then resolves to it's result.
- It is useful to think of promises as a device to move values into an asynchronous reality. A normal value is isimply htere. A promised value is a value that _might_ already be there or might appear at some point in the future.
- We can also create a promise using `Promise` as a constructor. It expects a function as argument, which it immediately calls, passing it a function that it can use to resolve the promise.

  ```javascript
  function storage(nest, name) {
    return new Promise(resolve => {
      nest.readStorage(name, result => resolve(result));
    });
  }
  storage(bigOak, "enemies").then(value => console.log("Got", value));
  ```

### Failure

- In asynchronous computations often need something like exception handling. A network request may fial, or some code that is part of the asynchronous conputation may throw an exception.
- In the callback style of asynchronous programming it is extrmely difficult to make sure failures are properly reported to the callbacks.
- A widely used convention is that:

  - The first argument to the callback is used to indicate that the action failed
  - The second contains the value produced by the action when was successful.

  Such callback functions must always check whether they received an exception and make sure that any probkems they casuse, including exceptions thrown by functions they call, are caught and given to the right function.

- Promises make this easier. They can be either resolved (the action finished successfully) or rejected (it failed). Resulve handlers (as registered with `then`) are called only when the action is successful, and rejections are automatically propagated to the new promise that is returned by `then`.
- Much like resolving a promise provides a vlue, rejecting one also provides one, usually called the _reason_ of th rejection. When an exception in a handler function causes the rejection, the exception value is used as the reason. It can be passed from promise to promise. There is a `Promise.reject` function that creates a new, immediately rejected promise.
- Promises have a `catch` method that expolicitly hnadles such rejections.
- As a shorthand, `then` also accepts a rejection handler as a second argument, so we can install both types of handlers in a single method call.
- A function passed to the `Promise` constructor receives a second argument, alongside the resolve function, **which it can use to reject the new promise**.

  ```javascript
  new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
      console.log("Caught failure " + reason);
    })
    .then(value => console.log("Handler 2", value));
  // -> Caught failure Error: Fail
  // -> Handler 2 nothing
  ```

### Collections of Promises

- When working with collections of promises running at the same time, the `Promise.all` function can be useful. It retruns a pormise that waits for all of the promises in the array to resolfve and then resolves to an array of the values that these promises produced ( in the same order as the original array). If any promise is rejected, the result of `Promise.all` is itself rejected.

  ```javascript
  requestType("ping", () => "pong");

  function availableNeighbors(nest) {
    let requests = nest.neighbors.map(neighbor -> {
      return request (nest, neighbor, "ping").then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
      return nest.neighbors.filter((_,i) => result[i]);
    });
  }
  ```

### Generators

- JavaScript has a feature callled _generator_ functions which are similar, but without the promises.
- When we define a function with function\* (placing an asterisk after the word function), it becomes a generator.
- When we call a generator it automatically returns an iterator.

```javascript
function* powers(n) {
  for (let current = n; ; current *= n) {
    yield current;
  }
}
for (let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}
// → 3
// → 9
// → 27
```

- Initially, when we call `powers`, the function is frozen at its start. Every time we call `next` on the iterator, the function runs until it hits a `yield` expression, which pauses it and causes the yielded value to become the next value produced by the iterator. When the function returns (the one in the example never does), the iterator is done.

### The Event Loop

- Asynchronous programs are executed piece by piece. Each piece may start some actions and schedule code to be executed when the action finishes or fails. In between these pieces, the program sits idle, waiting for the next action.
- Callbacks are not directly called by the code that scheduled them. If we call `setTimeout` from within a function, that function will have returned by the time the callback function is called. And when the callback returns, control does not go back to the function that scheduled it.
- Asynchronous behavior happends on it's own empty function call stack. This is onw of the reasons that, without promises, managing exceptions across asynchronous code is hard.
- JavaScript environment runs only one program at a time. We can think of this as it running a big loop _around_ our program, called the **_event loop_**. When there's nothing to be done, that loop is stopped. But as events come it, they are added to a _**queue**_, and their code is executed one after the other.
- Promises always resolve or reject as a **new event**. Even if a promise is already resolved, waiting for it will cause our callback to run after the current script finishes, rather that right away.

---

---

## JavaScript and the Browser

### Networks and the Internet

- Computers communicate over the internate by shooting chunks of bits at eachother. _Protocols_ are used to describe the style of communication. There are protocols for sending and receiving emails(SMTP, POP3), sharing files (FTP).
- Similerly the _protocol_ used for fetching HTML web pages is known as _Hypertext Transter Protocol_(HTTP). It specifies that thte side making the request should start with a line like this, naming the resource and the version of the protocol that it is trying to use:

  ```js
  GET /index.html HTTP/1.1
  ```

- HTTP treats Networks as a stramlike device into which you can put bits and have them arrive at the correct destinmation in the correct order. Ensuring this is a difficult task. This problem is addressed by _Transmission Control Protocol_ (TCP). Almost all the Internet-connected devices "speak" it.

### The Web

- The _World Wide Web_ (WWW) is not to be confused with the whole internet but rather it is the set of protocols and formats that allow us to visit web pages in a browser.
- To become part of the Web, all we need to do is connect a machine to the Internet and have it listen on port 80 with the HTTP protocol so that other computers can ask it for documents.
- Each document in the Web is named by a _Uniform Resource Locator_ (URL), which look something like this:

  ```js
  http:// eloquentjavascript.net/13_browser.html
  ```

- Machines connected to the internet get an IP address using which we can address it to send a message.
- IP addresses ar numbers which are hard to remember, so we use URL instead of IP addresses and the URL gets mapped to IP address by the DNS server.

### HTML

- HTML, which stands for _Hypertext Markup Language_, is the document format used for web pages.
- An HTML document contains text, as well as _tags_ that give structure to the text, describing things such as links, paragraphs, and headings.

Example of HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>
      I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.
    </p>
  </body>
</html>
```

### HTML and JavaScript

- The `<script>` tag allows us to include JavaScript code in HTML documents.

  ```html
  <h1>Testing alert</h1>
  <script>
    alert("hello!");
  </script>
  ```

- Such script will run as soon as the browser encounters the `<script>` tag while it is reading the HTML document.
- Including large scripts can be impractical so the `<script>` tag be used wiht `src` attribute to link an external JavaScript file:

  ```html
  <h1>Testing alert</h1>
  <script src="code/hello.js"></script>
  ```

- We can load ES modules in the browser by giving the `<script>` tag a `type="module"` attribute. Such modules can depend on other modules by using URLs relative to themselves.
- Some attributes my also contain JavaScript programs. The `<button>` tag has an `onclick` attribute. The attributes value will run whenever the button is pressed.

  ```html
  <button onclick="alert('Boom!');">DO NOT PRESS</button>
  ```

### In the Sandbox

- Running a program from the internet is potentially dangerous as it can harm the computer.
- Browsers prevent this by running the program in an enclosed environment which is called _Sandbox_.
- It prevents programs to prevent altering or modifying the computer's internal files and programs.
- The ahrd part of sandboxing is allowing the programs enough room to be useful yet at the same time restricting them from doing anything dangerous.

---

---

## The Document Object Model

When a web page is opened by the browser, it retrievees the page's HTML text and parses it. The browser builds up a model of the document's structure and uses this model to draw the page on the screen.

### Document Structure

- HTML Documents can be thought of a set of nested boxes. Tags such as `<body>` and `</body>` enclose other tags, which in turn contain other tags or text.
- For each box, there is an object in JavaScript, which we can interact with to find out things such as what HTML tag it represents and which boxes and text it contains.
- This representation is known as the _**Document Object Model**_.
- The **global** binding `Document` gives us access to these objects.
- It's `documentElement` property refers to the object representing the `<html>` tag. It also has `head` and `body` property which points to those elements in the HTML.

### Trees

- The _Document Object Model_(DOM) has a tree like structure.
- Each _node_ may refer to ohter nodes, _children_, which in turn may have their own children.
- The root of the tree is `Document.documentElement`.
- Each _node_ represents an Element of the HTML document. These can have child nodes which are nested elements.
- Each DOM node object has a `nodeType` property, which contains a code(number) that identifues the type of node.
  - Elements have code 1
  - Text nodes have code 3
  - Comments have code 8 and so on.

### Moving Through the Tree

- DOM nodes containa wealth of links to other nearby nodes.
- Every node has a `parentNode` property that ponits to the node it is part of, if any.
- Every element node has a `childNodes` property that points to an array like object holding it's childern.
- The `firstChild` and `lastChild` properties point to the first and last child elements or have the value `null` for nodes without children.
- Similerly `previousSibling` and `nextSibling` point to adjacent nodes, which are nodes of with the same parent that appear immediately before or after the node itself. For first child, `previousSibling` will be `null` and for last child `nextSibling` will be `null`.
- There is another property `children` similer to `childNodes` which contain an array of element nodes, not other type of nodes.
- The `nodeValue` property of text nodes holds the string of text that it represents.

The following example scans a document for text nodes containing a given string and returns _true_ when it has found one:

```javascript
function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}
console.log(talksAbout(document.body, "book"));
// → true
```

### Finding Elements

- All Elements have a `getElementsByTagName` method, which collects all elements with the given tag name that are descendants (direct or indirect children) of that node and returns them as an array-like object.

  ```js
  let link = document.body.getElementsByTagName("a")[0];
  console.log(link.href);
  ```

- To find a specific _single_ node, we can assign it an **id** attribute and use `document.getElementById` instead.

  ```html
  <p>My ostrich Gertrude:</p>
  <p><img id="gertrude" src="img/ostrich.png" /></p>

  <script>
    let ostrich = document.getElementById("gertrude");
    console.log(ostrich.src);
  </script>
  ```

* A third similer method is `getElementsByClassName`, which is like `getElementsByTagName`, searches through the entire document and retrueves all elements that have the given sttring in their `class` attribute.

### Changing the Document

- Almost everything about the DOM data structure can be changed. The shape of the document tree can be modified by changing parent-child relationships.
- Nodes have a `remove` method to remove them from their current parent node.
- To add a child node to an element node, we can use `appendChild`, which puts it as the last child of the parent node.
- We can use `insertBefore` to insert an element before anther element. The new node is the first argument and the existing node is the second argument.

  ```html
  <p>One</p>
  <p>Two</p>
  <p>Three</p>

  <script>
    let paragraphs = document.body.getElementsByTagName("p");
    document.body.insertBefore(paragraphs[2], paragraph[0]);
  </script>
  ```

- A node can exist in the document at only one place, so every replace operation first deletes the node from the document and re-adds it at the specified place.
- The `replaceChild` method is used to replace a child node with another node. The first argument is the replacer and the second argument is the node to be replaced with must be a child of the element the method is called on.

### Creating Nodes

- Text nodes are created using `document.getTextNode` method. The following code will remove all the elements with `img` tag with text containing it's `alt` value:

  ```html
  <p>
    The <img src="img/cat.png" alt="Cat" /> in the
    <img src="img/hat.png" alt="Hat" />.
  </p>
  <p><button onclick="replaceImages()">Replace</button></p>
  <script>
    function replaceImages() {
      let images = document.body.getElementsByTagName("img");
      for (let i = images.length - 1; i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
          let text = document.createTextNode(image.alt);
          image.parentNode.replaceChild(text, image);
        }
      }
    }
  </script>
  ```

  **It is necessary to loop through the images in reverse order.** THe method like `getElementsByTagName` is _live_. It gets updated as the document changes.
  We can change this by creating a _non live_ array by using the `Array.from` method.

- To create element nodes, we can use the `createElement` method. This method takes a tag name and returns a new empty node of the given type.

### Attributes

- Most commonly used standard attributes of HTML elements can be accessed by property of the same name on the element's DOM object.
- HTML allows us to set any attributes we want on elements. This allows us to store more information on the elements, but they are not accessible as properties of the element's DOM object. We have to use `getAttribute` and `setAttribute` methods to work with them.

  ```html
  <p data-classified="secret">The launch code is 00000000.</p>
  <p data-classified="unclassified">I have two feet.</p>
  <script>
    let paras = document.body.getElementsByTagName("p");
    for (let para of Array.from(paras)) {
      if (para.getAttribute("data-classified") == "secret") {
        para.remove();
      }
    }
  </script>
  ```

- It is recomended to prefix the names of the madeup attributes with `data-` to ensure they do not conflict with any other attributes.
- The attribute `class` is a keyword in JavaScript, so to refer to this attribute we have to use `className` property. We can access it under it's real name using `getAttribute` and `setAttribute` methods.

### Layout

- The `offsetWidth` and `offsetHeight` properties gives us the space the element takes in pixels.
- Similerly, `clientWidth` and `clientHeight` gives us the size of the space _inside_ the element, ignoring the border width. to ensure they do not conflict with any other attributes.
- The `getBoundingClientRect` method returns an object with `top`, `bottom`, `left`, and `right` properties indicating pixel positions of the sides of the element relative to top left of the screen. If we want them relative to the whole document we must add the current scroll position, which we can find in the `pageXOffset` and `pageYOffset` bindings.
- A program that repeatedly alternames between reading DOM layout information and changing the DOM forces a lot of layout computations to happen and will cosequently run very slowly.
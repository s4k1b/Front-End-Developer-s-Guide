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
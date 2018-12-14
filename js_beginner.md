# JavaScript Note

## Values, Types and Operators

### Numberes

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

* `&&` operator works similerly but other way around.
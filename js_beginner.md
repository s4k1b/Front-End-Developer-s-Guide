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
Using `${}` inside string enclosed by backticks will produse embedded result of the operation mesioned inside `${}`

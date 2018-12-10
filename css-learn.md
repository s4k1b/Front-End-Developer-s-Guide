# CSS Note

Source : <strong> Rachel Andrew - The CSS3 Anthology 4th Edition - 2012 </strong>

___
___

<table id = "index" style="text-align:center;background-color:#f0f0f0;">

## INDEX

<tr>

<td><a href = "#ch1">Chapter 1</a></td>
<td><a href = "#ch2">Chapter 2</a></td>
<td><a href = "#ch3">Chapter 3</a></td>

</tr>

<table>

___
___

### KEYNOTES

* Inline styles have one major disadvantage: it’s impossible to reuse them. Additionally, because inline styles are located within the page’s markup, it makes the code difficult to read and maintain.
* Another approach for applying CSS styles to your web pages is to use the style element:

```html
<style>
⋮ CSS styles go in here…
</style>
```

The style tags are placed inside the head element, and while it’s nice and simple

* An external stylesheet is a file (usually given a .css filename) that contains a website’s CSS styles, keeping them separate from any one web page. Multiple pages can link to the same .css file, and any changes you make to the style definitions in that file will affect all the pages that link to it.

To link a document to an external stylesheet (say, styles.css), we simply place a link
element within the document’s head element:

```html
<link rel="stylesheet" href="style.css" />
```

___
___

<h1 id = "ch1">Chapter 1</h1>
<a href = "#index" style = "border:2px solid #0099cc; border-radius:5px; padding:5px;color:white;background-color:#0099cc;float:right;">Go to INDEX </a>

## Basic Structure

___


### CSS Syntax

A style sheet is a collection of style definitions. Every CSS style definitions has two main components:

* A list of one or more selectors, separated by commas, define the element or elements to which the style will be applied.
* The declaration block, separated by curly braces {..} , specifies what the rule atually does.

```css
h1, h2 {
font-family: "Times New Roman", Times, serif;
color: #3366cc;
}
h1, h2 {
font-family: "Times New Roman", Times, serif; color: #3366cc;
}
```

### CSS Selectors

Selectros are used to target a particular bit of markup on the page that we wish to style. This can range from targeting a particular HTML element to targeting an element which is in a particular state. The following example selects all the `h1` and `h2` elements in the page:

```css
h1, h2 {
font-family: Times, "Times New Roman", serif;
color: #3366CC;
}
```

There are many types of selectors:

#### Type Selector

It is the most basic form of selector:

```css
h1 {
font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif;
font-size: 1.2em;
color: #000000;
}
```

Here we’ve set the font, size, and color for all h1 elements in the document.

#### Class Selector

It is used if we want to assign different styles to identical elements that occur in various places throughout the page. At first we assign a class to the identical elements:

```html
<h2 class = "sidebar" > This text will be white, as specified by the CSS style definition below. </h2>
```

Then, write sytle for that class:

```css
h2 {
color: #0000ff;
}
.sidebar {
color: #ffffff;
}
```

#### ID Selector

In contrast to Class selectors, ID selectors are used to style a single element:

```html
<p id="tagline">This paragraph is uniquely identified by the ID
"tagline".</p>
```

```css
#tagline {
color: #ffffff;
}
```

#### Combinators

Combinators are special characers that are placed between two simple selectors to create a selector that is more capable of targetting a precise part of the document.

##### Descendant Selector

The descendant selector mathces an element that descent from a specified element. The combinator used here is a white space.

```html
<div class="sidebar">
<h2>A heading in white</h2>
<h2>Another heading in white</h2>
</div>
```

```css
.sidebar h2 {
color: #ffffff;
}
```

##### Child Selector

Unlike Descendant selectors which match all elements that are direct or indirect descendents of a specified element, the Child selector match only the direct descendents. Combinator used here is the `>` sign:

```html
<div class="sidebar">
<p>This paragraph will be displayed in white.</p>
<p>So will this one.</p>
<div class="tagline">
<p>If we use a descendant selector, this will be white too.
But if we use a child selector, it will be blue.</p>
</div>
</div>
```

* Descendant selector `.sidebar <p>` will select all `<p>` under `.sidebar` including the `<p>` under `.tagline`.

* Child selector `.sidebar > <p>` will only select the `<p>` under `.sidebar`.

```css
p {
color: #0000FF;
}
.sidebar>p {
color: #ffffff;
}
```

##### Adjacent Selector

Adjacent selector will match all elements that are adjacent to a specified element. The combinator used here is the `+` character.

```html
<div class = 'sidebar'>
      <p> This paragraph will be red</p>
      <p> This paragraph will be red</p>
      <div class = 'tagline'>
         <p>THis paragraph will be black</p>
      </div>
   </div>
   <p>This is adjacent element</p>
   <p> This is not adjacent element</p>
```

```css
.sidebar+p {
   color: green;
}
```

##### Pseudo-class Selector

A pseudo-class selector acts as if an element has a class applied according to the state of that element. Pseudo-class selectors start with a colon and are usually added immediately after a type selector with no additional whitespace.

###### Links

```css
a:link {
color: #0000ff;
}
a:visited {
color: #ff00ff;
}
a:hover {
color: #00ccff;
}
a:active {
color: #ff0000;
}
```

* First definition sets the color of the link element when it is not visited.

* If it is visited, then the second rule is used

* If the user hovers over the link the third rule is used.

* If the link is activated then the fourth rule is used.

The `hover` and `active` classes are dynamic. **`active` class should be defined at the very last, otherwise it will overwrite the other classes.**

###### First Child

Targets the element that is the first child of a target element:

```html
<div class = 'article'>
   <p>This is First child</p>
   <p>This is Second child</p>
   <p>This is Third child</p>
   <p>This is Last child</p>
</div>
```

```css
.article p{
   font-size: 1.5em;
   font-weight: bold;
}

.article p:first-child {
   color: #0088aa;
}
```

###### Last Child

Selects the last child of a specified element:

```css
.article p:last-child {
   color: #0099cc;
}
```

###### Nth Child

The nth-child pseudo-class selector lets you select multiple elements according to their position in the document tree.

```css
tr:nth-child(odd) td {
background-color: #f0e9c5;
}
```

```css
.artice p:nth-child(2n+1) {
   color:#0099cc;
}
```

###### Only Child

The only-child pseudo-class selector will select an element if it’s the only child of its parent. For example, if I have in my markup the following two lists—the first having three list items and the second having one:

```html
<ul>
<li>Item one</li>
<li>Item two</li>
<li>Item three</li>
</ul>
<ul>
<li>A single item list - not really a list at all!</li>
</ul>
```

The CSS declaration below would only match the list item in the second list, as it matches where the li is an only child of the parent ul:

```css
li:only-child {
list-style-type: none;
}
```

##### Pseudo-element Selectors

Pseudo-elements operate as if we've added new HTML markup into your page and then styled that markup. In the CSS3 specification, `pseudo-elements` are denoted with a double colon; for example, `p::first-letter`.

###### Fisrt Letter

```css
.article p:nth-child(even)::first-letter{
   font-size: 3em;
   color:red;
}
```

It works like adding a `<span>` element to the first letter and styling the span element.

###### First Line

In the same way `first-letter` selects the first letter within a container, `first-line`
selects the first line:

```css
.wrapper:first-line {
font-size: 200%;
font-weight: bold;
}
```

It is more flexible than using `<span>` element because we do not know when the first line will end due to the variations in users window size.

###### Before

The before pseudo-element is used along with the content property to specify where generated content should be rendered. Generated content is content that’s rendered in the document from CSS.

```html
<div class="article">
<p>Hello World!</p>
</div>
```

```css
.article::before {
content: "Start here";
}
```

When viewed in a browser, this will render the words “Start here” just inside the opening `div` element—that’s before the first `p`.

###### After

Just like `before` , content is rendered after the parent element:

```css
.article::after {
content: "Start here";
}
```

#### Attribute Selectors

Attribute selectors let you target an element based on an attribute. As an example of an attribute on an HTML element, we can look at the a element, which creates a link. Attributes on the following link are href and title:

```html
<a href="http://google.com" title="Visit Google">Google</a>
<a href="http://github.com" title="Visit Github">Google</a>
```

```css
a[title="Visit Github"] {
   color:red;
}
```

___
___

<h1 id = 'ch2'>Chapter 2</h1>
<a href = "#index" style = "border:2px solid #0099cc; border-radius:5px; padding:5px;color:white;background-color:#0099cc;float:right;">Go to INDEX </a>

## Text styling and Other Basics

___

```css
p {
font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
}
```

Here, we’ve specified that if Verdana is installed on the system, it should be used; otherwise, the browser is instructed to see if Geneva is installed; failing that, the computer will look for Arial, then Helvetica. If none of these fonts are available, the browser will then use that system’s default sans-serif font.

If a font-family name contains spaces, it should be enclosed in quotation marks, like so:

```css
p {
font-family: "Courier New", "Andale Mono", monospace;
}
```

The list of fonts are often termed as "**font stack**".

### Set Font Size

We can use `font-size` property to set the font size of a text:

```css
font-size: 12px;
```

This property can take a variety of values. Their relative merits are shown in the follwoing table:

|Unit Identifier|Corresponding Units|
|---------------|-------------------|
|pt|points|
|pc|picas|
|px|pixels|
|em|ems|
|ex|exes|
|%|percentage|

* **Points and Picas**

We should avoid using Points and Picas in web design but they are excellent for print design.

```css
p {
   font-size : 10pt;
}
```

* **Pixels**

Using pixels makes it easy to achieve consistent text displays across various browsers and platforms. However, pixel measurements ignore any preferences users may have set in their own browsers; furthermore, in the case of Internet Explorer, font sizes that the designer has dictated in pixels cannot to be resized by users.

* **Ems**

Em is relative measurement. It is related to the letter 'M' as it is the widest letter.
It is relative to the user's default font size or the font size of the parent element when it's value is something other than default.

```css
p {
   font-size: .9em;
}
```

This sets the font size 10% smaller than the default font size.

```css
p {
   font-size: 1.1em;
}
```

This sets the font size 10% larger than the default font size.

* **Exes**

The ex is a relative unit measurement that corresponds to the height of the lowercase letter x in the default font size. In theory, if we set the font size of some text to 1ex, the uppercase letters will display at the height at which the lowercase letter x would have appeared if the font size had been unspecified. Furthermore, the lowercase letters will be sized relative to those uppercase letters.

* **Percentage**

As with ems and exes, font sizes that are set in percentages will honor users’ text size settings and can be resized by users:

```css
p {
font-size: 100%;
}
```

### Sizing Fonts using Keywords

* xx-small
* x-small
* small
* medium
* large
* x-large
* xx-large

These keywords are defined relative to eachother. Most browsers use `medium` as the default value of unstyled text size.

### Remove large text gap between `h1` element and the following paragraph

To remove all space between a heading and the paragraph that follows it, you must remove the bottom margin from the heading  as well as the top margin from the paragraph. To remove the top margin of the following paragraph we can use `adjacent selectors`. Adjacent selectors can be chained together to specify and element that follwos several other elements instead of just one.

```css
h1 {
font: 1.6em Verdana, Geneva, Arial, Helvetica, sans-serif;
margin-bottom: 0;
}
h1+p {
margin-top: 0;
}
```

### Spacing Between Text lines

We can use the `line-height` property to define the spacing between text lines in a paragraph:

```css
p {
   font: 1em Verdana, Geneva, Ariall, Helvatica, sans-serif;
   line-height: 2.2;
}
```

Here, the unit of measurement is not specified because the value 2.2 is a ratio. We can specify any CSS measurement units but using ratio is recomended.

### Justify Text

We can use the `text-align` property to justify text.

```css
p {
   text-align: justify;
}
```

Other values of `text-align` are:

|Value|Function|
|-----|--------|
|right|aligns the text to the right of the container|
|left|aligns the text to the left of the container|
|center|aligns the text in the center of the container|

### Indent Text

We can use `text-indent` to indent the text:

```css
p {
   text-indent: 1.5em;
}
```

It indents the first line of the paragraph.
To indent the whole paragraph we can use `padding-left` property.

### Change Text to All Capitals or Lowers

We can use the `text-transform` property to do this:

```css
p {
   text-transform; uppercase;
}
```

|Value|Function|
|:-----:|:--------:|
|uppercase|Transform whole text into capital letters|
|capitalize|Transform first letter of each word into capital|
|lowercase|Transform whole text into lower case letters|
|none|Do nothing|

### Create a drop-caps Effect

Making the first letter in a paragraph larger—a simple drop-capitals effect—is easily achieved with CSS. We can use the `first-letter` pseudo-id selector:

```css
p::first-letter {
   font-size:200%;
}
```

### Shadow Effect

We can use the `text-shadow` property to add shadow to the text:

```css
h1 {
font-size: 250%;
color: #256579;
text-shadow: 3px 3px 3px #999;
}
```

Syntax for the `text-shadow` is:

```css
text-shadow: 5px, 5px, 5px, #09c
```

The first value is the value of the horizontal distance, the second value is the value of the vertical distance, the third value is the radius of the blus effect or the measure of spread and the fourth value is the color.

### List Bullets

We can use `list-style-type` property to change or remove the bullets form the list items:

|Value|Function|
|-----|--------|
|none|Removes the bullets|
|disc|Change to disc|
|circle|Change to circle|
|decimal-leading-zero|Change to decimal number with leading zeros|
|decimal|Change to decimal numbers|
|lower roman| Change to lower roman numbers|
|upper roman| Change to upper roman numbers|
|lower alpha| Change to lower case alphabet|
|upper alpha| Change to upper case alphabets|

#### Use Image for a list-item bullet

We can use `list-style-image` property to set our bullets to images rather than `image-style-type`.

```css
ul {
list-style-image: url(bullet.gif);
}
```

#### Remove the indented left-hand margin

We can use the `padding-left` and `margin-left` property to remove the left-hand margin from the list items:

```css
ul {
list-style-type: none;
padding-left: 0;
margin-left: 0;
}
```

#### Display list horizontally

We can allign the list elements horizontally by modifying the `display` property of the `<li>` elements of the list. We can set it to `inline` to display the elements horizontally.

```css
ul.nav li {
display: inline;
}
```

### Remove default padding and margins from all elements

```css
* {
margin: 0;
padding: 0
}
```
 
 (*) is the universal selector. If the design is complex, then this is the best way to start.

### Use fonts other than those installed on user's computers

We can use fonts by loading them from the web:

``` css
@font-face {
font-family: KaffeesatzBold;
src: url(YanoneKaffeesatz-Bold.ttf);
}
h1 {
font-family: KaffeesatzBold, sans-serif;
font-weight: normal;
}
```

The `@font-face` rule declares the name of the font, then enables us to load in a font file that’s on our server with the `src` property. We can then just use this font in our font-family list as we would any other font.

___
___

<h1 id = 'ch3'>Chapter 3</h1>
<a href = "#index" style = "border:2px solid #0099cc; border-radius:5px; padding:5px;color:white;background-color:#0099cc;float:right;">Go to INDEX </a>

## Images and Other Design Elements

___

### Set Background of a Page

We can set the background image of a page by using the `background-image` property and also we can set a background color of a page by adding a `background-color` property. 

```css
body {
background-color: #333;
background-image: url(brushed_alu_dark.png);
color: #fff;
margin: 0;
padding: 0;
font: 0.75em/1.3 "Lucida Grande", "Lucida Sans Unicode",
"Lucida Sans", Verdana, Tahoma, sans-serif;
}
.wrapper {
width: 80%;
margin: 20px auto 40px auto;
background-color: #fff;
color: #333;
}
```

* By default the background image is set to `tile`.
* To prevent background from repeating we can use `background-repeat: no-repeat;`
* To repreat background along x axis: `background-repeat: repeat-x;`
* To repeat background along y axis: `background-repeat: repeat-y;`
* We can position the background image by using the `background-postion` property. It can take the following values:

   * `top left`
   * `top center`
   * `top right`
   * `center left`
   * `center center`
   * `center right`
   * `bottom left`
   * `bottom center`
   * `bottom right`

* We can use percentage values to accurately position the background image. This approach is particularly useful in a layout where other page elements are specified in percentages, so that they resize in accordance with the user’s screen resolution and dimensions. This becomes particularly important when creating responsive designs:

   ```css
   background-position: 30% 80%;
   ```

   The first of the percentages refers to the background’s horizontal position; the second dictates its vertical position. Percentages are taken from the top-left corner of the display, with 0% 0% placing the top-left corner of the image against the top-left corner of the browser window, and 100% 100% placing the bottom-right corner of the image against the bottom-right corner of the window.

* We can also use unit values to postion the background:

   ```css
   background-position: 20px 20px;
   ```

   As with percentages, the first of the specified values dictates the horizontal position, while the second dictates the vertical. But unlike percentages, the measurements directly control the position of the top-left corner of the background image.
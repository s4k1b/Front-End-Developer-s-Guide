# HTML Note
Source (http://www.w3schools.com/html/)

## Navigation
___
<table>
<tr>
<td><a href="#ch1">HTML Basics</a></td>
<td><a href="#ch11">HTML Elements</a></td>
<td><a href="#ch12">HTML Attributes</a></td>
<td><a href="#ch2">HTML Headings</a></td>
<td><a href="#ch3">HTML Paragraphs</a></td>
<td><a href="#ch4">HTML Styles</a></td>
</tr>
<tr>
<td><a href="#ch5">HTML Formatting</a></td>
<td><a href="#ch6">HTML Quotation & Citation</a></td>
<td><a href="#ch7">HTML Comments</a></td>
<td><a href="#ch8">HTML Colors</a></td>
<td><a href="#ch9">HTML CSS</a></td>
<td><a href="#ch10">HTML Links</a></td>
</tr>
</table>

___
<p id = "ch1"></p>

## HTML Basics
---
### Basic Structure

Simple HTML code

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```
We can see that basic HTML documents consists of the following basic elements,
* The `<!DOCTYPE html>` declaration defines this document is HTML5
* The `<html>` element is the root element of an HTML page
*The `<head>` element is contains *meta information* ( Metadata and meta tags refer to the title and description of a web page that are encoded into the page but not actually displayed on the screen with the page. ) about the document
* The `<title>` element specifies a title for the document
* The `<body>` element contains the **visible page** content

Inside the body there are **HTML Tags**. HTML tags are element names surrounded by angle brackets:
```html
<tagname> content goes here...<\tagname>
```
* HTML tags normally come in pairs like `<p>` and `</p>`
* The first tag in a pair is the **start tag**, the second tag is the **end tag**
* The end tag is written like the start tag, but with a forward slash inserted before the tag name
The purpose of a web browser (Chrome, IE, Firefox, Safari) is to read HTML documents and display them.

The browser does not display the HTML tags, but uses them to determine how to display the document. Only the content inside the `<body>` section is displayed in a browser.
___

### HTML Headings
HTML heading are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading and `<h6>` defines the least important heading.
```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>

___

### HTML Paragraphs
HTML paragraphs are defined with the `<p>` tag.
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

___

### HTML Links
HTML links are defined with `<a>` tag
```html
<a href="https://github.com"> This is a link</a>
```
<a href="https://github.com"> This is a link</a>
The link destination is specified by the *href* **attribute**. Attribures are used to provide additional information about HTML elements.

___
### HTML Images
HTML images are defined with the `<img>` tag. The source file (`src`), alternative text (`alt`), `width`, and `height` are provided as **attributes**.
```html
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
```
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">

___
### HTML Buttons
HTML buttons are defined with `<button>` tags.
```html
<button>Click me</button>
```
<button>Click me</button>

___
### HTML Lists
HTML lists are defined with the `<ul>` (unordered/bullet list) or the `<ol>` (ordered/numbered list) tag, followed by `<li>` tags (list items).
```html
<ul>
    <li>C++</li>
    <li>Java</li>
    <li>Python</li>
</ul>
```
<ul>
    <li>C++</li>
    <li>Java</li>
    <li>Python</li>
</ul>

___
___
<p id = "ch11"></p>

## HTML Elements
An HTML element is everything from the start tag to the end tag.
| Start tag | Element Content | End tag |
|-----------|:---------------:|--------:|
|`<h1>`|My First Heading|`</h1>`|
|`<p>`|My First Paragraph|`</p>`|
___
###Nested HTML Elements
HTML elements can be nested. All HTML documents consists of nested HTML elements.
```html
<!DOCTYPE html>
<html>
    <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

    </body>
</html>
```
The `<h1>` and `<p>` elements are nested inside `<body>` element and it is inturn nested inside `<html>` element.

___
___
<p id = "ch12"></p>

## HTML Attributes

* All HTML elements can have attributes.
* Attributes provide **additional information** about an element.
* Attributes are always specified in **the start tag**.
* Attributes usually come in name/value pairs like: **name="value"**.

There are many types of attributes:
* `href` is used with `<a>` tags and used for specifying addresses.
* `src` is used with `<img>` tags and used for specifying the image source.
* `width` and `height` attributes are used for specifying width and height of the image.
* `alt` attribute specifies the text to be used when the iamge can not be displayed.
* The `style` attribute is used to specify the styling of an element, like color, font, size etc.
* `lang` attribute declares the language of the document and is declared inside `<html>` tag. eg. `<html lang = "en-US">`. Declaring a language is important for accessibility applications (screen readers) and search engines.
* `title` attribute is added to the `<p>` element. The value of the `title` attribute will be displayed as a **tooltip** when you mouse over the paragraph.

A list of all HTML attributes is given [here](https://www.w3schools.com/tags/ref_attributes.asp).

___
___
<p id = "ch2"></p>

## HTML Headings

Search engines use the heading to index the structure and content of an web page.
Example of different headings:
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

Browser automatically adds some white space (a margin) before and after a heading.
___
### Bigger headings
Each HTML Heading has it's own default size. However we can make in bigger using `style` attribute. Eg:
```html
<h1 style = "font-size:50px;">Heading 1</h1>
```
<h1 style = "font-size:50px;">Heading 1</h1>

___
### HTML Horizontal Rules
The `<hr>` tag is used to separate content in an HTML page. It displayes a horizontal line. Example:
```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
```
The line is very much similer to what is seen through out the document (line just below this text).
___
### HTML <head> Element
The `<head>` element is a container for metadata. HTML metadata is data about the HTML document. Metadata is not displayed. It is placed between the `<html>` tag and the `<body>` tag:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My first HTML</title>
        <meta charset = "UTF-8">
    </head>
    <body>
    .
    .
    .
    </body>
</html>
```
Metadata typically defines the document title, charset, styles, links, scripts and other meta information.

___
### Summery
<table class="w3-table-all notranslate">
<tbody><tr>
  <th>Tag</th>
  <th>Description</th>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_html.asp">&lt;html&gt;</a></td>
  <td>Defines the root of an HTML document</td>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_body.asp">&lt;body&gt;</a></td>
  <td>Defines the document's body</td>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_head.asp">&lt;head&gt;</a></td>
  <td>A container for all the head elements (title, scripts, styles, meta information, and more)</td>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_hn.asp">&lt;h1&gt; to &lt;h6&gt;</a></td>
  <td>Defines HTML headings</td>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_hr.asp">&lt;hr&gt;</a></td>
  <td>Defines a thematic change in the content</td>
</tr>
</tbody></table>

___
___
<p id = "ch3"></p>

## HTML Paragraphs
The HTML `<p>` defines a paragraph. Browsers automatically add some white space (a margin) before and after a paragraph.
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

The output of the HTML code can not be changed by adding extra spaces or extra lines. The browser removes extra spaces and lines. This is known as the ***Poem problem***. To solve this problem we need **The HTML `<pre>` element.

Most browsers will display HTML correctly even if we forget the **end tag** but it is recomended to remember adding it at the end.

___
## HTML Line Breaks
The HTML `<br>` element defines a line break. It is used if we want to break a line without starting a new paragraph.
```html
<p>This is<br>a paragraph<br>with line breaks.</p>
```
<p>This is<br>a paragraph<br>with line breaks.</p>

The `<br>` tag is an **empty tag**, which means that it has no end tag.

___
### The HTML \<pre> Element
The HTML `<pre>` element defines preformatted text. The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:
```html
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>

___
### Summery
<table class="w3-table-all notranslate">
<tbody><tr>
 <th>Tag</th>
 <th>Description</th>
</tr>
<tr>
  <td><a href="http://www.w3schools.com/tags/tag_p.asp">&lt;p&gt;</a></td>
  <td>Defines a paragraph</td>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_br.asp">&lt;br&gt;</a></td>
  <td>Inserts a single line break</td>
</tr>
<tr>
  <td><a href="http://www.w3schools.com//tags/tag_pre.asp">&lt;pre&gt;</a></td>
  <td>Defines pre-formatted text</td>
</tr>
</tbody></table>

___
___
<p id = "ch4"></p>

## HTML Styles
The `style` attribute sets the style of the HTML elements. It has the following syntax:
```html
<tagname style = "property:value;">
```
The **Property** is a CSS property and the **Value* is a CSS value. Basically we can write a CSS code inside the `style` tag. Some examples of different style elements is given below:
* Use `background-color` for changing the element's background color. Eg:
```html
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
```

* Use `color` for text colors.
```html
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```
* Use `font-family` for text fonts.
```html
<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
```
* Use `font-size` for text sizes.
```html
<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
```
* Use `text-align` for text alignment.
```html
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
```

___
___
<p id = "ch5"></p>

## HTML Formatting

HTML also defines special elements for defining text with a special meaning. HTML uses elements like `<b>` and `<i>` for formatting output, like bold or italic text. Formatting elements were designed to display special types of text.
Example template:
```html
<p>This is <formatting_tag> formatted </formatting_tag> text</p>
```
The following table shows all the formatting commands and their outputs:
<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:20%">Tag</th>
<th>Description</th>
<th>Output</th>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_b.asp">&lt;b&gt;</a></td>
<td>Defines bold text</td>
<td><b>This text is bold</b></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_em.asp">&lt;em&gt;</a></td>
<td>Defines emphasized text&nbsp;</td>
<td><em>This text is emphasized</em></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_i.asp">&lt;i&gt;</a></td>
<td>Defines italic text</td>
<td><i>This text is italic</i></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_small.asp">&lt;small&gt;</a></td>
<td>Defines smaller text</td>
<td><small>This text is Small</small></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_strong.asp">&lt;strong&gt;</a></td>
<td>Defines important text</td>
<td><strong>This text is strong</strong></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_sub.asp">&lt;sub&gt;</a></td>
<td>Defines subscripted text</td>
<td><p>This is <sub>subscripted</sub> text</p></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_sup.asp">&lt;sup&gt;</a></td>
<td>Defines superscripted text</td>
<td><p>This is <sup>superscripted</sup> text</p></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_ins.asp">&lt;ins&gt;</a></td>
<td>Defines inserted text</td>
<td><p>This is <ins>inserted</ins> text </p></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_del.asp">&lt;del&gt;</a></td>
<td>Defines deleted text</td>
<td><p>This is <del>deleted</del> text</p></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_mark.asp">&lt;mark&gt;</a></td>
<td>Defines marked/highlighted text</td>
<td><p>This is <mark>marked</mark> text</p></td>
</tr>
</tbody></table>

___
___
<p id = "ch6"></p>

## HTML Quotation & Citation

The HTML quotation and citation provides a way to insert quoted texts and citations inside paragraphs.
Example template:
```html
<p>This is <quotation_tag> Quoted or Cited </quotation_tag> text</p>
```
The following table shows all the quotation and citation commands and their outputs:
<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:20%">Tag</th>
<th>Description</th>
<th>Output</th>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_abbr.asp">&lt;abbr title=" "&gt;</a></td>
<td>Defines an abbreviation or acronym</td>
<td><p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_address.asp">&lt;address&gt;</a></td>
<td>Defines contact information for the author/owner of a document</td>
<td><address>
Written by John Doe.<br> 
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_bdo.asp">&lt;bdo dir="rtl"&gt;</a></td>
<td>Defines the text direction (Bi-Directional Override). It writes text in reverse order</td>
<td><bdo dir="rtl">This text will be written from right to left</bdo></td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_blockquote.asp">&lt;blockquote cite=" "&gt;</a></td>
<td> Defines a section that is quoted from another source</td>
<td><p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote></td>
</tr>
  <tr>
<td><a href="http://www.w3schools.com/tags/tag_cite.asp">&lt;cite&gt;</a></td>
<td>Defines the title of a work</td>
<td><p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p></td>
  </tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_q.asp">&lt;q&gt;</a></td>
<td>Defines a short inline quotation</td>
<td><p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
</td>
</tr>
</tbody></table>

___
___
<p id = "ch7"></p>

## HTML Comments

Comment tags are used to insert comments in the HTML source code. We can add comments to our HTML source code by using the following syntax:
```html
<! Comment here,.. -->
```
With comments we can place notifications and reminders in our HTML:
```html
<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->
```
Comments are also great for debugging HTML, because we can comment out HTML lines of code, one at a time, to search for errors:
```html
<!-- Do not display this at the moment
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
```

___
___

<p id = "ch8"></p>

## HTML Colors

HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values. HTML Supports [140 standard color names](https://www.w3schools.com/colors/colors_names.asp).

___
We can change color of three HTML elements:
* #### Background Color
```html
<h4 style = "backgorund-color:DodgerBlue;">Hello World</h4>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```
* #### Text Color
```html
<h4 style="color:Tomato;">Hello World</h4>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```

* #### Border Color
```html
<h3 style="border:2px solid Tomato;">Hello World</h3>
<h3 style="border:2px solid DodgerBlue;">Hello World</h3>
```

___
### Color Values
We can define color values in the following formats:
* **RGB Value:** `rgb(red, green, blue)`
* **HEX Value:** `#rrggbb`
* **HSL Value:** `hsl(hue, saturation%, lightness%)`
* **RGBA Value:** `rgb(red, green, blue, opacity(0-1))`
* **HSLA Value:** `hsl(hue, saturation%, lightness%, ,opacity(0~1))`

___
___

<p id = "ch9"></p>

## HTML CSS
CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.

CSS can be added to HTML elements in 3 ways:
* #### Inline CSS
An Inline CSS is used to apply unique style to a single HTML element.
```html
<h1 style="color:blue;">This is a blue heading</h1>
```
* #### Internal CSS
An internal CSS is used to define a style for a single HTML page. It is defined inside the `<head>` section.
```html
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
* #### External CSS
An external CSS style sheet is used to define style for many HTML Pages. **With an external style sheet, we can change the look of an entire web site, by changing one file!** To use it, we need the add the link to the style sheet in the `<head>` section.
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
An external style sheet can be written in any text editor. The file must not contain any HTML code, and must be saved with a .css extension. Example of how "styles.css" looks:
```css
body {
    background-color: powderblue;
}
h1 {
    color: blue;
}
p {
    color: red;
}
```

___
___
<p id = "ch10"></p>

## HTML Links
Links allow users to click their way from one page to another. HTML links are **hyperlinks**.
#### HyperLink vs link
<blockquote cite="https://www.quora.com/What-is-the-difference-between-Link-Hyperlink-and-URL?share=1">On the practical side, another difference is that a hyperlink control navigates directly to a target URL when a user clicks on it, instead of posting the form on the server. So if there is no work to be done in the server side, we can use hyperlink.

Using a link posts that form right to the server first, before going to the URL. Therefore, a link is the better choice for those who need to complete some server-side processing before heading to the final URL destination.

So for hyperlink, we will be directly hitting the URL

For link, the job is done in the server side first.</blockquote>
A HTML link does not have to be text. It can be an image or any other HTML element. HTML links are defined with `<a>` tag:
```html
<a href="url">link text</a>
```
Example:
```html
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
```
The example above used an absolute URL (a full web address).

A **local link** (link to the same web site) is specified with a relative URL (without https://www....).
Example:
```html
<a href="html_images.asp">HTML Images</a>
```
___

#### HTML Link Colors
By default a link is colored in the following way in all browsers:
* An unvisited link is underlined and blue
* A visited link is underlined and purple
* An active link is underlined and red
The style can be changed by CSS:
```css
a:link {
    color: green; 
    background-color: transparent; 
    text-decoration: none;
}

a:visited {
    color: pink;
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
}

a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
}
```
___

#### The target Attribute

The target attribute specifies where to open the linked document.
Template:
```html
<a href="url" target="value">Visit Document!</a>
```
The target attribute can have one of the following values:

* `_blank` - Opens the linked document in a new window or tab
* `_self` - Opens the linked document in the same window/tab as it was clicked (this is default)
* `_parent` - Opens the linked document in the parent frame
* `_top` - Opens the linked document in the full body of the window
* `framename` - Opens the linked document in a named frame
If our webpage is locked in a frame, we can use `_top` to break out the frame.

___
#### Create Bookmark
HTML bookmarks are used to allow readers to **jump to specific parts of a Web page**. Bookmarks can be useful if the webpage is very long.

To make a bookmark, first create the bookmark, and then add a link to it.

When the link is clicked, the page will scroll to the location with the bookmark.
Example:
First create bookmark with id attribute:
```html
<h2 id = "c4">Chapter 4</h2>
```
Then add a link to the bookmark (jump to Chapter 4), from within the same page:
```html
<a href="#c4">Jump to Chapter 4</a>
```
<a href="#c4">Jump to Chapter 4</a>
<h3 id = "c1">Chapter 1</h3>
<h3 id = "c2">Chapter 2</h3>
<h3 id = "c3">Chapter 3</h3>
<h3 id = "c4">Chapter 4</h3>
Or, add a link to the bookmark from another page:
```html
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

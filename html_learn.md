# HTML Note
Source (http://www.w3schools.com/html/)

## Navigation
___
<table style="text-align:center;background-color:#f0f0f0;">
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
<tr>
<td><a href="#ch13">HTML Images</a></td>
<td><a href="#ch14">HTML Tables</a></td>
<td><a href="#ch15">HTML Lists</a></td>
<td><a href="#ch16">HTML Block and Inline Elements</a></td>
<td><a href="#ch17">HTML Classes and IDs</a></td>
<td><a href="#ch18">HTML Iframes</a></td>
</tr>
<tr>
<td><a href="#ch19">HTML Head</a></td>
<td style='background-color:#0099CC'><a href="#ch20" style = "color:white;">HTML Entities</a></td>
<td style='background-color:MediumSeaGreen'><a href="#ch21" style = "color:white;">HTML Symbols</a></td>
</tr>
</table>
<a href = "https://www.w3schools.com/html/html_scripts.asp">HTML JavaScript</a><br>
<a href = "https://www.w3schools.com/html/html_filepaths.asp">HTML File Paths</a>
<p style="color:red;"> Learn about the best way to implement different html layouts in <a href = "https://www.w3schools.com/html/html_layout.asp"> HTML Layouts</a></p>
<p style="color:red;"> Learn about how to make the web pager resposive in <a href = "https://www.w3schools.com/html/html_responsive.asp"> HTML Responsive Web Design</a></p>
<p style="color:teal;">Know how to insert <strong>code</strong> elements in html and also insert <strong>sample outputs, keyboard input</strong> and <strong>variables </strong><a href = "https://www.w3schools.com/html/html_computercode_elements.asp">here.</a></p>
<p > Also checkout <a style = "color:green;" href = "https://www.w3schools.com/html/html_charset.asp"> HTML Charset</a> , <a style = "color:Blue;" href = "https://www.w3schools.com/html/html_urlencode.asp"> HTML URL Encode </a> <strong>and</strong> <a style = "color:Orange;" href = "https://www.w3schools.com/html/html_xhtml.asp"> XHTML </a>.</p>

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


|Start tag|Element Content|End tag|
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
<h6 id = "c1">Chapter 1</h6>
<h6 id = "c2">Chapter 2</h6>
<h6 id = "c3">Chapter 3</h6>
<h6 id = "c4">Chapter 4</h6>

Or, add a link to the bookmark from another page:

```html
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

___


#### External Paths

External pages can be referenced with a full URL or with a path relative to the current web page.
Example:

```html
<a href="https://www.w3schools.com/html/default.asp">HTML tutorial</a>
<a href="/html/default.asp">HTML tutorial</a>
<a href="default.asp">HTML tutorial</a>
```
Read more about file paths in [HTML File Paths](https://www.w3schools.com/html/html_filepaths.asp)

___
___
<p id = "ch13"></p>

## HTML Images

HTML images are defined by the `<img>` tag. It is an empty tag which consists of only attributes and no closing tags.
* The `src` attribute specified the URL web address of the image.
* The `alt` attribute specifies what to show if the image is not available.
* The `style` attribute can be used to specify the width and height of the image or we can directly use `width` and `height` attribute. Using the style attribute is suggested.
* We can load image from another server eg: `<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">` or we can load image from another folder eg:`<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">`.
* We can also use **animated images** in our web pages.

#### Image as Link

To use images as links we have to use `<a>` tag followed by an `img` tag. Example:

```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0;">
</a>
```
here, we have to assign image border with value 0, because some internet browsers show image image borders when the link is active.

#### Image Floating

We can use CSS `float` property to let the image float to the right or to the left of a text. Example

```html
<p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

<p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>
```
#### Image Maps
By using the `<map>` tag, we can map clickable areas on am image. Example:

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```
<img src="https://www.w3schools.com/html/workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="https://www.w3schools.com/html/computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="https://www.w3schools.com/html/phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="https://www.w3schools.com/html/coffee.htm">
</map>

#### The \<picture> Element

HTML5 introduced the `<picture>` element to add more flexibility when specifying image resources. It contains a number of `<source>` elements, each referring to different image sources. **This way the browser can choose the image that best fits the current view and/or device.**

Each `<source>` element have attributes describing when their image is the most suitable. The browser will use the first `<source>` element with matching attribute values, and ignore any following `<source>` elements.

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```

<picture>
  <source media="(min-width: 650px)" srcset="https://www.w3schools.com/html/img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="https://www.w3schools.com/html/img_white_flower.jpg">
  <img src="https://www.w3schools.com/html/img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>

**Note:** Always specify an `<img>` element as the last child element of the `<picture>` element. The `<img>` element is used by browsers that do not support the `<picture>` element, or if none of the `<source>` tags matched.

___
___

<p id = "ch14"></p>

## HTML Tables

An HTML table is defined with the `<table>` tag. Rows are define with the `<tr>` tag and headers are defined with `<th>` tag. A cell is defined with `<td>` tag.
Example:
```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>
```
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>

* We can use CSS `border` property to customize table borders

```css
table, th, td {
    border: 1px solid black;
}
```

We should remember to define borders for both the table and table cells.
* If we want to collapse the multiple borders (borders of the table and cells) into one border we should use `border-collabpse` borders.

```css
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
```
* We can modify the space between the cells using `border-spacing` property:

```css
table {
    border-spacing: 5px;
}
```
* We can make a cell span more than one collumn using the `colspan` attribute.

```html
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>
```
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>

* Similerly we can span a cell into multiple rows by using `rowspan` attrubute:

```html
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
```
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>

* We can add a table caption using `<caption>` tag. The `<caption>` tag must be inserted immediately after the `<table>` tag.
#### Summery

<table class="w3-table-all notranslate">
<tbody><tr>
<th>Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_table.asp">&lt;table&gt;</a></td>
<td>Defines a table</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_th.asp">&lt;th&gt;</a></td>
<td>Defines a header cell in a table</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_tr.asp">&lt;tr&gt;</a></td>
<td>Defines a row in a table</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_td.asp">&lt;td&gt;</a></td>
<td>Defines a cell in a table</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_caption.asp">&lt;caption&gt;</a></td>
<td>Defines a table caption</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_colgroup.asp">&lt;colgroup&gt;</a></td>
<td>Specifies a group of one or more columns in a table for formatting</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_col.asp">&lt;col&gt;</a></td>
<td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_thead.asp">&lt;thead&gt;</a></td>
<td>Groups the header content in a table</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_tbody.asp">&lt;tbody&gt;</a></td>
<td>Groups the body content in a table</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_tfoot.asp">&lt;tfoot&gt;</a></td>
<td>Groups the footer content in a table</td>
</tr>
</tbody></table>

___
___

<p id = "ch15"></p>

## HTML Lists

There are mainly two types of lists.
* Unordered list
* Ordered list

#### Unordered HTML List
They are marked with `<ul>` tag. Each list item is defined by `<li>` tag. Items are marked with bullets by default.
Example:
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

##### UL- Choose List Item Marker
The CSS `list-style-type` property can by used to define markers of the items. It can take the following values:

<table class="w3-table-all notranslate">
<tbody><tr>
<th>Value</th>
<th>Description</th>
</tr>
<tr>
<td>disc</td>
<td>Sets the list item marker to a bullet (default)</td>
</tr>
<tr>
<td>circle</td>
<td>Sets the list item marker to a circle</td>
</tr>
<tr>
<td>square</td>
<td>Sets the list item marker to a square</td>
</tr>
<tr>
<td>none</td>
<td>The list items will not be marked</td>
</tr>
</tbody></table>

Example:
```html
<ul style="list-style-type:square">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

#### Ordered HTML List

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag. The list items will be marked with numbers by default:
Exaple:
```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

##### OL- The Type Attribute

The `type` attributes of the `<ol>` tag, defines the type of the list item marker:
```html
<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<table class="w3-table-all notranslate">
<tbody><tr>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>type="1"</td>
<td>The list items will be numbered with numbers (default)</td>
</tr>
<tr>
<td>type="A"</td>
<td>The list items will be numbered with uppercase letters</td>
</tr>
<tr>
<td>type="a"</td>
<td>The list items will be numbered with lowercase letters</td>
</tr>
<tr>
<td>type="I"</td>
<td>The list items will be numbered with uppercase roman numbers</td>
</tr>
<tr>
<td>type="i"</td>
<td>The list items will be numbered with lowercase roman numbers</td>
</tr>
</tbody></table>

#### HTML Description Lists
HTML also supports description lists. A description list is a list of terms, with a description of each term. The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term:
Example:
```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

#### Nested HTML Lists

List can be nested (lists inside lists):

```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>

**Note:** List items can contain new list, and other HTML elements, like images and links, etc.

#### Control List Counting

By default Ordered list counting starts from one. We can use the `start` attribute to start counting from a specific number:

```html
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

#### Horizontal List

We have to use CSS to style a list horizontally. The `float` property of `<li>` can be changed to 'left` to align the list horizontally form left.

___
___
<p id = "ch16"></p>

## HTML Block and Inline Elements
Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.
#### Block-level Elements
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
Block level elements in HTML:
<div class="w3-row htmlHigh" style="line-height:25px;font-family:Consolas,'Courier New', Courier, monospace;xfont-size:16px;">
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_address.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>address<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_article.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>article<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_aside.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>aside<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_blockquote.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>blockquote<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_canvas.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>canvas<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_dd.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>dd<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_div.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>div<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_dl.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>dl<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_dt.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>dt<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_fieldset.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>fieldset<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_figcaption.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>figcaption<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_figure.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>figure<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_footer.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>footer<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_form.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>form<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_hn.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>h1<span style="color:mediumblue">&gt;</span></span>-<span style="color:brown"><span style="color:mediumblue">&lt;</span>h6<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_header.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>header<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_hr.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>hr<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_li.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>li<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_main.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>main<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_nav.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>nav<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_noscript.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>noscript<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_ol.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>ol<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_output.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>output<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_p.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>p<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_pre.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>pre<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_section.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>section<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_table.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>table<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_tfoot.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>tfoot<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_ul.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>ul<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_video.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>video<span style="color:mediumblue">&gt;</span></span></a></div>
 </div>

 #### Inline Elements

 An inline element does not start on a new line and only takes up as much width as necessary.
 List of Inline elements in HTML
 <div class="w3-row htmlHigh" style="line-height:25px;font-family:Consolas,'Courier New', Courier, monospace;xfont-size:16px;">
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_a.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>a<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_abbr.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>abbr<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_acronym.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>acronym<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_b.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>b<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_bdo.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>bdo<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_big.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>big<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_br.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>br<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_button.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>button<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_cite.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>cite<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_code.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>code<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_dfn.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>dfn<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_em.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>em<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_i.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>i<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_img.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>img<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_input.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>input<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_kbd.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>kbd<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_label.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>label<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_map.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>map<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_object.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>object<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_q.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>q<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_samp.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>samp<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_script.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>script<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_select.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>select<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_small.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>small<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_span.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>span<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_strong.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>strong<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_sub.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>sub<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_sup.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>sup<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_textarea.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>textarea<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_time.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>time<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_tt.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>tt<span style="color:mediumblue">&gt;</span></span></a></div>
  <div class="mylist"><a href="http://www.w3schools.com/tags/tag_var.asp"><span style="color:brown"><span style="color:mediumblue">&lt;</span>var<span style="color:mediumblue">&gt;</span></span></a></div>
 </div>

#### HTML Grouping Tags

<table class="w3-table-all notranslate">
<tbody><tr>
<th>Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_div.asp">&lt;div&gt;</a></td>
<td>Defines a section in a document (block-level)</td>
</tr>
<tr>
<td><a href="http://www.w3schools.com/tags/tag_span.asp">&lt;span&gt;</a></td>
<td>Defines a section in a document (inline)</td>
</tr>
</tbody></table>

Both the `<div>` and the `<span>` elements can be given common attributes `style`, `class` and `id` .

___
___

<p id = "ch17"></p>

## HTML Classes and IDs
The Class and ID attributes are mainly used to isolate a single element or a group of similer elemts.

#### HTML Classes

The HTML `class` attribute is used to define equal styles for elements with the same class name. So, all HTML elements with the same `class` attribute will have the same format and style.

**Tip:** The class attribute can be used on any HTML element.

**Note:** The class name is case sensitive!

* In CSS, to select elements with a specific class, write a period (.) character, followed by the name of the class:

```css
.city {
    background-color: tomato;
    color: white;
    padding: 10px;
} 
```

* HTML elements can have more than one class name, each class name must be separated by a space.

```html

<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>

```
* Different tags, like `<h2>` and `<p>`, can have the same class name and thereby share the same style:
```html
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>
```

* The class name can also be used by JavaScript to perform certain tasks for elements with the specified class name.

#### HTML IDs
The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).

The id value can be used by CSS and JavaScript to perform certain tasks for a unique element with the specified id value.

In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element:
```css
#myHeader {
    background-color: lightblue;
    color: black;
    padding: 40px;
    text-align: center;
} 
```
**Tip:** The id attribute can be used on any HTML element.

**Note:** The id value is case-sensitive.

**Note:** The id value must contain at least one character, and must not contain whitespace (spaces, tabs, etc.).

**Note:** An ID can not be shared.

* ID can be used for Bookmarking.
* ID can be used by JavaScript by using `getElementById()` method.

___
___

<p id = 'ch18'></p>

## HTML Iframes

An iframe is used to display a webpage within a web page. It is defined with the `<iframe>` tag. Syntax: `<iframe src="URL"></iframe>`. The `src` attribute specifies the web address of the inline frame page.
* The `height` and  `width` attributes are used to set the height and width of the frame.
* The `border` property of `style` attribute can be used to remove the borders of the frame.

#### Iframe- Target for a Link

An iframe can be used as a target frame for a link. When the link is clicked, it will open inside the iframe.
The `target` attribute of the link must refer to the `name` attribute of the iframe:
```html
<iframe src = "http://github.com" name="iframe_a"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a"></a>
```
See [Sample](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_target) for more understanding.

___
___

<p id = 'ch19'></p>

## HTML Head

The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

HTML metadata is data about the HTML document. Metadata is not displayed.

Metadata typically define the document title, character set, styles, links, scripts, and other meta information.

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:20%">Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_head.asp">&lt;head&gt;</a></td>
<td> Defines information about the document</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_title.asp">&lt;title&gt;</a></td>
<td>Defines the title of a document</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_base.asp">&lt;base&gt;</a></td>
<td>Defines a default address or a default target for all links on a page</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_link.asp">&lt;link&gt;</a></td>
<td>Defines the relationship between a document and an external resource</td>
</tr>
<tr style="background-color:DodgerBlue;color:white;">
<td><a href="https://www.w3schools.com/tags/tag_meta.asp" style="color:white;">&lt;meta&gt;</a></td>
<td>Defines metadata about an HTML document</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_script.asp">&lt;script&gt;</a></td>
<td>Defines a client-side script</td>
</tr>
<tr>
<td><a href="https://www.w3schools.com/tags/tag_style.asp">&lt;style&gt;</a></td>
<td>Defines style information for a document</td>
</tr>
</tbody></table>

___
___

<p id = 'ch20'></p>

## HTML Entities

Reserved characters in HTML must be replaced with character entities. Characters that are not present on our keyboard can also be replaced by entities.

#### Some Useful HTML Character Entities

<table class="w3-table-all notranslate">
    <tbody><tr>
      <th>Result</th>
      <th>Description</th>
      <th>Entity Name</th>
      <th>Entity Number</th>
    </tr>
    <tr>
      <td style="height: 29px"></td>
      <td style="height: 29px">non-breaking space</td>
      <td style="height: 29px">&amp;nbsp;</td>
      <td style="height: 29px">&amp;#160;</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>less than</td>
      <td>&amp;lt;</td>
      <td>&amp;#60;</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>greater than</td>
      <td>&amp;gt;</td>
      <td>&amp;#62;</td>
    </tr>
    <tr>
      <td>&amp;</td>
      <td>ampersand</td>
      <td>&amp;amp;</td>
      <td>&amp;#38;</td>
    </tr>
    <tr>
      <td>"</td>
      <td>double quotation mark </td>
      <td>&amp;quot;</td>
      <td>&amp;#34;</td>
    </tr>
    <tr>
      <td>'</td>
      <td>single quotation mark (apostrophe) </td>
      <td>&amp;apos;</td>
      <td>&amp;#39;</td>
    </tr>
    <tr>
      <td>¢</td>
      <td>cent</td>
      <td>&amp;cent;</td>
      <td>&amp;#162;</td>
    </tr>
    <tr>
      <td>£</td>
      <td>pound</td>
      <td>&amp;pound;</td>
      <td>&amp;#163;</td>
    </tr>
    <tr>
      <td>¥</td>
      <td>yen</td>
      <td>&amp;yen;</td>
      <td>&amp;#165;</td>
    </tr>
    <tr>
      <td>€</td>
      <td>euro</td>
      <td>&amp;euro;</td>
      <td>&amp;#8364;</td>
    </tr>
    <tr>
      <td>©</td>
      <td>copyright</td>
      <td>&amp;copy;</td>
      <td>&amp;#169;</td>
    </tr>
    <tr>
      <td>®</td>
      <td>registered trademark</td>
      <td>&amp;reg;</td>
      <td>&amp;#174;</td>
    </tr>
    </tbody></table>

#### Combining Diacritical Marks

A diacritical mark is a "glyph" added to a letter.
Here are some examples:

<table class="w3-table-all notranslate">
<tbody><tr>
<th>Mark</th>
<th>Character</th>
<th>Construct</th>
<th>Result</th>
</tr>
<tr>
      <td>&nbsp;̀</td>
      <td>a</td>
      <td>a&amp;#768;</td>
      <td>à</td>
</tr>
<tr>
      <td>&nbsp;́</td>
      <td>a</td>
      <td>a&amp;#769;</td>
      <td>á</td>
</tr>
<tr>
      <td>̂</td>
      <td>a</td>
      <td>a&amp;#770;</td>
      <td>â</td>
</tr>
<tr>
      <td>&nbsp;̃</td>
      <td>a</td>
      <td>a&amp;#771;</td>
      <td>ã</td>
</tr>
<tr>
      <td>&nbsp;̀</td>
      <td>O</td>
      <td>O&amp;#768;</td>
      <td>Ò</td>
</tr>
<tr>
      <td>&nbsp;́</td>
      <td>O</td>
      <td>O&amp;#769;</td>
      <td>Ó</td>
</tr>
<tr>
      <td>̂</td>
      <td>O</td>
      <td>O&amp;#770;</td>
      <td>Ô</td>
</tr>
<tr>
      <td>&nbsp;̃</td>
      <td>O</td>
      <td>O&amp;#771;</td>
      <td>Õ</td>
</tr>
</tbody></table>

___
___

<p id = "ch21"></p>

## HTML Symbols

Many mathematical, technical, and currency symbols, are not present on a normal keyboard. To add such symbols to an HTML page, we can use an HTML entity name. If no entity name exists, we can use an entity number, a decimal, or hexadecimal reference.

#### Some mathematical symbols

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:10%">Char</th>
<th style="width:10%">Number</th>
<th style="width:15%">Entity</th>
<th>Description</th>
</tr>
<tr>
<td>∀</td>
<td>&amp;#8704;</td>
<td>&amp;forall;</td>
<td>FOR ALL</td>
</tr>
<tr>
<td>∂</td>
<td>&amp;#8706;</td>
<td>&amp;part;</td>
<td>PARTIAL DIFFERENTIAL</td>
</tr>
<tr>
<td>∃</td>
<td>&amp;#8707;</td>
<td>&amp;exist;</td>
<td>THERE EXISTS</td>
</tr>
<tr>
<td>∅</td>
<td>&amp;#8709;</td>
<td>&amp;empty;</td>
<td>EMPTY SETS</td>
</tr>
<tr>
<td>∇</td>
<td>&amp;#8711;</td>
<td>&amp;nabla;</td>
<td>NABLA</td>
</tr>
<tr>
<td>∈</td>
<td>&amp;#8712;</td>
<td>&amp;isin;</td>
<td>ELEMENT OF</td>
</tr>
<tr>
<td>∉</td>
<td>&amp;#8713;</td>
<td>&amp;notin;</td>
<td>NOT AN ELEMENT OF</td>
</tr>
<tr>
<td>∋</td>
<td>&amp;#8715;</td>
<td>&amp;ni;</td>
<td>CONTAINS AS MEMBER</td>
</tr>
<tr>
<td>∏</td>
<td>&amp;#8719;</td>
<td>&amp;prod;</td>
<td>N-ARY PRODUCT</td>
</tr>
<tr>
<td>∑</td>
<td>&amp;#8721;</td>
<td>&amp;sum;</td>
<td>N-ARY SUMMATION</td>
</tr>
</tbody></table>

[Full Math Symbol Reference](https://www.w3schools.com/charsets/ref_utf_math.asp)

#### Some Greek Letter Supported by HTML

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:10%">Char</th>
<th style="width:10%">Number</th>
<th style="width:15%">Entity</th>
<th>Description</th>
</tr>
<tr>
<td>Α</td>
<td>&amp;#913;</td>
<td>&amp;Alpha;</td>
<td>GREEK CAPITAL LETTER ALPHA</td>
</tr>
<tr>
<td>Β</td>
<td>&amp;#914;</td>
<td>&amp;Beta;</td>
<td>GREEK CAPITAL LETTER BETA</td>
</tr>
<tr>
<td>Γ</td>
<td>&amp;#915;</td>
<td>&amp;Gamma;</td>
<td>GREEK CAPITAL LETTER GAMMA</td>
</tr>
<tr>
<td>Δ</td>
<td>&amp;#916;</td>
<td>&amp;Delta;</td>
<td>GREEK CAPITAL LETTER DELTA</td>
</tr>
<tr>
<td>Ε</td>
<td>&amp;#917;</td>
<td>&amp;Epsilon;</td>
<td>GREEK CAPITAL LETTER EPSILON</td>
</tr>
<tr>
<td>Ζ</td>
<td>&amp;#918;</td>
<td>&amp;Zeta;</td>
<td>GREEK CAPITAL LETTER ZETA</td>
</tr>
</tbody></table>

[Full Greek Reference](https://www.w3schools.com/charsets/ref_utf_greek.asp)

#### Some Other Entities Supported by HTML

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:10%">Char</th>
<th style="width:10%">Number</th>
<th style="width:15%">Entity</th>
<th>Description</th>
</tr>
<tr>
<td>©</td>
<td>&amp;#169;</td>
<td>&amp;copy;</td>
<td>COPYRIGHT SIGN</td>
</tr>
<tr>
<td>®</td>
<td>&amp;#174;</td>
<td>&amp;reg;</td>
<td>REGISTERED SIGN</td>
</tr>
<tr>
<td>€</td>
<td>&amp;#8364;</td>
<td>&amp;euro;</td>
<td>EURO SIGN</td>
</tr>
<tr>
<td>™</td>
<td>&amp;#8482;</td>
<td>&amp;trade;</td>
<td>TRADEMARK</td>
</tr>
<tr>
<td>←</td>
<td>&amp;#8592;</td>
<td>&amp;larr;</td>
<td>LEFTWARDS ARROW</td>
</tr>
<tr>
<td>↑</td>
<td>&amp;#8593;</td>
<td>&amp;uarr;</td>
<td>UPWARDS ARROW</td>
</tr>
<tr>
<td>→</td>
<td>&amp;#8594;</td>
<td>&amp;rarr;</td>
<td>RIGHTWARDS ARROW</td>
</tr>
<tr>
<td>↓</td>
<td>&amp;#8595;</td>
<td>&amp;darr;</td>
<td>DOWNWARDS ARROW</td>
</tr>
<tr>
<td>♠</td>
<td>&amp;#9824;</td>
<td>&amp;spades;</td>
<td>BLACK SPADE SUIT</td>
</tr>
<tr>
<td>♣</td>
<td>&amp;#9827;</td>
<td>&amp;clubs;</td>
<td>BLACK CLUB SUIT</td>
</tr>
<tr>
<td>♥</td>
<td>&amp;#9829;</td>
<td>&amp;hearts;</td>
<td>BLACK HEART SUIT</td>
</tr>
<tr>
<td>♦</td>
<td>&amp;#9830;</td>
<td>&amp;diams;</td>
<td>BLACK DIAMOND SUIT</td>
</tr>     
</tbody></table>

[Full Currency Reference](https://www.w3schools.com/charsets/ref_utf_currency.asp)
[Full Arrows Reference](https://www.w3schools.com/charsets/ref_utf_arrows.asp)
[Full Symbols Reference](https://www.w3schools.com/charsets/ref_utf_symbols.asp)

___
___


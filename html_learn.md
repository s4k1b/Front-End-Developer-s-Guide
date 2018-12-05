# HTML Note
Source (http://www.w3schools.com/html/)
___
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
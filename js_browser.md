# Browser: Document, Events, Interfaces

## Document

### Browser environment, specs

- Bird's-eye view of what we have when JavaScript runs in a web-browser:

  ![bird_view](birds_eye_view.png)

- There's a _root_ object called `window`. It has two roles:
  - First, it is a global object for JS code.
  - Second, it represents the _browser_window_ and provides methods to control it.
- The `document` object gives access to the page's content. We can change or create anything on the page using it.
- Browser Object Model (BOM) are addtional objects provided by the browser (host environment) to work with everything except the document.
  - The `navigator` object provides background information about the browser and the operating system.
  - The `location` object allows us to read the current URL and can redirect the browser to a new one.

### DOM tree

- According to Document Object Model (DOM) each HTML tag is an object. Nested tags are called _children_ of the enclosing one.
- If the browser encounters a malformed HTML, it automatically corrects it when making DOM. Errors such as missing ending tags and missing tags are auto corrected most of the time.
- Tbales always have a `<tbody>` element enclosing the `<tr>` and `<td>` elements in the DOM, but in HTML it can be omitted.
- Text nodes are labelled as `#text` and comment nodes are labelled as `#comment`. They are leaf nodes and can never have children.
- There are [12 node types](https://dom.spec.whatwg.org/#node). In practice we usually work with 4 of them:
  - `document` - the _entry_point_ into the DOM.
  - element nodes - HTML tags, the tree building blocks.
  - text nodes - contains text.
  - comment node - sometimes we can put information there, it won't be shown but can be accessed by JavaScript.

### Walking the DOM

- Here's a picture of links that allow to travel between DOM nodes:

  ![Picture of DOM nodes](http://javascript.info/article/dom-navigation/dom-links.png)

- `document.body` can be `null`. A script can not access an element taht doesn't exist at the moment of running. In the example below the first `alert` shows `null` because `document.body` is not compiled yet.

  ```html
  <html></html>
  <head>
  <script>
    alert( "From HEAD: " + document.body ); // null, there's no <body> yet
  </script>
  </head>
  <body>
  <script>
    alert( "From BODY: " + document.body ); // HTMLBodyElement, now it exists
  </script>
  </body>
  </html>
  ```


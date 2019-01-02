# Browser: Document, Events, Interfaces

## Document

### Browser environment, specs

- Bird's-eye view of what we have when JavaScript runs in a web-browser:
  ![bird_view](birds_eye_view.png)

- There's a _root_ object called `window`. It has two roles: - First, it is a global object for JS code. - Second, it represents the _browser_window_ and provides methods to control it.
- The `document` object gives access to the page's content. We can change or create anything on the page using it.
- Browser Object Model (BOM) are addtional objects provided by the browser (host environment) to work with everything except the document. - The `navigator` object provides background information about the browser and the operating system. - The `location` object allows us to read the current URL and can redirect the browser to a new one.

### DOM tree

- According to Document Object Model (DOM) each HTML tag is an object. Nested tags are called _children_ of the enclosing one.
- If the browser encounters a malformed HTML, it automatically corrects it when making DOM. Errors such as missing ending tags and missing tags are auto corrected most of the time.
- Tbales always have a `<tbody>` element enclosing the `<tr>` and `<td>` elements in the DOM, but in HTML it can be omitted.
- Text nodes are labelled as `#text` and comment nodes are labelled as `#comment`. They are leaf nodes and can never have children.
- There are [12 node types](https://dom.spec.whatwg.org/#node). In practice we usually work with 4 of them: - `document` - the _entry_point_ into the DOM. - element nodes - HTML tags, the tree building blocks. - text nodes - contains text. - comment node - sometimes we can put information there, it won't be shown but can be accessed by JavaScript.

### Walking the DOM

- Here's a picture of links that allow to travel between DOM nodes:
  ![Picture of DOM nodes](http://javascript.info/article/dom-navigation/dom-links.png)

- `document.body` can be `null`. A script can not access an element taht doesn't exist at the moment of running. In the example below the first `alert` shows `null` because `document.body` is not compiled yet.
  `html <html></html> <head> <script> alert( "From HEAD: " + document.body ); // null, there's no <body> yet </script> </head> <body> <script> alert( "From BODY: " + document.body ); // HTMLBodyElement, now it exists </script> </body> </html>`

- It the DOM world `null` means it does not exist.
- **Child nodes (or childre):** elements that are direct children. eg: `<head>` and `<body>` are children of `<html>`.
  **Descendants:** all elements that are nested in the given node including it's children.
- The `childNodes` collection provides access to all child nodes, including text nodes.
- Properties `firstChild` and `lastChild` give fast access to the first and last children.
- The parent of a node is available in `parentNode` property.
- The next node under same parent is `nextSibling` and the previous one is `previousSibling`.
- To achieve element only navigation, we need have similer properties but with the word `ELement` inside: - `children` - only those children that are element nodes. - `firstElementChild`, `lastElementChild` - first and last child elements. - `previousElementSibling`, `nextElementSibling` - neighbour elements. - `parentElement` - parent element.
- The `parentElement` property returns the _element_ parent, while `parentNode` returns _any node_ parent. They are usually the same except for `document.documentElement`:

  `js alert(document.documentElement.parentNode); // document alert(document.documentElement.parentElement); // null`

- The `<table>` element supports additionally these properties: - `table.rows` - the collection of `<tr>` elements of the table. - `table.caption/tHead/tFoot` - references to elements `<caption>`, `<thead>`, `<tfoot>`. - `table.tBodies` - the collection of `<tbody>` elements inside table.
- `<thread>`, `<tfoot>`, `<tbody>` elements provide `rows` property: - `tbody.rows` - the collection of `<tr>` inside.
- **`<tr>`:** - `tr.cells` - the collection of `<td>` and `<th>` cells inside the given `<tr>`. - `tr.sectionRowIndex` - the position (index) of the given `<tr>` inside the enclosing `<thead>/<tbody>/<tfoot>`. - `tr.rowIndex` - the number of the `<tr>` in the table as a whole (including all table rows).
- **`<td>` and `<th>`**: - `td.cellIndex` - the number of the cell inside the enclosing `<tr>`.

### Searching: getElement* and querySelector*

- If an element has an `id` attribute, then there's a global variable by the name from that `id`. We can access elements like this:
  `html <div id="elem"> <div id="elem-content">Element</div> </div> <script> alert(elem); // DOM-element with id="elem" alert(window.elem); // accessing global variable like this also works // for elem-content things are a bit more complex // that has a dash inside, so it can't be a variable name alert(window['elem-content']); // ...but accessible using square brackets [...] </script>`

- The better alternative is to use a special method called `document.getElementById(id)`.
- This method can only be called on the `document` object. It searches the whole document for that `id`.
- `elem.getElementsByTagName(tag)` looks for elements with the given tag and returns the collection of them. The parameter can also be `*` for any tags.
- `elem.getElementsByClassName(className)` returns elements that have the given CSS class. Elements may have other classes to.
- `elem.getElementsByName(name)` reuturns elements with the given `name` attribute.
- The call to `elem.querySelectorAll(css)` returns all elements inside `elem` matching the given CSS selector. That's the most used powerful method.

  here we, look for all `<li>` elements that are last children:

  ````html
  <ul>
    <li>The</li>
    <li>test</li>
  </ul>
  <ul>
    <li>has</li>
    <li>passed</li>
  </ul>
  <script>
    let elements = document.querySelectorAll("ul > li:last-child");

    for (let elem of elements) {
      alert(elem.innerHTML); // "test", "passed"
    }
  </script>
  ```
  ````

- We can use pseudo-classes as well. Presudo-clases in the CSS selctor like `:hover` and `:active` are also supported.

For instance, `document.querySelectorAll(':hover')` will return the collection of elements that the pointer in over now (in nesting order: from the outermost to the most nested one).

- The `elem.matches(css)` does not look for anything, it merely checks if `elem` matches the given CSS selector. It returns either `true` or `false`.

- `elem.closest(css)` looks the nearest ancestor that metche the CSS-selector. The `elem` itself can also included in the search.

  ````html
  <h1>Contents</h1>

  <div class="contents">
    <ul class="book">
      <li class="chapter">Chapter 1</li>
      <li class="chapter">Chapter 1</li>
    </ul>
  </div>

  <script>
    let chapter = document.querySelector(".chapter"); // LI

    alert(chapter.closest(".book")); // UL
    alert(chapter.closest(".contents")); // DIV

    alert(chapter.closest("h1")); // null (because h1 is not an ancestor)
  </script>
  ```
  ````

### Node Properties: type, tag and contents

- DOM nodes have different properties depending on their class. For instance, an element node corresponding to tag `<a>` has link related property and one corresponding to `input` has input related properties.
- Each DOM node belongs to a corresponding built-in class.
- The root of the heirarchy is `EventTarget`, that is inherited by `Node`, and other DOM nodes inherit from it.
  ![DOM heirarchy](http://javascript.info/article/basic-dom-node-properties/dom-class-hierarchy.png)

      - The `EventTarget` is a _abstract_ class. Instance of that class can not be created. It serves as base, so that all DOM nodes support _events_.
      - Then the `Node` is also an _abstract_ class, serving as the base for DOM nodes. It provides core tree functionality such as `parentNode`, `nextSibling`, `childNodes` and so on.
      - `Element` is the base class for DOM elements. It porvides element level navigations, such as: `children`, `nextElementSibling`, `firstElementChild` etc.
      - `HTMLElement` is finally the basic class for all HTML elements. It is inherited by various HTML elements:
      	- `HTMLInputElement - the class for `<input>` elements,
      	- HTMLBodyElement` - the class for `<body>` elements,
      	- `HTMLAnchorElement` - the class for `<a>` elements.
      	- ... and so on, each tag has its own class that may provide specific properties and methods.

- `elem.constructor.name` returns the came of the class to which the element belongs.
  `js alert(document.body.constructor.name); // HTMLBodyElement`
- We also can use `instanceof` to check the inheritance:
  `js alert( document.body instanceof HTMLBodyElement ); // true alert( document.body instanceof HTMLElement ); // true alert( document.body instanceof Element ); // true alert( document.body instanceof Node ); // true alert( document.body instanceof EventTarget ); // true`
- `nodeType` property provides old fashioned way to get the _type_ of a DOM node. It has a numeric value.
- Given a node, we can read it's tag name by `nodeName` or `tagName` property.
- The `innerHTML` property allowsw to get the HTML inside the element as a string. We can also modify it's one of the powerful ways to change a web page. - Beware: `innerHTML+=` does a full overwrite. We can append more HTML by using `elem.innerHTML+="something"`. But we should be careful in doing so, because it is not only addition but a full overwrite.
  `js elem.innerHTML += "..."; //is a shorter way to write: elem.innerHTML = elem.innerHTML + "...";`
- The `outerHTML` property contains the full HTML of the element. That is `innerHTML` plus the HTML of the element itself. - Beware: unlike `innerHTML`, it does not perform a full overwriting of the HTML, instead it replaces it as a whole in the outer context.
- The `innerHTML` property is only valid for element type nodes. The content of other nodes such as, text nodes and comment nodes, can be obtained by using `nodeValue` and `data` property.
- The `textContent` gives the text content inside the elements: only text, minus all `<tags>`. For instance:

  ````html
  <div id="news">
    <h1>Headline!</h1>
    <p>Martians attack people!</p>
  </div>

  <script>
    // Headline! Martians attack people!
    alert(news.textContent);
  </script>
  ```
  ````

- The `hidden` property of DOM nodes specify whether it is visible or not. It specifies a boolean value. Technically it works same as `style = "display:noen;"`.
- DOM elements have additional properties: - `value` - the value of `HTMLInputElement` and `HTMLSelectElement`. - `href` - the _href_ for `HTMLAnchorElement`. - `id` - the _id_ attribute for all `HTMLElement`. - ... and much more ...

### Attributes & Properties

- There are some built-in DOM properties. But technically there is no limit. We can add our own DOM property:

  ````js
  document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
  };

      		alert(document.body.myData.title); // Imperator
      		```
      		we can add methods as well
      		```js
      		document.body.sayTagName = function() {
      		alert(this.tagName);
      		};

      		document.body.sayTagName(); //BODY
      		```

  ````

- HTML standard attributes are automaticly created as DOM property and can be accessed instantly.
- For HTML non standard attributes: - `elem.hasAttribute(name)` - checks for the existence. - `elem.getAttribute(name)` - gets the value. - `elem.setAttribute(name, value)` - sets the value. - `elem.removeAttribute(name)` - removes the attribute.
  Demo of working with attributes:

  ````html
  <body>
    <div id="elem" about="Elephant"></div>

    <script>
      alert(elem.getAttribute("About")); // (1) 'Elephant', reading

      elem.setAttribute("Test", 123); // (2), writing

      alert(elem.outerHTML); // (3), see it's there

      for (let attr of elem.attributes) {
        // (4) list all
        alert(`${attr.name} = ${attr.value}`);
      }
    </script>
  </body>
  ```
  ````

- The Attribute names are case insensetive.
- All the attributes, including the ones we set are visible in `outerHTML`.
- When a standard attribute changes, the corresponding property is auto-updated and vise-versa. - There are some exceptions:

  ````html
  <input />

  <script>
    let input = document.querySelector("input");

    // attribute => property
    input.setAttribute("value", "text");
    alert(input.value); // text

    // NOT property => attribute
    input.value = "newValue";
    alert(input.getAttribute("value")); // text (not updated!)
  </script>
  ```
  ````

- Attributes are strings but DOM properties may not be. For instance, the `input.checked` property is boolean.

  - There are other examples. The `style` attribute is a string, the the `stype` property is an object.
  - The `href` DOM property is always the full URL, even if the attribute consists of relative URL or just a `#hash`. For example.

  ```html
  <a id="a" href="#hello">link</a>
  <script>
    // attribute
    alert(a.getAttribute("href")); // #hello

    // property
    alert(a.href); // full URL in the form http://site.com/page#hello
  </script>
  ```

- We can use non-standard attributes to pass custom data from HTML JavaScript, or to _mark_ HTML-elements for JavaScript.
- All attributes starting with _data-_ are reserved for programmers' use. They are available in the `dataset` property.
  - For instace if `elem` has a `data-about` property, then it is avaible as `elem.dataset.about` in DOM.
  - For multiword attributes like `data-order-state` become camel-cased: `dataset.orderState`.

### Modifying the Document

- DOM modifications is the key to create _live_ pages.
- Creating an Element:
  There are two methods:

  - `document.createElement(tag)`- creates new element with the given tag.
  - `document.createTextNode(text)`- creates new node with given text.
  - We can assign classes to created elements:

  ```js
  let div = document.createElement("div");
  div.className = "alert alert-success";
  div.innerHTML =
    "<strong>Hi there!</strong> You've read an important message.";
  ```

- Inserting Elements:

  - `document.body.appendChild(div)` - Method that inserts a `div` inside another `div`.
  - `parentElem.appendChild(node)` - Inserts node as the last child of `parentElem`.
  - `parentElem.insertBefore(node, nextSibling)` - Inserts node under `parentElem` just before the `nextSibling` node.
  - `parentElem.replaceChild(node, oldChild)` - Replaces `oldChild` with `node` among children of `parentElem`.
  - The following set of methods provide a more flexible insertions:

    - `node.append(...nodes or string)` - append nodes or strings at the end of node.
    - `node.prepend(...nodes or string)` - prepend nodes or strings at the begining of node.
    - `node.before(...nodes or string)` - insert nodes or string before the node.
    - `node.after(...nodes or string)` - insert nodes or string after the node.
    - `node.replaceWith(...nodes or string)` - replace node with the given nodes or string.

    A simple picture depicting what the methods do:
    ![Method describing picture](http://javascript.info/article/modifying-document/before-prepend-append-after.png)

    - These methods can take more than one node as arguments.
    - These methods can only insert DOM nodes or text elements. The HTML tags wont work this way like `innerHTML`.

  - `elem.insertAdjacentHTML/Text/Element(where, html)` is a versatile method for inserting HTML/Text/Element.
    The first parameter is a string, specifying where to insert. Must be one of the following:

    - `beforebegin` - insert `html` before `elem`.
    - `beforeend` - insert `html` into `elem`, at the end.
    - `afterbegin` - insert `html` into `elem`, at the begining.
    - `afterend` - insert `html` after `elem`.

  - `elem.clodeNode(true)` - creates a _deep_ clone of the element - with all attributes and subelements. If we call `elem.cloneNode(fale)` then the clone is made without child elements.

  An example of copying the message:

  ````html
  <style>
    .alert {
      padding: 15px;
      border: 1px solid #d6e9c6;
      border-radius: 4px;
      color: #3c763d;
      background-color: #dff0d8;
    }
  </style>

  <div class="alert" id="div">
    <strong>Hi there!</strong> You've read an important message.
  </div>

  <script>
    let div2 = div.cloneNode(true); // clone the message
    div2.querySelector("strong").innerHTML = "Bye there!"; // change the clone

    div.after(div2); // show the clone after the existing div
  </script>
  ```
  ````

- To remove nodes, there are following methods:

  - `parentElem.removeChild(node)` - removes `elem` from `parentElem` (assuming it's a child).
  - `node.remove()`- removes the node form it's place.

- To move a node from one place to another we don't need to replace it form it's old place. **All insertion methods automatically remove the node from the old place.**

  ```html
  <div id="first">First</div>
  <div id="second">Second</div>
  <script>
    // no need to call remove
    second.after(first); // take #second and after it - insert #first
  </script>
  ```

- The call to `document.write(html)` - writes the `html` into page _right here right now_. The `html` string can be dynamically generated, so it's kind of flexible. We can use JavaScript to create a full-fledged webpage and write it. **The call to `document.write` only works while the page is loading.**. If we call it afterwards, the existing document content is erased. For istance:

  ```html
  <p>After one second the contents of this page will be replaced...</p>
  <script>
    // document.write after 1 second
    // that's after the page loaded, so it erases the existing content
    setTimeout(() => document.write("<b>...By this.</b>"), 1000);
  </script>
  ```

  So, it's kind of unusable at _after loaded_ stage. Technically when `document.write` is called while the browser is still reading the HTML, it appedns directly to the HTML. That is why it is blazingly fast.

## Styles and Classes

- There are generally two ways to style an element:

  - Create a class in CSS and add it: `<div class="...">`
  - Write properties directly into `style`: `div style="..."`.

  It is prefered to use the CSS.
  We should only manipulate the `style` property if classes _can't handle it_.

-

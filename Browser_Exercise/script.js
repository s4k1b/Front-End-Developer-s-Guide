let table = document.getElementById('bagua-table');

/* your code */

let cells = table.getElementsByTagName('td');
let ind = 0;
for (cell of cells) {
  cell.tabIndex = `${ind}`;
  ind++;
}
let cellFocus = false;

table.addEventListener('focusin', function (event) {
  if (cellFocus) return;
  cellFocus = true;
  let elem = event.target.closest('td');
  let currentText = elem.innerHTML;
  console.log(elem.innerHTML);

  let textArea = document.createElement('textarea');
  textArea.value = currentText;
  textArea.style.height = elem.offsetHeight + 'px';
  textArea.style.width = elem.offsetWidth + 'px';

  elem.replaceWith(textArea);
  textArea.focus();

  let coords = textArea.getBoundingClientRect();

  let ok = document.createElement('button');
  ok.innerHTML = "OK";
  let cancel = document.createElement('button');
  cancel.innerHTML = "CANCEL";

  ok.style.top = coords.bottom + 1 + 'px';
  ok.style.left = coords.left + 'px';
  ok.style.position = "absolute";
  ok.style.zIndex = 1000;
  document.body.append(ok);

  cancel.style.top = coords.bottom + 1 + 'px';
  cancel.style.left = ok.getBoundingClientRect().right + 5 + 'px';
  cancel.style.position = "absolute";
  cancel.style.zIndex = 1000;
  document.body.append(cancel);

  function vanish() {
    ok.remove();
    cancel.remove();
  }
  ok.addEventListener('click', function (event) {
    elem.innerHTML = textArea.value;
    vanish();
    textArea.replaceWith(elem);
    cellFocus = false;
  })
  cancel.addEventListener('click', function (event) {
    vanish();
    textArea.replaceWith(elem);
    cellFocus = false;
  })
  //textArea.focus();
});

table.addEventListener('focusout', function (event) {
  let elem = event.target.closest('textarea');
  console.log(elem);
  if (cellFocus) {
    elem.focus();
  }
})
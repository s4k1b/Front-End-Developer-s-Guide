document.addEventListener('mousedown', function (event) {
  event.preventDefault();
  draggableElem = event.target.closest('.draggable');
  if (!draggableElem) return;

  let coords = draggableElem.getBoundingClientRect();
  let shiftX = event.clientX - coords.left;
  let shiftY = event.clientY - coords.top;

  draggableElem.style.position = "absolute";
  draggableElem.style.zIndex = 1000;
  document.body.append(draggableElem);

  function moveAt(pageX, pageY) {
    let newX = pageX - shiftX;
    let newY = pageY - shiftY;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;

    if ((newX + draggableElem.offsetWidth) > window.innerWidth) newX = window.innerWidth - draggableElem.offsetWidth;
    if ((newY + draggableElem.offsetHeight) > (document.offsetHeight - document.scrollHeight)) {
      document.scrollHeight += draggableElem.offsetHeight;

      window.scrollTo(0, draggableElem.offsetHeight);
    }


    draggableElem.style.left = newX + 'px';
    draggableElem.style.top = newY + 'px';
  }

  if (event.clientX && event.clientY) {
    moveAt(event.clientX, event.clientY);
  }

  function MouseMove(event) {
    if (event.clientX && event.clientY) {
      moveAt(event.clientX, event.clientY);
    }
  }
  document.addEventListener('mousemove', MouseMove);

  function MouseDown(event) {
    document.removeEventListener('mousemove', MouseMove);
    document.removeEventListener('mouseup', MouseDown);
  }

  document.addEventListener('mouseup', MouseDown);
})
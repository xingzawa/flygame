function openWindow(id) {
  document.getElementById(id).style.display = "block";
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

/* 拖动窗口 */
let dragTarget = null;
let offsetX = 0;
let offsetY = 0;

function dragStart(e, el) {
  dragTarget = el;
  offsetX = e.clientX - el.offsetLeft;
  offsetY = e.clientY - el.offsetTop;

  document.onmousemove = dragMove;
  document.onmouseup = dragEnd;
}

function dragMove(e) {
  if (!dragTarget) return;

  dragTarget.style.left = (e.clientX - offsetX) + "px";
  dragTarget.style.top = (e.clientY - offsetY) + "px";
}

function dragEnd() {
  dragTarget = null;
  document.onmousemove = null;
  document.onmouseup = null;
}

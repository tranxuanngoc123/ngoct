document.getElementById("submit").addEventListener("click", giaiThua);
function giaiThua() {
  var n = +document.getElementById("number").value;
  var i = 0;
  var muti = 1;
  var contentEl = document.getElementById("content");
  do {
    i++;
    muti = muti * i;
  } while (i < n);
  contentEl.style.display = "block";
  contentEl.innerHTML = "Giai thừa: " + muti;
}
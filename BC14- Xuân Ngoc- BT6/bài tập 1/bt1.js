 function soNhoNhat() {
    var s = 0;
    var n = 0;
    var contentEL = document.getElementById('content');
    while (s < 10000) {
      n++;
      s = s + n;
      var pEl = document.createElement('p');
      pEl.innerHTML = "số nguyên nhỏ nhất:" + n;
      contentEL.appendChild(pEL);
    }
 }

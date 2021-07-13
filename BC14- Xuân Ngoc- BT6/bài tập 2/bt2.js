document.getElementById("submit").addEventListener("click", sum);

function sum() {
    var x = +document.getElementById('number1').value; 
    var n = +document.getElementById('number2').value;
    var s = 0;
    var it = 1;
    var i = 1;
    var contentEl = document.getElementById("content");
    do {
        i++;
        it = it * x;
        s = s + it; 
    } while (i <= n) {
        var pEl = document.createElement("p");
        pEl.innerHTML = "Tính Tổng:" + " " + s;
        contentEl.appendChild(pEl);
    }
    contentEl.style.display = "block";
}
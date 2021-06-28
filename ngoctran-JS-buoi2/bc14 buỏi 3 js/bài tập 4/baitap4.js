function tinhToan() {
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    var ketQuaEl = document.getElementById("ketQua");
    ketQuaEl.innerHTML = ""
    
    var chuViEl = document.createElement("h");
    chuViEl.innerHTML = "Chu vi: " + chuVi;

    var dienTichEl = document.createElement("h");
    dienTichEl.innerHTML = "Diện tích: " + dienTich;

    ketQuaEl.appendChild(chuViEl);
    ketQuaEl.appendChild(dienTichEl)
}
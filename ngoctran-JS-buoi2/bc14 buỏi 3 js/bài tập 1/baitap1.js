const LUONG_CO_BAN = 100000

function tinhLuong() {
    var soNgayLam = document.getElementById('soNgayLam').value
    console.log(typeof soNgayLam);

    var soLuong = LUONG_CO_BAN * +soNgayLam;

    var spanEl = document.createElement("span");
    spanEl.innerHTML = "số lương: " + soLuong;

    var soLuongEl = document.getElementById("soLuong");
    soLuongEl.innerHTML = ""
    soLuongEl.style.display = "block";
    soLuongEl.appendChild(spanEl);
}
document.getElementById('tinhTien').addEventListener('click', hienThi)
function hienThi() {
    var tongTien = tinhTien();
    var divThanhTien = document.getElementById("divThanhTien");
    divThanhTien.style.display = "block";

  var spanXuatTien = document.getElementById("xuatTien");
  spanXuatTien.innerHTML = tongTien
}
function tinhTien() {
    var ten = document.getElementById("ten").value;
    var soKw = document.getElementById("soKw").value;
    var rule = quyTac();

    switch (rule) {
       case "tiendien": {
           const KW_1 = 500;
           const KW_2 = 650;
           const KW_3 = 850;
           const KW_4 = 1100;
           const KW_5 = 1300;

           return tinhChiTiet(ten, soKw, KW_1, KW_2, KW_3, KW_4, KW_5);
       } 

    }
}
// Tính tiền 0 < 50
function tinhTien50KwDau(soKw, giaTien) {
    return (soKw - 50) * KW_1;
}
// tính tiền 50 < 100
function tinhTien50KwKe(soKw, giaTien) {
    return (soKw - 100) * KW_2;
}
function tinhTien100KwKe(soKw, giaTien) {
    return (soKw - 100) * KW_2;
}

// 

function tinhChiTiet(ten, soKw, KW_1, KW_2, KW_3, KW_4, KW_5) {
    var tienDien 

    if (0 < soKw && soKw <= 50 ) {
        
    }
}
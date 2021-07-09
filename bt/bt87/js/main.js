document.getElementById('tinhDiem').addEventListener('click', hienThi)
function hienThi() {
    var tongDiem = tinhDiem();
    var divTinhDiem = document.getElementById("divTinhDiem");
    divTinhDiem.style.display = "block";
  
    var spanXuatDiem = document.getElementById("xuatDiem");
    spanXuatDiem.innerHTML = tongDiem
  }
  function tinhDiem() {
      var diemToan = document.getElementById("diemToan").value;
      var diemVan = document.getElementById("diemVan").value;
      var diemAnh = document.getElementById("diemAnh").value;
      var khuVuc = khuVucUuTien();
  }
  switch (khuVuc) {
    case "khuA": {
        const KHUVUC_A = 2;
        return tinhChiTiet(diemToan, diemVan, diemAnh, KHUVUC_A);
        break;
    }
    case "khuB": {
        const KHUVUC_B = 1;
        return tinhChiTiet(diemToan, diemVan, diemAnh, KHUVUC_B);
        break;

    }
    case "khuC": {
        const KHUVUC_C = 0.5;
        return tinhChiTiet(diemToan, diemVan, diemAnh, KHUVUC_C);
        break;
    }
    case "khuX": {
        const KHUVUC_X = 0;
        return tinhChiTiet(diemToan, diemVan, diemAnh, KHUVUC_X);
        break;
    }
  }
//   function tinhDiemUuTien(khuA, doiTuong1)
//   var doiTuong = 0;



  
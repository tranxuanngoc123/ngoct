function NhanVien (taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
}
NhanVien.prototype.tinhLuong = function() {
    // return(this.gioLam * (this.luongCB * this.chucVu) ) 
    if(this.chucVu === "Sếp") {
        this.tinhLuong = this.luongCB * 3 * this.gioLam;
        return(this.tinhLuong)
        
    } if(this.chucVu === "Trưởng phòng") {
        this.tinhLuong = this.luongCB * 2 * this.gioLam;
        return(this.tinhLuong)
        
    } if(this.chucVu === "Nhân viên") {
        this.tinhLuong = this.luongCB * 1 * this.gioLam;
        return(this.tinhLuong)
    }
    
}

document.getElementById('btnThemNV').addEventListener('click', themNV);
document.getElementById("btnCapNhat").addEventListener("click", capNhatNhanVien);
document.getElementById('tableDanhSach').addEventListener('click', delegationTable);

var dsnv = []

//thêm nhân viên
function themNV() {
    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luongCB = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucVu').value;
    var gioLam = +document.getElementById('gioLam').value;

    var isValid = xacThucDuLieu(nhanVien)
    if(!isValid) {
        return
    }
    var nhanVien = new NhanVien (taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam)
    console.log(nhanVien);
    dsnv.push(nhanVien)
    console.log(dsnv);
    
   

    hienThi()
    resestForm()
}
//cập nhập
function capNhatNhanVien() {
    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luongCB = +document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucVu').value;
    var gioLam = +document.getElementById('gioLam').value;

    var isValid = xacThucDuLieu(nhanVien)
    if(!isValid) {
        return
    }
    var nhanVien = new NhanVien (taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam)
    console.log(nhanVien);
    dsnv = dsnv.map(function (nv) {
        if (nv.taiKhoan === taiKhoan) {
          return nhanVien;
        }
        return nv;
      });

    
      hienThi();
      resetForm();
}
//hiển thị
function hienThi() {
    var tbody =  document.getElementById('tableDanhSach');
    var html = ""
    for(var i = 0; i < dsnv.length; i += 1 ) {
        var nv = dsnv[i]
        html += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tinhLuong()}</td>
            <td>${nv.xepLoai}</td>
            <td>
                <button class="btn btn-primary" data-toggle="modal" data-target="#myModal"  data-action="select" data-tk="${nv.taiKhoan}">Cập nhập</button>
                <button class="btn btn-danger" data-action="delete" data-tk="${nv.taiKhoan}" >Xoá</button>
            </td>
        </tr>
       `
    }
    tbody.innerHTML = html
}

function resestForm() {
    updateForm({}) 
    document.getElementById("tknv").disabled = false;
}

function updateForm(nhanVien) {
    document.getElementById("tknv").value = nhanVien.taiKhoan || "";
    document.getElementById("name").value = nhanVien.hoTen || "";
    document.getElementById("email").value = nhanVien.email || "";
    document.getElementById("password").value = nhanVien.matKhau || "";
    document.getElementById("datepicker").value = nhanVien.ngayLam || "";
    document.getElementById("luongCB").value = nhanVien.luongCB || "";
    document.getElementById("chucVu").value = nhanVien.chucVu || "";
    document.getElementById("gioLam").value = nhanVien.gioLam || "";
}
function delegationTable(event) {
    console.log(event.target);
    var taiKhoan = event.target.getAttribute("data-tk");
    var action = event.target.getAttribute("data-action")
    if(action === "select") {
        chonNhanVien(taiKhoan);
    } 
    if(action === "delete") {
        xoaNhanVien(taiKhoan);
    }

}
// Xoá nhân viên
function xoaNhanVien(taiKhoan) {
    dsnv = dsnv.filter(function (nv) {
        return nv.taiKhoan !== taiKhoan;
    })

    hienThi()
}
// sửa lại nhân viên 
function chonNhanVien(taiKhoan) { 
    var nhanVien = dsnv.find(function (nv) {
        return nv.taiKhoan === taiKhoan;
    })
    document.getElementById("tknv").disabled = true;
    updateForm(nhanVien)
    resetForm(themNV)
}

function xacThucDuLieu(nhanVien) {
    var validator = new Validator() 
    isValid &= validator.isRequired("tbTKNV", nhanVien.taiKhoan) && validator.taiKhoan("tbTKNV", nhanVien.taiKhoan);
    isValid &= validator.isRequired("tbTen", nhanVien.hoTen);
    isValid &= validator.isRequired("tbEmail", nhanVien.email) && validator.email("tbEmail", nhanVien.email);
    isValid &= validator.isRequired("tbMatKhau", nhanVien.matKhau) && validator.matKhau("tbMatKhau", nhanVien.matKhau) ;
    isValid &= validator.isRequired("tbNgay", nhanVien.ngayLam);
    isValid &= validator.isRequired("tbLuongCB", nhanVien.luongCB) && validator.luongCB("tbLuongCB", nhanVien.luongCB);
    isValid &= validator.isRequired("tbChucVu", nhanVien.chucVu);
    isValid &= validator.isRequired("tbGiolam", nhanVien.gioLam) && validator.gioLam("tbGiolam", nhanVien.gioLam); 

    if (!isValid) {
        for (var key in validator.errors) {
          if (validator.errors[key]) {
            document.getElementById(key).innerHTML = validator.errors[key];
          }
        }
        return false;
      }
      return true;
}
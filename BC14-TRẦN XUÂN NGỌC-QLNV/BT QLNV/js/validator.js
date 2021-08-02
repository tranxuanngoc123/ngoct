function Validator() {
    this.errors = {};
}

Validator.prototype.isRequired = function(name, value) {
    if (!value) {
        this.errors[name] = "Vui lòng nhập vào ô này";
        return false;
    }
    return true;
}
//tài khoản
Validator.prototype.taiKhoan = function(name, value) {
    if(!/^[0-9]{4,6}/.test(value)) {
        this.errors[name] = "Nhập tài khoản";
        return false;
    }
    return true;
}

// họ và tên

// Validator.prototype.hoTen = function(name, value) {
//     if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value)) {
//         this.errors[name] = "Nhập tên vào";
//         return false;
//     }
//     return true;
// }

//email
Validator.prototype.email = function(name, value) {
    if(value.indexOf("@") === -1) { //!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        this.errors[name] = "Email không đúng";
        return false;
    }
    return true;
}
//mật khẩu
Validator.prototype.matKhau = function(name, value) {
    if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}/.test(value)) {
        this.errors[name] = "Mật khẩu không đúng";
        return false;
    }
    return true;
}
// lương cơ bản
Validator.prototype.luongCB = function(name, value) {
    if(!/^[0-9]{1000000,20000000}/.test(value)) {
        this.errors[name] = "Nhập tài khoản";
        return false;
    }
    return true;
}

// giờ làm
Validator.prototype.gioLam = function(name, value) {
    if(!/^[0-9]{80,200}/.test(value)) {
        this.errors[name] = "Nhập tài khoản";
        return false;
    }
    return true;
}

const GIA_TRI_TIEN_VIET = 23500

function quyDoi() {
    var nhapTienDo = document.getElementById('nhapTienDo').value 
    console.log(typeof nhapTienDo);
    var tienViet = GIA_TRI_TIEN_VIET * +nhapTienDo;

    var spanEl = document.createElement("span");
    spanEl.innerHTML = "Tiền Việt: " + tienViet;

    var tienVietEl = document.getElementById("tienViet");
    tienVietEl.innerHTML = ""
    tienVietEl.style.display = "block";
    tienVietEl.appendChild(spanEl);
}
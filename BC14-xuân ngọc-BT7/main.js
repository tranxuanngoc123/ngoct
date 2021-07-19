document.getElementById("sum").addEventListener("click", tinhTong);
function tinhTong() {
    var n = +document.getElementById('number').value;
    var contentEl = document.getElementById('content')
    var s = 0;
    var index = 0;
    while(index <= n) {
        if (index >= 0 ) {
            s += index;
        }
        index++;
        // var pEl = document.createElement('p');
        // pEl.innerHTML = "tổng số nguyên dương" + s;
        // contentEl.appendChild(pEl);
        contentEl.style.display = "block";
        contentEl.innerHTML = "tinh tổng " + s;
    }
}


// function tinh_tong(n)
//     {
//         var tong = 0;
//         var index = 0;

//         while (index <= n)
//         {
//             // Nếu số chẵn thì cộng vào
//             if (index >= 0){
//                 tong += index;
//             }

//             // tăng biến đếm
//             index++;
//         }
//         return tong;
//     }

//     var n = parseInt(prompt("Nhập số cần kiểm tra"));
//     document.write("Tổng số chẵn từ 1 tới " + n + " là: " + tinh_tong(n));



// function tinh_tong(n)
// {
//     var tong = 0;
//     var index = 0;
 
//     while (index <= n)
//     {
//         // Nếu số chẵn thì cộng vào
//         if (index % 2 == 0){
//             tong += index;
//         }
 
//         // tăng biến đếm
//         index++;
//     }
 
//     document.write("Tổng số chẵn từ 1 tới " + n + " là: " + tong + "<br/>"); }
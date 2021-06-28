function total4(){
    var sum1= document.getElementById("sum").value;
    var soChuc=Math.floor(sum1/10);
    var soDonVi=Math.floor(sum1%10);
    var sum2= parseInt(soChuc)+ parseInt(soDonVi);


    var sum4 = document.getElementById("sum3");
    sum4.innerHTML = "kết quả:" + sum2;
}
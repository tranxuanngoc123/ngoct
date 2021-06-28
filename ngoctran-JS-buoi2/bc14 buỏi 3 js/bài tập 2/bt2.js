
function total1(){
    var average= document.getElementById("number").value;
    var soThu1=Math.floor(average/10000);
    var soThu2=Math.floor(average/1000%10);
    var soThu3=Math.floor(average/100%100%10);
    var soThu4=Math.floor(average%1000/10%10)
    var soThu5=Math.floor(average%10)
   var average1= (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
   console.log(average1);
   var pTongTien= document.getElementById("average2");
   pTongTien.innerHTML= "Kết quả trung bình:" + average1;

}
function click10div(){
    var divcontent = document.getElementById("content4");
    for ( var i = 1; i<=10; i++) {
        if ( i %2==0){   
              var ptitle = document.createElement("p");
              ptitle.innerHTML="Div số chẵn:"+" " + i;
              ptitle.style.background= "red";
              ptitle.style.display="block";
              ptitle.style.padding="10px 40px"
              ptitle.style.fontSize="10px"
             divcontent.appendChild(ptitle);
        }
        if ( i %2!=0){   
            var prs = document.createElement("p");
            prs.innerHTML = "Số lẻ:"+" "+i;
            prs.style.background= "aqua";
            prs.style.display="block";
            prs.style.padding="10px 40px"
            prs.style.fontSize="10px";
            divcontent.appendChild(prs);
        }
    }
    

}
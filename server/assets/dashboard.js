counter = document.getElementById("counter");
var num = 722; 
function counting() {
      if(num === 0){
        counter.innerText = "";
    }else{
        num = num - 1;
        counter.innerText = " Expires in " + num + " Secs"
    }
}




refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
    num = 722;
})
   

    setInterval(counting, 1000);
    

 copy = document.getElementById("copy");
copy.addEventListener("click", () =>
 {
    var copyText = document.getElementById("address");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

)
















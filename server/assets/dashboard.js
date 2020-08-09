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
    document.execCommand("copy")
    alert("Copied the text: " + copyText.value);
  }

)

//  show the correct thing when  user tries to withdraw
let balance = document.getElementsByClassName('balance-amt');
let starter = document.getElementsByClassName('starter');
let starterLow = document.getElementsByClassName('staterlow')


if(balance == 0){
    starter.classList.remove("show")
}
console.log(starter);














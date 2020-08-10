
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
var copyText = document.getElementById("address");
copy.addEventListener("click", () =>
 {
    copyText.select();
    document.execCommand("copy")
  }

)

copyText.addEventListener("click", (e)=>{
    e.preventDefault();
})

//  show the correct thing when  user tries to withdraw
let balance = document.getElementById('balance-amt');
let starter = document.getElementById('starter');
let starterLow = document.getElementById('staterlow')


if(balance.innerText == "$00.00"){
    starter.classList.remove("showup");
}
console.log(balance);














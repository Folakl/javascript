
let user = JSON.parse(localStorage.getItem("users"))
currentname.innerHTML = user[1].Name
accountnumbernew.innerHTML = user[1].accountnumber
function deposit(){
   let one = document.getElementById("addbalanceId")
   let two = parseFloat(one.value)
    let depo = user[1].balance + two
   console.log(depo);
   yourbalance.innerHTML = depo
   user[1].balance = depo
}

function withdraw(){
   let one = document.getElementById("addbalanceId")
   let two = parseFloat(one.value);
   let widraw = user[1].balance - two 
   console.log(widraw);
   yourbalance.innerHTML = widraw
   user[1].balance = widraw
}
function logout(){   
   alert("logging out")
   setTimeout(() => {
      navigateTo("signup")
   }, 2000);
}

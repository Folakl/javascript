let name = localStorage.getItem(JSON.stringify("Thisuser.name"));
let accountnumber = localStorage.getItem(JSON.stringify("Thisuser.accountnumber"));
let balance = localStorage.getItem(JSON.stringify("Thisuser.balance"));
// in order to display the current user name
document.getElementById("currentname").innerHTML = name;
// in order to display the current user accountnumber
document.getElementById("accountnumbernew").innerHTML = accountnumber;
// in order to display the current user balance
document.getElementById("yourbalance").innerHTML = balance;


function deposit(){
    let newbalance = addbalance.value;
    let depo = balance + newbalance
    document.getElementById("balance").innerHTML = depo

}
function withdraw(){
    let newbalance = addbalance.value;
    let depo = balance - newbalance
    document.getElementById("balance").innerHTML = depo

}
function delet(){
    store.pop()
}
function logout(){
    alert("loging out")
    navigateTo("signup")
}

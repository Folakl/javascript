function login(){
  let name_one = document.getElementById("nameId")
let password = document.getElementById("passwordId")

let name_two = name_one.value
let password_two = password.value
let user = JSON.parse(localStorage.getItem("users"))
console.log(user);

if (name_two === user[1].Name && password_two === user[1].password  ) {
  alert("logging in")
   setTimeout(() => {
    navigateTo("balance")
   }, 1000);
  
} else if (name_two !== user[1].Name && password_two !== user[1].password  ) {
  alert("you do not have an account yet,create one here")
  navigateTo("signup")
}
else {
  console.log("not working"); 
}
}
function resetpassword(){
  let u = Math.random().toString(36)
    alert(u);
  //  localStorage.setItem( user,JSON.stringify(u))
  //  JSON.parse(localStorage.getItem(user))
   

}
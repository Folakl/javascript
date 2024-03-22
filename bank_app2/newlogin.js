// let name = nameId.value;
// let password = passwordId.value;
// let currentuser = JSON.parse(localStorage.getItem("store"))

// let check = JSON.parse(localStorage.getItem("store"))
//  function login()
 
// {
//     if (check !== check[0].name && check !== check[0].password){
//         alert("you do not have an account yet,signup here?")
//         navigateTo("signup")
    
// }
// else{
//     alert("log in succesful")
//     localStorage.setItem(JSON.parse("Thisuser"))
//     navigateTo("balance")
// }

// }
// function reset(){
//     let newpassword = Math.floor((Math.random()*10000000000 +1))
//     alert(newpassword) 
// }
let name_one = document.getElementById("nameId")
let password = document.getElementById("passwordId")
let jjj = document.getElementById("rasak")
let iii = jjj.value
let name_two = name_one.value
let password_two = password.value
let user = JSON.parse(localStorage.getItem("users"))
console.log(user);
function login(){
console.log(name_two);
// if (name_one !== user[1].Name && password !== user[1].password ) {
//       alert("you do not have an account yet,sign up here")
      
// } else       {
      
//    navigateTo("balance")
    
// }
}

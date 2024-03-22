
// function clickheretoGenerate(){
//    let math = Math.floor(Math.random()*10000000000) +1;
//    document.getElementById("generate").innerHTML = math
// }

// function clickheretoGenerate(){
//    let username = username.value
// let password = password.value
//    if (username === null && password ===  null){
//       alert("enter your username and password")
//    }
//    else{
//       let math = Math.floor(Math.random()*10000000000) +1;
//       document.getElementById("generate").innerHTML = math
//    }
// }


let user = [];
let password;
let Name;
let accountnumber;
let userobject;
let balance;
function clickheretoGenerate(){

   Name = Username.value;
   password = passwordId.value;
   accountnumber = Math.floor((Math.random()*10000000000 +1));

  userobject = {Name , password , accountnumber , balance : 0}
  user.push(userobject);
  document.getElementById("generate").innerHTML= userobject.accountnumber
   olduser = JSON.parse(localStorage.getItem('Users'))


   if (olduser){user = olduser}
   userobject = {Name,password,accountnumber,balance:0}
   user.push(userobject);
   localStorage.setItem("users",JSON.stringify(user))
   // console.log(localStorage);
}


function create(){
   if(Name === null && password === null){
      alert('enter your username and password');
       }
   else {
      navigateTo('login')
   }
}





let bankuser = [];
let userObject;

   let actualName = document.getElementById("nameId")
  let actualpassword = document.getElementById("passwordId")
  let actualEmail = document.getElementById("EmailId")
   let  accountnumber = Math.floor((Math.random()*10000000000 +1));
  let balance = 0
    

    
    bankuser.push(userObject)
   
    function clickhereTogenerate(){
        let Name = actualName.value;
        let password = actualpassword.value;
        let email = actualEmail.value;
       
       userObject = { Name,password,accountnumber,balance,email}
       bankuser.push(userObject)
       localStorage.setItem("users",JSON.stringify(bankuser))
       let user = JSON.parse(localStorage.getItem("users"))

       if (Name !== ""  && password !== "" && email !== "") {
        generate.innerHTML = accountnumber
        
       } else {
        alert("fill in required details")        
       }
       
    }
 function create(){
    let Name = actualName.value;
    let password = actualpassword.value;
    let email = actualEmail.value;
   if (Name !== "" && password !== "" && email !== "") {
        alert("account generated successfully,")
        setTimeout(() => {
         navigateTo("login")
          
        }, 1000)
      
   }
  
   else{
    alert("fill in  required details")
   }
}
    



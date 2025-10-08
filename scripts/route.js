function brandInput(){
    window.location.href = "/Index.html"
}
function navigateTo(page){
    if (page === "signup" ){
    window.location.href = "Signup.html"
    }
    else if (page === "createaccount"){
        window.location.href = "/Signup.html"
    }
    else if (page === "forgotPassword"){
        window.location.href = "/reset.html"
    }
    else if (page === "balance"){
        window.location.href = "/balance.html"
    }
    else if (page === "login"){
        window.location.href = "/login.html"
    }
    else if (page === "home"){
        window.location.href = "/Index.html"
    }
    else{
        alert("page not found")
    }
}
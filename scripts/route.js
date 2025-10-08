function brandInput(){
    window.location.href = "/javascript/Index.html"
}
function navigateTo(page){
    if (page === "signup" ){
    window.location.href = "/javascript/src/pages/Signup.html"
    }
    else if (page === "createaccount"){
        window.location.href = "/javascript/src/pages/login.html"
    }
    else if (page === "forgotPassword"){
        window.location.href = "/javascript/src/pages/reset.html"
    }
    else if (page === "balance"){
        window.location.href = "/javascript/src/pages/balance.html"
    }
    else if (page === "login"){
        window.location.href = "/javascript/src/pages/login.html"
    }
    else if (page === "home"){
        window.location.href = "/javascript/Index.html"
    }
    else{
        alert("page not found")
    }
}
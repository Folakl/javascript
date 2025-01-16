function brandInput(){
    window.location.href = "ecommerce.html"
}
function navigateTo(page){
    if (page === "signup" ){
    window.location.href = "/index.html"
    }
    else if (page === "createaccount"){
        window.location.href = "pages/login.html"
    }
    else if (page === "forgotPassword"){
        window.location.href = "/pages/reset.html"
    }
    else if (page === "balance"){
        window.location.href = "/pages/balance.html"
    }
    else if (page === "login"){
        window.location.href = "/pages/login.html"
    }
    else if (page === "home"){
        window.location.href = "/pages/ecommerce.html"
    }
    else{
        alert("page not found")
    }
}
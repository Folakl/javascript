function brandInput(){
    window.location.href = "ecommerce.html"
}
function navigateTo(page){
    if (page === "signup" ){
    window.location.href = "index.html"
    }
    else if (page === "createaccount"){
        window.location.href = "login.html"
    }
    else if (page === "forgotPassword"){
        window.location.href = "reset.html"
    }
    else if (page === "balance"){
        window.location.href = "balance.html"
    }
    else if (page === "login"){
        window.location.href = "login.html"
    }
    else if (page === "home"){
        window.location.href = "ecommerce.html"
    }
    else{
        alert("page not found")
    }
}
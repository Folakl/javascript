
 let searchBtn = document.getElementById("searchBtn")
 let result1 = document.getElementById("result")
 let result2 = document.getElementById("result2")
 let result3 = document.getElementById("answer3")
 let result4 = document.getElementById("result4")
 let result5 = document.getElementById("result5")
 let result6 = document.getElementById("answer6")
 let result7 = document.getElementById("result7")
 let image  = 'https://jsonplaceholder.typicode.com/users'
  let  input = document.getElementById("userInput")
 function search(){
       fetch(image)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
        let randomUser = data[Math.floor(Math.random() * data.length)];
            console.log(randomUser);
        result1.innerHTML = randomUser.name 
        result2.innerHTML = randomUser.email
        result3.innerHTML = randomUser.address.suite
        result4.innerHTML = randomUser.phone
        result5.innerHTML = randomUser.username
        result7.innerHTML = randomUser.website 
    })
        .catch(error => console.log('Error', error))
    
        }
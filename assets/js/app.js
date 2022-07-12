var register = document.querySelector('#register')

register.addEventListener("submit", (e) => {

    var username = document.querySelector('#username').value.trim()
    var password = document.querySelector('#password').value.trim()
    var email = document.querySelector('#email').value.trim()

    let a = 0;

    if (username == "" || email == "" || password == "") {
        alert("Filling All Inputs!");
      } 
      else {
        if (user.substring(0, 1) != user.substring(0, 1).toUpperCase()) {
        
          document.querySelector("#username").classList.add("active-worning");
          document.querySelector('#user-worning').innerHTML='The first letter must be capitalized'
        } else {
          a++;
          document.querySelector("#user").classList.add("active-success");
          document.querySelector('#user-worning').innerHTML=''
    
        }

}

)
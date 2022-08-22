const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
   
    const Email = event.currentTarget.elements.email.value;
    const Password = event.currentTarget.elements.password.value;

    if(Email === "" || Password === ""){
        alert("All fields must be filled");
    } else {
        let obj = {
            Email,
           Password,
        };
        console.log(obj);
    }

    form.reset();
}

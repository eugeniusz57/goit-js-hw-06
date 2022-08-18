const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    const obj = [];
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if(email === ""){
        alert("Enter Email");
    }
    if(password === ""){
        alert("Enter Password");
    }

    const formData = new FormData(event.currentTarget)
   
    formData.forEach((value, name) => {
    //    console.log(name);
    //    console.log(value);
       obj.push({
        [name]: value,})
        })

   
    console.log(obj);
 form.reset();
}

let form=document.getElementById("myform");
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    validate();
});
function validate()
{
    let firstname = document.getElementById('fname');
    let lastname = document.getElementById('lname');
    let mail = document.getElementById('mail');
    let phone=document.getElementById("ph");
    let password = document.getElementById('pswd');
    let cpassword = document.getElementById('Cpswd');
    let gen1=document.getElementById("gen1");
    let gen2=document.getElementById("gen2");
    let gen3=document.getElementById("gen3");
    let dateofbirth = document.getElementById('dob');
    let message =document.getElementById("description");
    let lang1=document.getElementById("lang1");
    let lang2=document.getElementById("lang2");
    let lang3=document.getElementById("lang3");
    let file=document.getElementById("file");
    let border=document.getElementsByClassName("border");
    let blue=document.getElementsByClassName("blue");
    // let errors=document.getElementsByClassName("errors");
    let fail=document.getElementsByClassName("fa-circle-exclamation");
    let validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let validPhone=/^\d{10}$/;
    let validEmail=/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9+_.-]+/;
    let name=/[!@#$%^&*]/;
     
        //  firstname validation
    if(firstname.value.trim()== "") 
        {
            firstname.nextElementSibling.innerHTML="Please enter the name";
            // fail[0].style.visibility="visible";
             firstname.className="border icon";
        }
    else if(!isNaN(firstname.value))
        {
            firstname.nextElementSibling.innerHTML="Name should be in character";
            // fail[0].style.visibility="visible";
            firstname.className="border icon";
            
        }
    else if(firstname.value.match(name))
        {
            firstname.nextElementSibling.innerHTML="Name should not be special characters";
            // fail[0].style.visibility="visible";
            firstname.className="border icon";

        }
    else
        {
            firstname.nextElementSibling.innerHTML=" ";
            // fail[0].style.visibility="hidden";
            firstname.className="border";
        }
        // lastname validation
    if(lastname.value.trim()==="") 
        {
            lastname.nextElementSibling.innerHTML="Enter the last name";
            // fail[1].style.visibility="visible";
            lastname.className="red";
            firstname.className="border icon";
           
        }
    else if(!isNaN(lastname.value))
        {
            lastname.nextElementSibling.innerHTML="Name should be in character";
            fail[1].style.visibility="visible";
            
        }
    else if(lastname.value.match(name))
        {
            lastname.nextElementSibling.innerHTML="Name should not be special characters";
            fail[1].style.visibility="visible";
        }
    else
        {
            lastname.nextElementSibling.innerHTML=" ";
            fail[1].style.visibility="hidden";
        }
        // Email validation
    if(mail.value.trim()=="")
        {
            mail.nextElementSibling.innerHTML="Enter email";
            fail[2].style.visibility="visible";
           
        }
    else if (!mail.value.match(validEmail))
        {
           mail.nextElementSibling.innerHTML="Enter a valid email";
           fail[2].style.visibility="visible";
        }
    else
        {
            mail.nextElementSibling.innerHTML=" ";
            fail[2].style.visibility="hidden";
        }
    
        // password validation
    if(password.value.trim()=="")
        {
            password.nextElementSibling.innerHTML="Enter the Password";
            fail[3].style.visibility="visible";
        }
    else if(!password.value.match(validPassword))
        {
            password.nextElementSibling.innerHTML="Atleast 1 capital,smallletter & special characters";
            fail[3].style.visibility="visible";
        }
    else
         {
            password.nextElementSibling.innerHTML=" ";
            fail[3].style.visibility="hidden";
        }
        //confirm-password Validdation
    if(cpassword.value!=password.value)
        {
            cpassword.nextElementSibling.innerHTML="Password doesn't match";
            fail[4].style.visibility="visible";
        }
    else
        {
            cpassword.nextElementSibling.innerHTML=" ";
            fail[4].style.visibility="hidden";
        }
        // gender validation
    if(gen1.checked==false && gen2.checked==false && gen3.checked==false)
        {
         gen3.nextElementSibling.innerHTML="Select the gender";
         fail[5].style.visibility="visible";
        }
    else{
        gen3.nextElementSibling.innerHTML="";  
        fail[5].style.visibility="hidden";
        }
        // dob validation
    if (dateofbirth.value.trim()=="")
        {
            dateofbirth.nextElementSibling.innerHTML="Enter the date";
            fail[6].style.visibility="visible";
        }
    else
        {
            dateofbirth.nextElementSibling.innerHTML=" ";
            fail[6].style.visibility="hidden";
        }
        // phone no validation
    if(phone.value.trim()=="")
        {
            phone.nextElementSibling.innerHTML="Enter phone no:";
            fail[7].style.visibility="visible";
        }
    else if(!phone.value.match(validPhone))
        {
            phone.nextElementSibling.innerHTML="Enter a valid number";
            fail[7].style.visibility="visible";
        }
    else
        {
            phone.nextElementSibling.innerHTML=" ";
            fail[7].style.visibility="hidden";
        }
        // message validation
    if(message.value.trim()=="")
       {
           message.nextElementSibling.innerHTML="Message feild cannot be empty";
           fail[8].style.visibility="visible";
       }
    else
       {
            message.nextElementSibling.innerHTML=" ";
            fail[8].style.visibility="hidden";
       }
        // language validation
    if(lang1.checked==false && lang2.checked==false && lang3.checked==false)
        {
            lang3.nextElementSibling.innerHTML="Select a language";
            fail[9].style.visibility="visible";
         }
    else
        {
            lang3.nextElementSibling.innerHTML=" ";
            fail[9].style.visibility="hidden";
        }
        //  file validation
    if(file.value.trim()=="") 
        {
            file.nextElementSibling.innerHTML="Choose a file";
            fail[10].style.visibility="visible";
        }
    else
        {
             file.nextElementSibling.innerHTML=" ";
             fail[10].style.visibility="hidden";
        }
}

















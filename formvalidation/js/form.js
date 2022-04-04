let form=document.getElementById("myform");
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    validate();
});
function validate()
{
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let mail = document.getElementById('mail').value;
    let phone=document.getElementById("ph").value;
    let password = document.getElementById('pswd').value;
    let cpassword = document.getElementById('Cpswd').value;
    let gen=document.getElementsByClassName("gen");
    let dateofbirth = document.getElementById('dob').value;
    let description =document.getElementById("description").value;
    let lang1=document.getElementById("lang1").checked;
    let lang2=document.getElementById("lang2").checked;
    let lang3=document.getElementById("lang3").checked;
    let file=document.getElementById("file").value;
    let errors=document.getElementsByClassName("errors");
    let fail=document.getElementsByClassName("fa-circle-exclamation");
    let validPhone=/\d{10}$/;
    let validEmail=/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9+_.-]+/;
    let name=/[!@#$%^&*]/;
     
        //  firstname validation
    if(firstname == "") 
        {
            errors[0].innerHTML="please enter the name";
            fail[0].style.visibility="visible";
        }
        else if(!isNaN(firstname))
        {
            errors[0].innerHTML="name should be in character";
            fail[0].style.visibility="visible";
            
        }
        else if(firstname.match(name))
        {
            errors[0].innerHTML="Name should not be special characters";
            fail[0].style.visibility="visible";
        }
        else
        {
            errors[0].innerHTML=" ";
            fail[0].style.visibility="hidden";
        }
        // lastname validation
    if(lastname == "") 
        {
            errors[1].innerHTML="enter the last name";
            fail[1].style.visibility="visible";
           
        }
        else if(!isNaN(lastname))
        {
            errors[1].innerHTML="name should be in character";
            fail[1].style.visibility="visible";
            
        }
        else if(lastname.match(name))
        {
            errors[1].innerHTML="Name should not be special characters";
            fail[1].style.visibility="visible";
        }
        else
        {
            errors[1].innerHTML=" ";
            fail[1].style.visibility="hidden";
        }
        // Email validation
    if(mail=="")
        {
            errors[2].innerHTML="enter email";
            fail[2].style.visibility="visible";
           
        }
        else if (!mail.match(validEmail))
        {
           errors[2].innerHTML="enter a valid email";
           fail[2].style.visibility="visible";
        }
        else
        {
            errors[2].innerHTML=" ";
            fail[2].style.visibility="hidden";
        }
    
        // password validation
    if(password == "")
        {
            errors[3].innerHTML="enter the Password";
            fail[3].style.visibility="visible";
        }
        else if(password.length<8)
        {
            errors[3].innerHTML="enter atleast 8 characters";
            fail[3].style.visibility="visible";
        }
        else
         {
            errors[3].innerHTML=" ";
            fail[3].style.visibility="hidden";
        }
        //confirm-password Validdation
    if(cpassword!=password)
        {
            errors[4].innerHTML="password doesn't match";
            fail[4].style.visibility="visible";
        }
        else
        {
            errors[4].innerHTML=" ";
            fail[4].style.visibility="hidden";
        }
        // gender validation
    if(gen[0].checked==false && gen[1].checked==false && gen[2].checked==false)
        {
         errors[5].innerHTML="select the gender";
         fail[5].style.visibility="visible";
        }
     else{
        errors[5].innerHTML="";  
        fail[5].style.visibility="hidden";
        }
        // dob validation
    if (dateofbirth == "")
        {
            errors[6].innerHTML="enter the date";
            fail[6].style.visibility="visible";
        }
        else
        {
            errors[6].innerHTML=" ";
            fail[6].style.visibility="hidden";
        }
        // phone no validation
    if(phone=="")
        {
            errors[7].innerHTML="enter phone no:";
            fail[7].style.visibility="visible";
        }
        else if(!phone.match(validPhone))
        {
            errors[7].innerHTML="enter a valid number";
            fail[7].style.visibility="visible";
        }
        else
        {
            errors[7].innerHTML=" ";
            fail[7].style.visibility="hidden";
        }
        // message validation
    if(description.length<10)
       {
           errors[8].innerHTML="message feild cannot be empty";
           fail[8].style.visibility="visible";
       }
       else
       {
            errors[8].innerHTML=" ";
            fail[8].style.visibility="hidden";
       }
        // language validation
    if(lang1==false && lang2==false && lang3==false)
        {
            errors[9].innerHTML="select a language";
            fail[9].style.visibility="visible";
         }
        else
        {
            errors[9].innerHTML=" ";
            fail[9].style.visibility="hidden";
        }
        //  file validation
    if(file=="") 
        {
            errors[10].innerHTML="choose a file";
            fail[10].style.visibility="visible";
        }
        else
        {
            errors[10].innerHTML=" ";
            fail[10].style.visibility="hidden";
        }
}

















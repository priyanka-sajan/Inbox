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
            error(firstname,"first name cannot be empty");
            // fail[0].style.visibility="visible";
            //  firstname.className="border icon";
        }
    else if(!isNaN(firstname.value))
        {
            // firstname.nextElementSibling.innerHTML="Name should be in character";
            // fail[0].style.visibility="visible";
            // firstname.className="border icon";
            error(firstname,"Name should be in character");
            
        }
    else if(firstname.value.match(name))
        {
            // firstname.nextElementSibling.innerHTML="Name should not be special characters";
            // fail[0].style.visibility="visible";
            // firstname.className="border icon";
            error(firstname,"Name should not be special characters");


        }
    else
        {
            // firstname.nextElementSibling.innerHTML=" ";
            // fail[0].style.visibility="hidden";
            // firstname.className="border";
            success(firstname);

        }
        // lastname validation
    if(lastname.value.trim()==="") 
        {
            // lastname.nextElementSibling.innerHTML="Enter the last name";
            // fail[1].style.visibility="visible";
            // lastname.className="red";
            // firstname.className="border icon";
            error(lastname,"Last name cannot be empty");
           
        }
    else if(!isNaN(lastname.value))
        {
            // lastname.nextElementSibling.innerHTML="Name should be in character";
            // fail[1].style.visibility="visible";
            error(lastname,"Name should be in character");
            
        }
    else if(lastname.value.match(name))
        {
            // lastname.nextElementSibling.innerHTML="Name should not be special characters";
            // fail[1].style.visibility="visible";
            error(lastname,"Name should not be special characters");
        }
    else
        {
            // lastname.nextElementSibling.innerHTML=" ";
            // fail[1].style.visibility="hidden";
            success(lastname);
        }
        // Email validation
    if(mail.value.trim()=="")
        {
           //mail.nextElementSibling.innerHTML="Enter email";
            //fail[2].style.visibility="visible";
            error(mail,"Email field is required");
           
        }
    else if (!mail.value.match(validEmail))
        {
           //mail.nextElementSibling.innerHTML="Enter a valid email";
           //fail[2].style.visibility="visible";
           error(mail,"Enter a valid email");
        }
    else
        {
            //mail.nextElementSibling.innerHTML=" ";
           // fail[2].style.visibility="hidden";
           success(mail);
        }
    
        // password validation
    if(password.value.trim()=="")
        {
            //password.nextElementSibling.innerHTML="Enter the Password";
            //fail[3].style.visibility="visible";
            error(password,"Password field is required");
        }
    else if(!password.value.match(validPassword))
        {
            //password.nextElementSibling.innerHTML="Atleast 1 capital,smallletter & special characters";
            //fail[3].style.visibility="visible";
            error(password,"Atleast 1 capital,smallletter & special characters");
        }
    else
         {
            //password.nextElementSibling.innerHTML=" ";
            //fail[3].style.visibility="hidden";
            success(password);
        }
        //confirm-password Validdation
    if(cpassword.value=="")
        {
            error(cpassword,"enter password"); 
        }
    else if(cpassword.value!=password.value)
        {
            //cpassword.nextElementSibling.innerHTML="Password doesn't match";
            //fail[4].style.visibility="visible";
            error(cpassword,"Password doesn't match");
        }
    else
        {
            //cpassword.nextElementSibling.innerHTML=" ";
            //fail[4].style.visibility="hidden";
            success(cpassword);
        }
        // gender validation
    if(gen1.checked==false && gen2.checked==false && gen3.checked==false)
        {
        //  gen3.nextElementSibling.innerHTML="Select the gender";
        //  fail[5].style.visibility="visible";
        error(gen1,"Select the gender");
        }
    else{
        // gen3.nextElementSibling.innerHTML="";  
        // fail[5].style.visibility="hidden";
        success(gen1);
        }
        // dob validation
    if (dateofbirth.value.trim()=="")
        {
            // dateofbirth.nextElementSibling.innerHTML="Enter the date";
            // fail[6].style.visibility="visible";
            error(dateofbirth,"Enter the date");
        }
    else
        {
            // dateofbirth.nextElementSibling.innerHTML=" ";
            // fail[6].style.visibility="hidden";
            success(dateofbirth);
        }
        // phone no validation
    if(phone.value.trim()=="")
        {
            // phone.nextElementSibling.innerHTML="Enter phone no:";
            // fail[7].style.visibility="visible";
            error(phone,"Enter the phone no:");
        }
    else if(!phone.value.match(validPhone))
        {
            // phone.nextElementSibling.innerHTML="Enter a valid number";
            // fail[7].style.visibility="visible";
            error(phone,"Enter a valid number");
        }
    else
        {
            // phone.nextElementSibling.innerHTML=" ";
            // fail[7].style.visibility="hidden";
            success(phone);
        }
        // message validation
    if(message.value.trim()=="")
       {
        //    message.nextElementSibling.innerHTML="Message feild cannot be empty";
        //    fail[8].style.visibility="visible";
        error(message,"Message feild cannot be empty"); 
       }
    else if (message.value.length<10)
    {
        error(message,"Address must contain more than 10 characters");

    }
    else
       {
            // message.nextElementSibling.innerHTML=" ";
            // fail[8].style.visibility="hidden";
            success(message);
       }
        // language validation
    if(lang1.checked==false && lang2.checked==false && lang3.checked==false)
        {
            // lang3.nextElementSibling.innerHTML="Select a language";
            // fail[9].style.visibility="visible";
            error(lang1,"select the language");
         }
    else
        {
            // lang3.nextElementSibling.innerHTML=" ";
            // fail[9].style.visibility="hidden";
            success(lang1);
        }
        //  file validation
    if(file.value.trim()=="") 
        {
            // file.nextElementSibling.innerHTML="Choose a file";
            // fail[10].style.visibility="visible";
            error(file,"Choose a file");
        }
    else if(file.value.trim()!="")
        {
            let fileValue=file.value.trim();
            let validExtension=["jpg","png","pdf","docx"];
            let imagPos=fileValue.lastIndexOf(".");
            let imageExt=fileValue.substring(imagPos+1);
            let output=validExtension.includes(imageExt);
            if(!output)
            {
                error(file,"enter  valid file");
            }
            else
            {
                 success(file);
            }
        }
    else if (file.files.length > 0) 
        {
          for (const i = 0; i <= file.files.length - 1; i++) {
      
              const fsize = file.files.item(i).size;
              const file = Math.round((fsize / 1024));
              if (file >= 4096) {
                  file.nextElementSibling.innerHTML = "Select a file less than 1mb";
                  file.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
              } 
              else if (file < 1024) 
              {
                  file.nextElementSibling.innerHTML = "";
                  file.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
              }
              else 
              {
                  document.getElementById('size').innerHTML = '<b>'
                  + file + '</b> KB';
              }
          }
        }
    else
        {
            //  file.nextElementSibling.innerHTML=" ";
            //  fail[10].style.visibility="hidden";
            success(file);
        }
    }
function error(input,message)
{
   let feildMsg=input.parentElement;
   let errorMsg=feildMsg.querySelector("p");
   errorMsg.innerHTML=message;
   feildMsg.className="feildMsg error";
}
function success(input)
{
    let feildMsg=input.parentElement;
    feildMsg.className="feildMsg success";
}

















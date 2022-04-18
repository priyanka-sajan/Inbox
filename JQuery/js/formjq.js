$(document).ready(function() 
{
    $('#myform').submit(function (e) 
    { 
      e.preventDefault();
      validate(); 

    });
});
function validate()
{
    let firstname = $('#fname');
    let lastname = $('#lname');
    let mail = $('#mail');
    let phone = $("#ph");
    let password = $('#pswd');
    let cpassword = $('#Cpswd');
    let dateofbirth = $('#dob');
    let message = $("#description");
    let select=$("#dropDown");
    let file = $("#file");
    let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let validPhone = /^\d{10}$/;
    let validEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9+_.-]+/;
    let name = /[!@#$%^&*]/;
    // firstname validation
    if (firstname.val().trim() == "") 
    {
        error(firstname, "* first name cannot be empty");
    }
    else if (!isNaN(firstname.val())) 
    {
        error(firstname, "* Name should be in character");
    }
    else if (firstname.val().match(name)) 
    {
        error(firstname, "* Name should not be special characters");
    } 
    else 
    {
        success(firstname, "");
    }
    // lastname validation
    if (lastname.val().trim() === "") 
    {
        error(lastname, "* Last name cannot be empty");
    } 
    else if (!isNaN(lastname.val())) 
    {
        error(lastname, "* Name should be in character");
    } 
    else if (lastname.val().match(name)) 
    {
        error(lastname, "* Name should not be special characters");
    } 
    else 
    {
        success(lastname);
    }
    // Email validation
    if (mail.val().trim() == "") 
    {
        error(mail, "* Email field is required");
    } 
    else if (!mail.val().match(validEmail)) 
    {
        error(mail, "* Enter a valid email");
    } 
    else 
    {
        success(mail);
    }
    // password validation
    if (password.val().trim() == "") 
    {
        error(password, "* Password field is required");
    } 
    else if (!password.val().match(validPassword)) 
    {
        error(password, "* Atleast 1 capital,smallletter & special characters");
    } 
    else 
    {
        success(password);
    }
    //confirm-password Validdation
    if (cpassword.val() == "") 
    {
        error(cpassword, "* Password must be filled out");
    } 
    else if (cpassword.val() != password.val()) 
    {
        error(cpassword, "* Password doesn't match");
    } 
    else 
    {
        success(cpassword);
    }
    // gender validation
    if ($('input[type="radio"]:checked' && 'input[type="radio"]:checked' && 'input[type="radio"]:checked').length > 0) 
    {
        $('#error1').text("");
    } 
    else 
    {
        $('#error1').text("* Gender required");
    }
    // dob validation
    if (dateofbirth.val().trim() == "") 
    {
        error(dateofbirth, "* Enter the date");
    } 
    else 
    {
        success(dateofbirth);
    }
    // phone no validation
    if (phone.val().trim() == "") 
    {
        error(phone, "* Enter the phone no:");
    } 
    else if (!phone.val().match(validPhone)) 
    {
        error(phone, "* Enter a valid number");
    } 
    else 
    {
        success(phone);
    }
    // message validation
    if (message.val().trim() == "") 
    {
        error(message, "* Message feild cannot be empty");
    } 
    else if (message.val().length <10) 
    {
        error(message, "* Address must contain more than 10 characters");
    }
    else 
    {
        success(message);
    }
    //select validation
    if(select.val()=="")
    {
        error(select,"*Please select a country");   
    }
    else
    {
        success(select);
    }
    // language validation
    if ($('input[type="checkbox"]:checked' && 'input[type="checkbox"]:checked' && 'input[type="checkbox"]:checked').length > 0) 
    {
        $('#error2').text("");
    } 
    else 
    {
        $('#error2').text("* Checkbox required");
    }
    //  file validation
    if (file.val().trim() == "") 
    {
        error(file, "* Choose a file");
    } 
    else if (file.val().trim() != "") 
    {
        let fileValue = file.val().trim();
        let validExtension = ["jpg", "png"];
        let imagPos = fileValue.lastIndexOf(".");
        let imageExt = fileValue.substring(imagPos + 1);
        let output = validExtension.includes(imageExt);
        if (!output) 
        {
            error(file, "* enter  valid file");
        } 
        else 
        {
            success(file);
        }
    } 
    else 
    {
        success(file);
    }
}
function error(input, message) 
{
    input.siblings("p").text(message);
    input.parent().addClass("feildMsg error");
}
function success(input, message) 
{
    input.siblings("p").text(message);
    input.parent().removeClass("feildMsg error");
    input.parent().addClass("feildMsg success");
}


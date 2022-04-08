let form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

function validate()
{
    let firstname = document.getElementById('fname');
    let lastname = document.getElementById('lname');
    let mail = document.getElementById('mail');
    let phone = document.getElementById("ph");
    let password = document.getElementById('pswd');
    let cpassword = document.getElementById('Cpswd');
    let gen1 = document.getElementById("gen1");
    let gen2 = document.getElementById("gen2");
    let gen3 = document.getElementById("gen3");
    let dateofbirth = document.getElementById('dob');
    let message = document.getElementById("description");
    let lang1 = document.getElementById("lang1");
    let lang2 = document.getElementById("lang2");
    let lang3 = document.getElementById("lang3");
    let file = document.getElementById("file");
    let fail = document.getElementsByClassName("fa-circle-exclamation");
    let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let validPhone = /^\d{10}$/;
    let validEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9+_.-]+/;
    let name = /[!@#$%^&*]/;

    //  firstname validation
    if (firstname.value.trim() == "") 
    {
        error(firstname, "first name cannot be empty");
    } else if (!isNaN(firstname.value))
    {
        error(firstname, "Name should be in character");
    } else if (firstname.value.match(name)) 
    {
        error(firstname, "Name should not be special characters");
    } else 
    {
        success(firstname);
    }
    // lastname validation
    if (lastname.value.trim() === "") 
    {
        error(lastname, "Last name cannot be empty");
    } else if (!isNaN(lastname.value))
    {
        error(lastname, "Name should be in character");
    } else if (lastname.value.match(name))
    {
        error(lastname, "Name should not be special characters");
    } else
    {
        success(lastname);
    }
    // Email validation
    if (mail.value.trim() == "") 
    {
        error(mail, "Email field is required");
    } else if (!mail.value.match(validEmail)) 
    {
        error(mail, "Enter a valid email");
    } else 
    {
        success(mail);
    }
    // password validation
    if (password.value.trim() == "") {
        error(password, "Password field is required");
    } else if (!password.value.match(validPassword))
    {
        error(password, "Atleast 1 capital,smallletter & special characters");
    } else 
    {
        success(password);
    }
    //confirm-password Validdation
    if (cpassword.value == "") 
    {
        error(cpassword, "enter password");
    } else if (cpassword.value != password.value) 
    {
        error(cpassword, "Password doesn't match");
    } else 
    {
        success(cpassword);
    }
    // gender validation
    if (gen1.checked == false && gen2.checked == false && gen3.checked == false) 
    {
        error(gen1, "Select the gender");
    } else 
    {
        success(gen1);
    }
    // dob validation
    if (dateofbirth.value.trim() == "")
    {
        error(dateofbirth, "Enter the date");
    } else 
    {
        success(dateofbirth);
    }
    // phone no validation
    if (phone.value.trim() == "")
    {
        error(phone, "Enter the phone no:");
    } else if (!phone.value.match(validPhone))
    {
        error(phone, "Enter a valid number");
    } else
    {
        success(phone);
    }
    // message validation
    if (message.value.trim() == "")
    {
        error(message, "Message feild cannot be empty");
    } else if (message.value.length < 10) 
    {
        error(message, "Address must contain more than 10 characters");
    } else 
    {
        success(message);
    }
    // language validation
    if (lang1.checked == false && lang2.checked == false && lang3.checked == false)
    {
        error(lang1, "select the language");
    } else 
    {
        success(lang1);
    }
    //  file validation
    if (file.value.trim() == "") 
    {
        error(file, "Choose a file");
    } else if (file.value.trim() != "") 
    {
        let fileValue = file.value.trim();
        let validExtension = ["jpg", "png", "pdf", "docx"];
        let imagPos = fileValue.lastIndexOf(".");
        let imageExt = fileValue.substring(imagPos + 1);
        let output = validExtension.includes(imageExt);
        if (!output)
        {
            error(file, "enter  valid file");
        } else 
        {
            success(file);
        }
    } else if (file.files.length > 0) 
    {
        for (const i = 0; i <= file.files.length - 1; i++) 
        {
            const fsize = file.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) 
            {
                file.nextElementSibling.innerHTML = "Select a file less than 1mb";
                file.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
            } else if (file < 1024)
            {
                file.nextElementSibling.innerHTML = "";
                file.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
            } else 
            {
                document.getElementById('size').innerHTML = '<b>' +
                    file + '</b> KB';
            }
        }
    } else 
    {
        success(file);
    }
}

function error(input, message)
{
    let feildMsg = input.parentElement;
    let errorMsg = feildMsg.querySelector("p");
    errorMsg.innerHTML = message;
    feildMsg.className = "feildMsg error";
}

function success(input)
 {
    let feildMsg = input.parentElement;
    feildMsg.className = "feildMsg success";
}
$(document).ready(function () {
            $("#sub").click(function (event) {

checked = $("input[name=cat]:checked").length;
//checked1 = $("input[name=female]:checked").length;
//checked2 = $("input[name=others]:checked").length;

if (document.getElementById("fname").value =="")
    {
        alert ("Please fill in your first name.");
        event.preventDefault();
    }
    else if (document.getElementById("lname").value =="")
    {
        alert ("Please fill in your last name.");
        event.preventDefault();
    }
else if (document.getElementById("ph").value =="")
    {
        alert ("Please fill in your mobile code.");
        event.preventDefault();
    }
else if (document.getElementById("num").value =="")
    {
        alert ("Please fill in your Mobile Number.");
        event.preventDefault();
    }
else if (document.getElementById("email").value =="")
    {
        alert ("Please fill in your email.");
        event.preventDefault();
    }
else if (document.getElementById("pass").value =="")
    {
        alert ("Please fill in your password.");
        event.preventDefault();
    }
else if (document.getElementById("cpass").value =="")
    {
        alert ("Please fill in your confirm password.");
        event.preventDefault();
    }
else if(!checked) {
        alert("Please choose your Category: Faculty or Student");
        event.preventDefault();
      }
else if(document.getElementById("RegId").value =="") {
        alert("Please fill in your Registration ID.");
        event.preventDefault();
      }
else if(!validateRegId()){
event.preventDefault();
}
else if(!ValidatePassword()){
event.preventDefault();
}
else if(!checkMobile()){
event.preventDefault();
}
               
            });
 });

function ValidatePassword() {
        var password = document.getElementById("pass").value;
        var confirmPassword = document.getElementById("cpass").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }else{
            return true;
}
    }

function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false)
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}

function checkMobile()
{
    var select = document.getElementById("ph").value;
    var mobile = document.getElementById('num');
    if(mobile.value!=""){
    if(select=="+91"){

    if(mobile.value.length!=10){
        alert("required 10 digits, match requested format!");
return false;
    }else{
return true;
    }
    }else{
alert("Kindly enter national mobile number");
return false;
    }
    }else{
alert("Kindly enter mobile number");
return false;
    }
}

function validateRegId(){

var catg = document.querySelector('input[name="cat"]:checked').value;
console.log(catg);
var RegId = document.getElementById('RegId');

if(catg == "Student"){
var reg = /^[0-9]{4}[A-Z]{2}[0-9]{4}$/;


if (reg.test(RegId.value) == false)
{
alert('Must contain following pattern:First 4 numbers , 2 capital letters and again 4 numbers ');
return false;
}

return true;
}else if(catg == "Faculty"){
var reg = /^[0-9]{4}[A-Z]{1}$/;


if (reg.test(RegId.value) == false)
{
alert('Must contain following pattern:4 numbers and 1 capital letter');
return false;
}

return true;
}else{
alert('Please select category');
return false;
}

}
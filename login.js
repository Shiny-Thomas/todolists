let user=document.getElementById("user");
let usererror=document.getElementById("usererror");
let password=document.getElementById("password");
let passerror=document.getElementById("passerror");

// email
var pvalidate;

function uvalidate()
{
    
    var name="admin";
    if(user.value==name){
        usererror.innerHTML="valid";
        usererror.style.color="green";
        usererror.style.border="1px solid green";
        usererror.style.display="block";
        return true;
    }
    else{
        usererror.innerHTML="Invalid";
        usererror.style.color="red";
        usererror.style.border="1px solid red";
        usererror.style.display="block";
        return false;
    }
    
}   

// password
    function pvalidate(){
     var num="12345";

        if(password.value==num){
        passerror.innerHTML="Password is valid";
        passerror.style.color="green";
        passerror.style.border="2px solid green";
        passerror.style.display="block";
        return true;
    }
    else{
        passerror.innerHTML="Password is invalid";
        passerror.style.color="red";
        passerror.style.border="2px solid red";
        passerror.style.display="block";
        return false;
    }
    }
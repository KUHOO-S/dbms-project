function formValidation()
{
var name=document.signup.username.value;
var email=document.signup.email.value;
var phno=document.signup.mobile.value;

if(name="" || )
{
  alert("Do not leave name blank");
}

else if(email.match( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/))
{
  alert("Enter Valid Email");
}
else if(phno.length!=10)
{
  alert("enter valid phone number");
}
else
{
  return true;
}
}
